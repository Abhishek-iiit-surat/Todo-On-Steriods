import AreaGraph from "../../features/analytics/AreaGraph"
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function WeeklyActivityCard() {
    return (
        <div className="flex bg-white text-md  rounded-3xl p-6 h-full shadow flex items-center justify-between overflow-hidden">
            <div className="w-full h-full">
                <AreaGraph />
            </div>
            <button className="flex items-start p-2 rounded-full bg-violet-50">
                <HiAdjustmentsHorizontal className="w-5 h-5 text-violet-500" />
            </button>
        </div>
    )
}
