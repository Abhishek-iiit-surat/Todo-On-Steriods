import React from 'react'
import { Link } from 'react-router-dom';
import { uiStore } from "../../store/uiStore";
import Icon from "../../components/ui/Icon";
import { TbReportAnalytics } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import ThemeToggle from '../ui/MaterialUISwitch';
import MaterialUISwitch from '../ui/MaterialUISwitch';


export default function Sidebar() {
    const {
        sidebarOpen,
        toggleSidebar,
        themeColor,
        themeHoverColor,
        darkmode,
        toggleDarkmode,
    } = uiStore();

    const handleDarkmodeClick = () => {
        toggleDarkmode && toggleDarkmode(!darkmode);
    };

    const handleSidebarClick = () => {
        toggleSidebar && toggleSidebar(!sidebarOpen);
    };

    return (
        <div
            className={`
        bg-white shadow-lg flex flex-col transition-all duration-300
        min-h-screen fixed top-0 left-0 z-50
        md:static md:z-auto 
        ${sidebarOpen ? "w-[70%] sm:w-[70%] md:w-56 lg:w-56" : "w-0 md:w-56"}
      `}
        >
            {/* scrollable area */}
            <div className="flex-1 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center w-full px-4 py-3 md:hidden">
                    <Link
                        className="font-bold text-2xl transition-colors duration-200 text-[color:var(--theme-color)] hover:text-[color:var(--theme-hover-color)]"
                        style={{
                            "--theme-color": themeColor,
                            "--theme-hover-color": themeHoverColor,
                        }}
                        to="/"
                    >
                        Listro
                    </Link>
                    {/* <button
                        onClick={handleSidebarClick}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <IoMenu className="w-6 h-6" />
                    </button> */}
                </div>

                {/* Menu items */}
                <nav className="flex flex-col gap-4 w-full px-2 mt-3">
                    <Link
                        to="/"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <TbReportAnalytics className="w-5 h-5" />
                        <span className="hidden md:inline">Dashboard</span>
                    </Link>
                    <Link
                        to="/ask-ai"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <AutoAwesomeIcon className="w-5 h-5" />
                        <span className="hidden md:inline">Ask AI</span>
                    </Link>
                    <Link
                        to="/profile"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <LuUser className="w-5 h-5" />
                        <span className="hidden md:inline">Profile</span>
                    </Link>
                    <a
                        className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100`}
                    >
                        <MdDarkMode className="w-5 h-5 hidden md:block" />
                        <span className="hidden md:inline">Dark Mode</span>
                        <MaterialUISwitch
                            onClick={handleDarkmodeClick}
                            className="ml-auto"
                        />
                    </a>
                </nav>
            </div>

            {/* fixed bottom (dark mode toggle) */}
            {/* <nav className="flex flex-col gap-4 w-full px-2 items-start mb-4">
                <a
                    className={`w-full flex items-center gap-2 py-2 rounded-md hover:bg-gray-100 px-3`}
                >
                    <MdDarkMode className="w-5 h-5 hidden md:block" />
                    <span className="hidden md:inline">Dark Mode</span>
                    <MaterialUISwitch
                        onClick={handleDarkmodeClick}
                        className="ml-auto"
                    />
                </a>
            </nav> */}
        </div>
    );
}