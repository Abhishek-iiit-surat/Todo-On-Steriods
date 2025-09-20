import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Dashboard from "./pages/DashBoard";
import SideBar from "./components/layout/SideBar";
import Profile from "./pages/Profile";
import AskAI from "./pages/AskAI";
import { uiStore } from "./store/uiStore";
export default function App() {
  const sidebarOpen = uiStore((s) => s.sidebarOpen);
  return (
    <Router>
      <div className="flex min-h-screen bg-[#e8eef7]">
        {/* Sidebar */}
        <div
          className={`flex-shrink-0 h-screen sticky top-0 transition-all duration-200 ${sidebarOpen ? "w-full sm:w-full md:w-56 lg:w-56" : "w-16"
            }`}
        >
          <SideBar />
        </div>
        <main className="flex-1 p-2 overflow-y-hidden z-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ask-ai" element={<AskAI />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
