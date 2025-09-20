import React from 'react'
import { useState } from "react";
import { useTaskStore } from "../../store/taskStore";
function AddTaskCard() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const addTask = useTaskStore((s) => s.addTask);

    function onSave(e) {
        e.preventDefault();
        if (!title.trim()) return;
        addTask({ title: title.trim(), date: date || null, done: false });
        setTitle("");
        setDate("");
    }

    return (
        <div className="bg-white rounded-3xl p-6 h-full shadow" >
            <h3 className="text-lg font-semibold mb-3">Add New Task</h3>
            {/* <form onSubmit={onSave} className="flex flex-col gap-3">
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 rounded-md border"
                    placeholder="Task title"
                />
                <input
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    className="p-2 rounded-md border"
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
                    >
                        Save
                    </button>
                </div>
            </form> */}
        </div>
    );
}

export default AddTaskCard
