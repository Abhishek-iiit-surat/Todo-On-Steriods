import AreaGraph from "../../features/analytics/AreaGraph";
export default function WeeklyActivityCard() {
    return (
        <div className="h-64 bg-white rounded-3xl p-6 h-full shadow flex items-center justify-center">
            <div className="w-full h-56">
                <AreaGraph />
            </div>
        </div>
    );
}