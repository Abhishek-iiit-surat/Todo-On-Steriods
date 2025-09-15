
import Sidebar from "../components/layout/SideBar";
import UpcomingTasksCard from "../components/cards/UpcomingTaskCard";
import AddTaskCard from "../components/cards/AddTaskCard";
import AnalyticsCard from "../components/cards/AnalyticsCard";
import WeeklyActivityCard from "../components/cards/WeeklyActivityCard";
import { uiStore } from "../store/uiStore";


export default function Dashboard() {
    const sidebarOpen = uiStore((s) => s.sidebarOpen);


    return (
        <div
            className="grid grid-cols-2 gap-2 h-full"
            style={{ gridTemplateRows: "6fr 4fr" }}
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
    );
}
