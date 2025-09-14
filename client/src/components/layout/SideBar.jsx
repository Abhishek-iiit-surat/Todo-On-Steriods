import React from 'react'
import { uiStore } from "../../store/uiStore";
import Icon from "../../components/ui/Icon";

function SideBar() {
    const items = [
        { id: "dashboard", label: "Dashboard" },
        { id: "askai", label: "Ask AI" },
        { id: "profile", label: "Profile" },
    ];
    const open = uiStore((s) => s.sidebarOpen);
    const toggle = uiStore((s) => s.toggleSidebar);
    return (
        <aside
            className={`bg-white rounded-2xl shadow p-4 flex flex-col transition-all duration-200 ease-in-out h-full ${open ? "w-64" : "w-20"
                }`}
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="bg-indigo-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                        CL
                    </div>
                    {open && <div className="font-semibold">Codinglab</div>}
                </div>
                <button
                    aria-label="toggle sidebar"
                    onClick={toggle}
                    className="p-1 rounded-md hover:bg-gray-100"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="#6B7280"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    {items.map((it) => (
                        <li
                            key={it.id}
                            className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 ${open ? "pr-6" : "justify-center"
                                }`}
                        >
                            <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center">
                                <Icon>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="8"
                                            stroke="#7C3AED"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </Icon>
                            </div>
                            {open && <span className="text-sm">{it.label}</span>}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-500">
                    {open && <span>Dark Mode</span>}
                    <label
                        className={`relative inline-flex items-center cursor-pointer ${open ? "" : "mr-2"
                            }`}
                    >
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-indigo-600"></div>
                    </label>
                </div>
            </div>
        </aside>
    )
}

export default SideBar
