import React from 'react'
import TaskList from "../../features/tasks/TaskList";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function UpcomingTasksCard() {
    return (
        <div className="bg-white rounded-3xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Upcoming Tasks</h3>
                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse error provident rem repellendus odit modi. Quis minima nobis provident odio repellendus, debitis doloribus. Itaque, quis neque! Tempora aliquam laboriosam aperiam.</p> */}
                <button className="p-2 rounded-full bg-violet-50">
                    <HiAdjustmentsHorizontal className="w-5 h-5 text-violet-500" />
                </button>
            </div>
            <TaskList />
        </div>
    );
}