import React from 'react'
import { BiTask } from "react-icons/bi";

function NextTask() {
    const content = "Complete Dashboard at time because sekar is angry and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, pariatur?";

    // Split into words, take first 10, join back & add ellipsis
    const truncated = content.split(" ").slice(0, 10).join(" ") + "...";

    return (
        <div className="bg-white flex-col rounded-3xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Next Task</h1>
                <BiTask className='w-6 h-6 text-blue-500 font-semibold' />
            </div>
            <div>
                <p>{truncated}</p>
            </div>
        </div>
    )
}

export default NextTask;
