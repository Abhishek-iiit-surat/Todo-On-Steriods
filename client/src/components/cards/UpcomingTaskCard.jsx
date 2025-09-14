import React from 'react'
import TaskList from "../../features/tasks/TaskList";
export default function UpcomingTasksCard() {
    return (
        <div className="bg-white rounded-2xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
                <button className="p-2 rounded-full bg-violet-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M6 12h12M12 6v12"
                            stroke="#7C3AED"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <TaskList />
        </div>
    );
}