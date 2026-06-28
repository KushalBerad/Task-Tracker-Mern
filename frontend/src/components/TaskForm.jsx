import { useState } from "react";

function TaskForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // validation 1
        if (!title.trim()) {
            alert("Task title is required");
            return;
        }

        // validation 2
        if (!description.trim()) {
            alert("Task description is required");
            return;
        }

        // validation 3
        if (!deadline) {
            alert("Please select deadline");
            return;
        }

        const today = new Date().toISOString().split("T")[0];

        if (deadline < today) {
            alert("Deadline cannot be in past");
            return;
        }

        onAdd({
            title,
            description,
            deadline
        });

        // reset form after successful add
        setTitle("");
        setDescription("");
        setDeadline("");
    };

    return (
        <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl">

            <h2 className="text-xl font-semibold mb-5">
                Create New Task
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="w-full p-4 rounded-lg bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className="w-full p-4 rounded-lg bg-slate-700 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    className="w-full p-4 rounded-lg bg-slate-700 mb-4 outline-none"
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />

                <button
                    className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-lg font-medium"
                    type="submit"
                >
                    + Add New Task
                </button>

            </form>
        </div>
    );
}

export default TaskForm;