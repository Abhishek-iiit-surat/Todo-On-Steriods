import MyRadarChart from "../../features/analytics/MyRadarChart";
import CompletionRatePiechart from "../../features/analytics/CompletionRatePiechart"
export default function AnalyticsCard() {
    return (
        <div className="h-64 bg-white rounded-3xl p-6 h-full shadow flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2  h-56"> {/* <-- fixed height */}
                {/* <div className="text-sm font-medium mb-2">Radar</div> */}
                <div className="h-56"> {/* chart area */}
                    <MyRadarChart />
                </div>
            </div>
            <div className="w-full md:w-1/2  h-56">
                {/* <div className="text-sm font-medium mb-2">Progress</div> */}
                <div className="h-56">
                    <CompletionRatePiechart />
                </div>
            </div>
        </div>
    );
}
