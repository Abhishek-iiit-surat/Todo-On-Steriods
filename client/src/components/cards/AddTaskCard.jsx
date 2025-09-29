import React, { useState } from "react";
import { useTaskStore } from "../../store/taskStore";

function AddTaskCard() {
    const addTask = useTaskStore((state) => state.addTask);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium");
    const [deadline, setDeadline] = useState("");

    const handleGenerateTitle = () => setTitle("✨ AI Suggested Task Title");
    const handleRefineDescription = () =>
        setDescription(description + " (Refined by AI ✨)");
    const handleSave = () => {
        addTask({ title, description, priority, deadline });
        setTitle("");
        setDescription("");
        setPriority("medium");
        setDeadline("");
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 shadow-lg space-y-4 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800">Add New Task</h3>

            {/* Title */}
            <div className="space-y-1">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-600">Title</label>
                    {description && (
                        <button
                            type="button"
                            onClick={handleGenerateTitle}
                            className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline"
                        >
                            <span>✨ AI</span>
                        </button>
                    )}
                </div>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
                    placeholder="Enter task title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            {/* Description */}
            <div className="space-y-1">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-600">Description</label>
                    {description && (
                        <button
                            type="button"
                            onClick={handleRefineDescription}
                            className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline"
                        >
                            <span>✨ Refine</span>
                        </button>
                    )}
                </div>
                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
                    placeholder="Enter task description..."
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Priority & Deadline side by side */}
            <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                    <label className="text-sm font-medium text-gray-600">Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="flex-1 space-y-1">
                    <label className="text-sm font-medium text-gray-600">Deadline</label>
                    <input
                        type="datetime-local"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
                    />
                </div>
            </div>

            {/* Save button */}
            <div>
                <button
                    onClick={handleSave}
                    disabled={!title || !description}
                    className={`w-full px-4 py-2 rounded-lg text-white font-semibold shadow-md transition text-sm ${title && description
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                            : "bg-gray-300 cursor-not-allowed"
                        }`}
                >
                    Save Task
                </button>
            </div>
        </div>
    );
}

export default AddTaskCard;
