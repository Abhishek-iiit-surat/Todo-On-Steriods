import React from 'react'
import { FaFire } from "react-icons/fa";

function Streak() {
    return (
        <div className="bg-white flex-col rounded-3xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Your Streak</h1>
                <FaFire className='w-6 h-6 text-orange-500 font-semibold' />
            </div>
            <div >
                <h3 className='text-4xl font-bold'> 7 Days
                </h3>
            </div>
        </div>
    )
}

export default Streak
