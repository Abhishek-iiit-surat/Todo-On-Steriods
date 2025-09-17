
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
            className="grid grid-cols-4 grid-rows-3 gap-2 h-full"
            style={{ gridTemplateRows: "6fr 4fr" }}
        >
            <div className="col-span-1 row-span-2 ">
                <GenericCard />
            </div>
            <div className="col-span-1 row-span-2 ">
                <GenericCard />
            </div>
            <div className="col-span-1 row-span-2 ">
                <GenericCard />
            </div>
            <div className="col-span-1 row-span-2 ">
                <GenericCard />
            </div>
            <div className="row-span-1 col-span-2">
                <UpcomingTasksCard />
            </div>
            <div className="row-span-1 col-span-2">
                <AnalyticsCard />
            </div>
            <div className="row-span-1 col-span-2">
                <AddTaskCard />
            </div>
            <div className="row-span-1 col-span-2">
                <WeeklyActivityCard />
            </div>
        </div>
    );
}
