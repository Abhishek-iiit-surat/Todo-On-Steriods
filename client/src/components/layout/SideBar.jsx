import React from 'react'
import { uiStore } from "../../store/uiStore";
import Icon from "../../components/ui/Icon";
import { TbReportAnalytics } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


export default function Sidebar() {
    const { sidebarOpen, toggleSidebar, themeColor, themeHoverColor } = uiStore();

    return (
        <div
            className={`h-full bg-white shadow-lg flex flex-col items-center py-2 transition-all duration-500 `}
        >
            {/* Toggle button */}
            {sidebarOpen ? (
                <div className='flex justify-between w-full px-4'>
                    <div
                        className="flex items-center justify-between mb-3 font-bold text-2xl transition-colors duration-300 text-[color:var(--theme-color)] hover:text-[color:var(--theme-hover-color)]"
                        style={{
                            '--theme-color': themeColor,
                            '--theme-hover-color': themeHoverColor,
                        }}
                    >
                        Listro
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="flex justify-end mb-6 p-2 rounded-md hover:bg-gray-100 "
                    >
                        <IoMenu className="w-5 h-5" />
                    </button>
                </div>
            ) : (
                <div className='flex justify-center w-full px-2'>
                    <button
                        onClick={toggleSidebar}
                        className="flex justify-end mb-6 p-2 rounded-md hover:bg-gray-100 "
                    >
                        <IoMenu className="w-5 h-5" />
                    </button>
                </div>
            )}



            {/* Menu items */}
            <nav className="flex flex-col gap-4 w-full px-2">
                <a
                    href="/"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                    <TbReportAnalytics className="w-5 h-5" />
                    {sidebarOpen && <span>Dashboard</span>}
                </a>

                <a
                    href="/ask-ai"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                    <RiGeminiFill className="w-5 h-5" />
                    {sidebarOpen && <span>Ask AI</span>}
                </a>

                <a
                    href="/profile"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                    <LuUser className="w-5 h-5" />
                    {sidebarOpen && <span>Profile</span>}
                </a>
            </nav>
        </div>
    );
}
