import Sidebar from "../components/layout/SideBar";
import UpcomingTasksCard from "../components/cards/UpcomingTaskCard";
import AddTaskCard from "../components/cards/AddTaskCard";
import AnalyticsCard from "../components/cards/AnalyticsCard";
import WeeklyActivityCard from "../components/cards/WeeklyActivityCard";
import { uiStore } from "../store/uiStore";


export default function Dashboard() {
    const sidebarOpen = uiStore((s) => s.sidebarOpen);


    return (
        <div className="min-h-screen bg-[#e8eef7] p-6">
            <div className="flex gap-6 h-[calc(100vh-48px)]">
                {/* Sidebar column */}
                <div
                    className={`flex-shrink-0 transition-all duration-200 ${sidebarOpen ? "w-64" : "w-20"
                        }`}
                >
                    <Sidebar />
                </div>


                {/* Main area */}
                <main className="flex-1 overflow-auto">
                    <div
                        className="grid grid-cols-2 gap-6 h-full"
                        style={{ gridTemplateRows: "7fr 3fr" }}
                    >
                        <div className="col-span-1 row-span-1">
                            <UpcomingTasksCard />
                        </div>
                        <div className="col-span-1 row-span-1">
                            <AnalyticsCard />
                        </div>
                        <div className="col-span-1 row-span-1">
                            <AddTaskCard />
                        </div>
                        <div className="col-span-1 row-span-1">
                            <WeeklyActivityCard />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
