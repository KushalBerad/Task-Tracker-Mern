import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTask
} from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // remove old fetchTasks function above useEffect

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadTasks();
  }, []);

  // keep handleAdd separately
  const handleAdd = async (task) => {
    try {
      await createTask(task);

      const response = await getTasks();
      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const pending = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    return true;
  });

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);

      const response = await getTasks();
      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (task) => {
    try {
      await updateTask(task._id, {
        ...task,
        status: "completed"
      });

      const response = await getTasks();
      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            <p className="text-slate-400 text-sm">Total Tasks</p>
            <h2 className="text-3xl font-bold mt-2">
              {tasks.length}
            </h2>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl border border-yellow-500">
            <p className="text-slate-400 text-sm">Pending Tasks</p>
            <h2 className="text-3xl font-bold mt-2 text-yellow-400">
              {pending}
            </h2>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl border border-green-500">
            <p className="text-slate-400 text-sm">Completed Tasks</p>
            <h2 className="text-3xl font-bold mt-2 text-green-400">
              {completed}
            </h2>
          </div>

        </div>

        <TaskForm onAdd={handleAdd} />

        <div className="flex gap-3 my-6">

          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg transition ${filter === "all"
              ? "bg-blue-600"
              : "bg-slate-700 hover:bg-slate-600"
              }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg transition ${filter === "pending"
              ? "bg-yellow-500 text-black"
              : "bg-slate-700 hover:bg-slate-600"
              }`}
          >
            Pending
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg transition ${filter === "completed"
              ? "bg-green-600"
              : "bg-slate-700 hover:bg-slate-600"
              }`}
          >
            Completed
          </button>

        </div>

        <TaskList
          tasks={filteredTasks}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />


      </div>
    </div>
  );
}

export default App;