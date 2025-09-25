import MyRadarChart from "../../features/analytics/MyRadarChart";
import CompletionRatePiechart from "../../features/analytics/CompletionRatePiechart"
export default function AnalyticsCard() {
    return (
        <div className="bg-white rounded-3xl p-6 shadow flex gap-4">
            <div className="w-1/2 h-64"> {/* <-- fixed height */}
                {/* <div className="text-sm font-medium mb-2">Radar</div> */}
                <div className="h-56"> {/* chart area */}
                    <MyRadarChart />
                </div>
            </div>
            <div className="w-1/2 h-64">
                {/* <div className="text-sm font-medium mb-2">Progress</div> */}
                <div className="h-56">
                    <CompletionRatePiechart />
                </div>
            </div>
        </div>
    );
}
