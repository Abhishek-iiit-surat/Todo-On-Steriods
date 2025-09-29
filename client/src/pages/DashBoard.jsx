import { useRef, useState } from "react";
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
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Streak from "../components/cards/Streak";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Dashboard() {
    const sidebarOpen = uiStore((s) => s.sidebarOpen);

    // track which card is showing on mobile
    const [current, setCurrent] = useState(0);

    // our small cards components in an array
    const smallCards = [
        <NextTask key="1" />,
        <CompletionRate key="2" />,
        <AiCard key="3" />,
        <Streak key="4" />,
    ];

    const prevCard = () => {
        setCurrent((c) => (c === 0 ? smallCards.length - 1 : c - 1));
    };

    const nextCard = () => {
        setCurrent((c) => (c === smallCards.length - 1 ? 0 : c + 1));
    };

    return (
        <div className="h-full">
            {/*mall devices: controlled carousel + stacked big cards */}
            <div className="md:hidden">
                {/* Carousel area */}
                <div className="relative w-full">
                    {/* Buttons */}
                    <button
                        onClick={prevCard}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1 bg-white bg-opacity-40 hover:bg-opacity-80 shadow rounded-full transition-opacity"
                    >
                        <IoChevronBack className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextCard}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 bg-white bg-opacity-40 hover:bg-opacity-80 shadow rounded-full transition-opacity"
                    >
                        <IoChevronForward className="w-5 h-5" />
                    </button>

                    {/* Show only one card at a time */}
                    <div className="overflow-hidden w-full">
                        <div className="h-56 w-full flex items-stretch justify-center">
                            <div className="w-[95%] h-full flex-shrink-0">
                                {/* Force card to fill height */}
                                <div className="h-full flex flex-col">
                                    {smallCards[current]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big cards stacked below */}
                <div className="mt-3 space-y-3 px-1">
                    <UpcomingTasksCard />
                    <AnalyticsCard />
                    <AddTaskCard />
                    <WeeklyActivityCard />
                </div>
            </div>

            {/*md+ devices: original grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 h-full">
                {/* Small Generic Cards */}
                <div className="col-span-1 overflow-hidden h-56">
                    <div className="h-full flex flex-col">
                        <NextTask className="flex-1" />
                    </div>
                </div>
                <div className="col-span-1 overflow-hidden h-56">
                    <div className="h-full flex flex-col">
                        <CompletionRate className="flex-1" />
                    </div>
                </div>
                <div className="col-span-1 overflow-hidden h-56">
                    <div className="h-full flex flex-col">
                        <AiCard className="flex-1" />
                    </div>
                </div>
                <div className="col-span-1 overflow-hidden h-56">
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
        </div>
    );
}