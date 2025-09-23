import React from 'react'
import { FaWandMagicSparkles } from "react-icons/fa6";
function AiCard() {
    const content = "Complete Dashboard at time because sekar is angry and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, pariatur?";

    // Split into words, take first 10, join back & add ellipsis
    const truncated = content.split(" ").slice(0, 10).join(" ") + "...";
    return (
        <div className="bg-white flex-col rounded-3xl p-6 h-full shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-bold">What AI is saying...</h3>
                <FaWandMagicSparkles className='w-5 h-5 text-violet-500 font-semibold' />
            </div>
            <div >
                <p>
                    {truncated}
                </p>
            </div>
        </div>
    )
}

export default AiCard
