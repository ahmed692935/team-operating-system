"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamRosterView from "@/components/views/TeamRosterView";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  AlertCircle,
  Activity,
  Briefcase,
  BookOpen,
  Settings,
  LogOut,
  Search,
  Bell,
  Mail,
  Shield,
  Menu,
  X,
} from "lucide-react";

export const CoreLayout = ({ children, member, currentView, onViewChange, onLogout }: any) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "scorecard", icon: LayoutDashboard, label: "Scorecard" },
    { id: "dailytask", icon: CheckSquare, label: "Daily Task" },
    { id: "team", icon: Users, label: "My Team" },
    { id: "issues", icon: AlertCircle, label: "Issues" },
    { id: "rhythm", icon: Activity, label: "Rhythm" },
    { id: "business", icon: Briefcase, label: "Business" },
    { id: "playbooks", icon: BookOpen, label: "Playbooks" },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden">
      
      {/* --- LEFT SIDEBAR (Desktop) --- */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarExpanded ? 256 : 96 }}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        className="hidden lg:flex bg-[#0A0A0A] flex-col py-8 border-r border-white/5 shrink-0 z-20 relative"
      >
        <div className="mb-12 px-6 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl shrink-0">
            T
          </div>
          {sidebarExpanded && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold whitespace-nowrap">
              TaskFlow
            </motion.span>
          )}
        </div>

        <nav className="flex-1 flex flex-col gap-3 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex items-center gap-4 px-3 py-3 rounded-2xl transition-all ${
                currentView === item.id ? "bg-yellow-500 text-black" : "text-gray-500 hover:text-white hover:bg-white/10"
              }`}
            >
              <item.icon size={22} />
              {sidebarExpanded && <span className="font-semibold whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* --- SIDEBAR FOOTER --- */}
        <div className="mt-auto px-3 flex flex-col gap-2 border-t border-white/5 pt-6">
          <button className="flex items-center gap-4 px-3 py-3 text-gray-500 hover:text-white transition-all">
            <Settings size={22} />
            {sidebarExpanded && <span className="font-semibold">Settings</span>}
          </button>
          <button onClick={onLogout} className="flex items-center gap-4 px-3 py-3 text-gray-500 hover:text-red-500 transition-all">
            <LogOut size={22} />
            {sidebarExpanded && <span className="font-semibold">Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* --- TOP NAVBAR --- */}
        <header className="h-20 lg:h-24 flex items-center justify-between px-8 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold">Good Afternoon, {member.name.split(" ")[0]}</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center bg-[#18181A] rounded-2xl px-4 py-2 w-80 border border-white/5">
              <Search size={18} className="text-gray-500 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm w-full" />
            </div>
            <div className="flex items-center gap-4 border-l border-white/5 pl-6">
              <div className={`w-10 h-10 rounded-full ${member.avatarColor} flex items-center justify-center font-bold`}>
                {member.avatarInitials}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-none">{member.name}</p>
                <p className="text-xs text-gray-500 mt-1">{member.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>

      </div>
    </div>
  );
};

export default function MyTeamLayout() {
  const defaultMember = {
    name: "Ghadi",
    role: "Founder & CEO",
    avatarInitials: "G",
    avatarColor: "bg-yellow-500",
  };

  return (
    <CoreLayout
      member={defaultMember}
      currentView="team"
      onViewChange={() => {}}
      onLogout={() => {}}
    >
      <TeamRosterView />
    </CoreLayout>
  );
}