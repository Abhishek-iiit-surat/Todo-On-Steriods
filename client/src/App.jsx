import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Dashboard from "./pages/DashBoard";
import SideBar from "./components/layout/SideBar";
import Profile from "./pages/Profile";
import AskAI from "./pages/AskAI";
import { IoMenu } from "react-icons/io5";
import { uiStore } from "./store/uiStore";

export default function App() {
  const sidebarOpen = uiStore((s) => s.sidebarOpen);
  const toggleSidebar = uiStore((s) => s.toggleSidebar);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#e8eef7]">
        {/* Navbar for small screens */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md z-40">
          <button
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <IoMenu className="w-6 h-6" />
          </button>
          <span className="font-bold text-xl">Listro</span>
        </div>

        {/* Main layout */}
        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <SideBar />

          {/* Main content */}
          <main
            className={`flex-1 p-4 transition-all duration-300 ${sidebarOpen ? "blur-sm md:blur-0" : "blur-0"
              }`}
            onClick={() => {
              // close sidebar when clicking outside on small screens
              if (sidebarOpen) toggleSidebar(false);
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ask-ai" element={<AskAI />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
