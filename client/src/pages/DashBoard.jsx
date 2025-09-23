
import Sidebar from "../components/layout/SideBar";
import UpcomingTasksCard from "../components/cards/UpcomingTaskCard";
import AddTaskCard from "../components/cards/AddTaskCard";
import AnalyticsCard from "../components/cards/AnalyticsCard";
import WeeklyActivityCard from "../components/cards/WeeklyActivityCard";
import { uiStore } from "../store/uiStore";
import GenericCard from "../components/cards/GenericCard";
import NextTask from "../components/cards/NextTask";
import CompletionRate from "../components/cards/CompletionRate";
import AiCard from "../components/cards/AiCard";
import Streak from "../components/cards/Streak";
export default function Dashboard() {
    const sidebarOpen = uiStore((s) => s.sidebarOpen);
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 md:gap-3 h-full overflow-hidden">
            {/* Small Generic Cards */}
            <div className="col-span-1 row-span-1">
                <div className="h-full flex flex-col">
                    <NextTask className="flex-1" />
                </div>
            </div>
            <div className="col-span-1 row-span-1 ">
                <div className="h-full flex flex-col">
                    <CompletionRate className="flex-1" />
                </div>
            </div>
            <div className="col-span-1 row-span-1 ">
                <div className="h-full flex flex-col">
                    <AiCard className="flex-1" />
                </div>
            </div>
            <div className="col-span-1 row-span-1 ">
                <div className="h-full flex flex-col">
                    <Streak className="flex-1" />
                </div>
            </div>

            {/* Bigger Cards */}
            <div className="col-span-2 row-span-2">
                <UpcomingTasksCard />
            </div>
            <div className="col-span-2 row-span-2">
                <AnalyticsCard />
            </div>
            <div className="col-span-2 row-span-2">
                <AddTaskCard />
            </div>
            <div className="col-span-2 row-span-2">
                <WeeklyActivityCard />
            </div>
        </div>
    );
}
