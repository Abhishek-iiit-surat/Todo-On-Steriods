import React from 'react'
import { MdOutlineCloudDone } from "react-icons/md";

function CompletionRate() {
    return (
        <div className="bg-white rounded-3xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Completion</h1>
                <MdOutlineCloudDone className='w-6 h-6 text-green-500 font-semibold' />
            </div>
            <div >
                <h3 className='text-4xl font-bold'> 36 %
                </h3>
            </div>
        </div>
    )
}

export default CompletionRate;
