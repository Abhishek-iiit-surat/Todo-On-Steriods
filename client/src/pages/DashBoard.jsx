
import Sidebar from "../components/layout/SideBar";
import UpcomingTasksCard from "../components/cards/UpcomingTaskCard";
import AddTaskCard from "../components/cards/AddTaskCard";
import AnalyticsCard from "../components/cards/AnalyticsCard";
import WeeklyActivityCard from "../components/cards/WeeklyActivityCard";
import { uiStore } from "../store/uiStore";
import GenericCard from "../components/cards/GenericCard";


export default function Dashboard() {
    const sidebarOpen = uiStore((s) => s.sidebarOpen);

    return (
        <div
            className="grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-4 gap-2 h-full"
        >
            {/* Small Generic Cards */}
            <div className="col-span-1">
                <GenericCard />
            </div>
            <div className="col-span-1">
                <GenericCard />
            </div>
            <div className="col-span-1">
                <GenericCard />
            </div>
            <div className="col-span-1">
                <GenericCard />
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
