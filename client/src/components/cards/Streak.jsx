import React from 'react'
import { FaFire } from "react-icons/fa";

function Streak() {
    return (
        <div className="bg-white flex-col rounded-3xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-bold">Your Streak</h3>
                <FaFire className='w-5 h-5 text-orange-500 font-semibold' />
            </div>
            <div >
                <h3 className='text-3xl font-bold'> 7 Days
                </h3>
            </div>
        </div>
    )
}

export default Streak
