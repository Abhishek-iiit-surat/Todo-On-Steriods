import React from 'react'
import TaskList from "../../features/tasks/TaskList";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function UpcomingTasksCard() {
    return (
        <div className="bg-white rounded-2xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
                <button className="p-2 rounded-full bg-violet-50">
                    <HiAdjustmentsHorizontal className="w-5 h-5 text-violet-500" />
                </button>
            </div>
            <TaskList />
        </div>
    );
}