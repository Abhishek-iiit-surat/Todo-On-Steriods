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
    const { sidebarOpen, toggleSidebar, themeColor, themeHoverColor, darkmode, toggleDarkmode } = uiStore();
    const handleDarkmodeClick = () => {
        if (darkmode != undefined) {
            toggleDarkmode(!darkmode);
        }
    }
    return (
        <div
            className={`h-full bg-white shadow-lg flex flex-col justify-between items-center py-2 transition-all duration-200 `}
        >
            {/* Toggle button */}
            <div className='w-full'>
                {sidebarOpen ? (
                    <div className='flex justify-between w-full px-4'>
                        <Link
                            className="flex items-center justify-between mb-3 font-bold text-2xl transition-colors duration-200 text-[color:var(--theme-color)] hover:text-[color:var(--theme-hover-color)]"
                            style={{
                                '--theme-color': themeColor,
                                '--theme-hover-color': themeHoverColor,
                            }}
                            to='/'
                        >
                            Listro
                        </Link>
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
                    <Link
                        to="/"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <TbReportAnalytics className="w-5 h-5" />
                        {sidebarOpen && <span>Dashboard</span>}
                    </Link>

                    <Link
                        to="/ask-ai"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <AutoAwesomeIcon className="w-5 h-5" />
                        {sidebarOpen && <span>Ask AI</span>}
                    </Link>

                    <Link
                        to="/profile"
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                        <LuUser className="w-5 h-5" />
                        {sidebarOpen && <span>Profile</span>}
                    </Link>
                </nav>
            </div>

            <nav className="flex flex-col gap-4 w-full px-2 items-start">
                <a
                    className={`w-full flex items-center gap-2 py-2 rounded-md hover:bg-gray-100 ${sidebarOpen ? "px-3" : "px-0"
                        }`}
                >
                    {sidebarOpen ? (
                        <>
                            <MdDarkMode className="w-5 h-5" />
                            <span>Dark Mode</span>
                            <MaterialUISwitch onClick={handleDarkmodeClick} />
                        </>
                    ) : (
                        <MaterialUISwitch className="w-10" />
                    )}
                </a>
            </nav>



        </div>
    );
}
