function TaskList({ tasks, onDelete, onComplete }) {
    if (tasks.length === 0) {
        return (
            <div className="bg-slate-800 p-6 rounded-xl text-center text-slate-400 mt-4">
                No tasks found. Create your first task.
            </div>
        );
    }

    return (
        <div className="mt-8 space-y-4">
            {tasks.map((task) => (
                <div
                    key={task._id}
                    className={`p-5 rounded-xl border transition-all duration-300 ${task.status === "completed"
                        ? "bg-slate-900 border-green-600"
                        : "bg-slate-800 border-slate-700 hover:scale-[1.01]"
                        }`}
                >
                    <h3
                        className={`text-xl font-semibold ${task.status === "completed"
                            ? "line-through text-slate-500"
                            : ""
                            }`}
                    >
                        {task.title}
                    </h3>

                    <p
                        className={`mt-2 ${task.status === "completed"
                            ? "line-through text-slate-500"
                            : "text-slate-400"
                            }`}
                    >
                        {task.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-4 text-sm">

                        <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${task.status === "completed"
                                ? "bg-green-900 text-green-300"
                                : "bg-yellow-900 text-yellow-300"
                                }`}
                        >
                            {task.status === "completed"
                                ? "Completed ✓"
                                : "Pending"}
                        </span>

                        {task.deadline && (
                            <span className="text-blue-400">
                                Due: {new Date(task.deadline).toLocaleDateString()}
                            </span>
                        )}

                        <span className="text-slate-500">
                            Created: {new Date(task.createdAt).toLocaleDateString()}
                        </span>

                    </div>

                    <div className="mt-4 flex gap-3">

                        {task.status === "pending" && (
                            <button
                                onClick={() => onComplete(task)}
                                className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"                            >
                                Complete
                            </button>
                        )}

                        <button
                            onClick={() => onDelete(task._id)}
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"                        >
                            Delete
                        </button>

                    </div>

                </div>
            ))}
        </div>
    );
}

export default TaskList;