// "use client";

// import React, { useState } from "react";
// import { TeamMember } from "@/types";
// import { RightSidebar } from "../../components/layout/RightSidebar";
// import { TransitionWrapper } from "../shared/TransitionWrapper";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   LayoutDashboard,
//   Users,
//   CheckSquare,
//   AlertCircle,
//   Activity,
//   Briefcase,
//   BookOpen,
//   Settings,
//   LogOut,
//   Search,
//   Bell,
//   Mail,
//   Shield,
//   Menu,
//   X,
// } from "lucide-react";

// interface DashboardLayoutProps {
//   currentView: string;
//   onViewChange: (view: string) => void;
//   member: TeamMember;
//   onLogout: () => void;
//   children: React.ReactNode;
// }

// export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
//   currentView,
//   onViewChange,
//   member,
//   onLogout,
//   children,
// }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isAdmin = member.name === "Ghadi";
//   const showRightSidebar = currentView === "scorecard";

//   const menuItems = [
//     { id: "scorecard", icon: LayoutDashboard, label: "Scorecard" },
//     { id: "dailytask", icon: CheckSquare, label: "Daily Task" },
//     { id: "team", icon: Users, label: "My Team" },
//     { id: "issues", icon: AlertCircle, label: "Issues" },
//     { id: "rhythm", icon: Activity, label: "Rhythm" },
//     { id: "business", icon: Briefcase, label: "Business" },
//     { id: "playbooks", icon: BookOpen, label: "Playbooks" },
//   ];

//   if (isAdmin) {
//     menuItems.push({ id: "admin", icon: Shield, label: "Admin Console" });
//   }

//   const currentViewLabel = menuItems.find((i) => i.id === currentView)?.label;

//   return (
//     <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden selection:bg-yellow-500/30">
//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/80 lg:hidden backdrop-blur-sm"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             <motion.div
//               initial={{ x: -100 }}
//               animate={{ x: 0 }}
//               exit={{ x: -100 }}
//               className="absolute left-0 top-0 h-full w-24 bg-[#0A0A0A] border-r border-white/5 py-8 flex flex-col items-center shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="absolute top-4 right-4 text-gray-400 hover:text-white"
//               >
//                 <X size={20} />
//               </button>

//               <div className="mb-12">
//                 <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl">
//                   T
//                 </div>
//               </div>

//               <nav className="flex-1 w-full flex flex-col items-center gap-6 overflow-y-auto no-scrollbar pb-4">
//                 {menuItems.map((item) => {
//                   const Icon = item.icon;
//                   const isActive = currentView === item.id;
//                   return (
//                     <button
//                       key={item.id}
//                       onClick={() => {
//                         onViewChange(item.id);
//                         setMobileMenuOpen(false);
//                       }}
//                       className={`relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shrink-0
//                         ${isActive ? "bg-yellow-500 text-black" : "text-gray-500"}`}
//                     >
//                       <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
//                     </button>
//                   );
//                 })}
//               </nav>

//               {/* Bottom Actions */}
//               <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-white/5 w-full items-center">
//                 <button className="text-gray-500 hover:text-white transition-colors p-2">
//                   <Settings size={22} />
//                 </button>
//                 <button
//                   onClick={onLogout}
//                   className="text-gray-500 hover:text-red-500 transition-colors p-2"
//                 >
//                   <LogOut size={22} />
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Desktop Left Sidebar */}
//       <aside className="hidden lg:flex w-24 bg-[#0A0A0A] flex-col items-center py-8 border-r border-white/5 shrink-0 z-20">
//         {/* Logo */}
//         <div className="mb-12 cursor-pointer hover:scale-105 transition-transform">
//           <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/20">
//             T
//           </div>
//         </div>

//         {/* Menu Items */}
//         <nav className="flex-1 w-full flex flex-col items-center gap-6 overflow-y-auto no-scrollbar pb-4">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = currentView === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => onViewChange(item.id)}
//                 className={`group relative w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shrink-0
//                   ${
//                     isActive
//                       ? "bg-yellow-500 text-black shadow-[0_4px_20px_-4px_rgba(234,179,8,0.5)] scale-105"
//                       : "text-gray-500 hover:text-white hover:bg-white/10 hover:scale-105"
//                   }`}
//                 title={item.label}
//               >
//                 <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
//                 {isActive && (
//                   <motion.div
//                     layoutId="sidebar-active-indicator"
//                     className="absolute -right-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-yellow-500 rounded-l-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </nav>

//         {/* Bottom Actions */}
//         <div className="flex flex-col gap-6 mt-auto pt-4 border-t border-white/5 w-full items-center">
//           <button className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl">
//             <Settings size={22} />
//           </button>
//           <button
//             onClick={onLogout}
//             className="text-gray-500 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-xl"
//           >
//             <LogOut size={22} />
//           </button>
//         </div>
//       </aside>

//       {/* Main Content Wrapper */}
//       <div className="flex-1 flex flex-col relative overflow-hidden bg-[#050505]">
//         {/* Top Header */}
//         <header className="h-20 lg:h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 z-10 bg-[#050505]/80 backdrop-blur-md sticky top-0">
//           <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
//             <button
//               className="lg:hidden text-gray-500 hover:text-white shrink-0"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <Menu size={24} />
//             </button>
//             <div className="space-y-1 min-w-0">
//               <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight flex items-center gap-2 lg:gap-3">
//                 <span className="truncate">
//                   Good Afternoon, {member.name.split(" ")[0]}
//                 </span>
//                 <span className="text-gray-600 font-light text-base lg:text-lg hidden md:inline">
//                   /
//                 </span>
//                 <span className="text-yellow-500 text-sm lg:text-lg font-bold hidden md:inline tracking-wide uppercase truncate">
//                   {currentViewLabel}
//                 </span>
//               </h1>
//               <p className="text-xs lg:text-sm text-gray-500 font-medium hidden sm:block">
//                 Lets check your performance today.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 sm:gap-3 lg:gap-8 shrink-0">
//             {/* Search Bar - Hidden on mobile and tablet */}
//             <div className="hidden xl:flex items-center bg-[#18181A] rounded-2xl px-5 py-3.5 w-96 border border-transparent focus-within:border-yellow-500 focus-within:bg-[#1C1C1E] transition-all duration-300 group">
//               <Search
//                 size={20}
//                 className="text-gray-500 mr-3 group-focus-within:text-yellow-500 transition-colors"
//               />
//               <input
//                 type="text"
//                 placeholder="Search anything here..."
//                 className="bg-transparent border-none text-sm text-white placeholder-gray-500 focus:outline-none w-full font-medium"
//               />
//             </div>

//             {/* Actions */}
//             <div className="flex items-center gap-2 lg:gap-3">
//               <button className="relative w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
//                 <Mail size={20} className="lg:w-5 lg:h-5" />
//               </button>
//               <button className="relative w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
//                 <Bell size={20} className="lg:w-5 lg:h-5" />
//                 <span className="absolute top-2 right-2.5 lg:top-2.5 lg:right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]"></span>
//               </button>
//             </div>

//             {/* Profile Dropdown */}
//             <div className="flex items-center gap-3 lg:gap-4 pl-3 lg:pl-6 border-l border-white/5">
//               <div
//                 className={`w-9 h-9 lg:w-11 lg:h-11 rounded-full ${member.avatarColor} flex items-center justify-center font-bold text-xs lg:text-sm text-white shadow-lg ring-2 ring-white/5 cursor-pointer hover:ring-yellow-500 transition-all`}
//               >
//                 {member.avatarInitials}
//               </div>
//               <div className="hidden lg:block">
//                 <div className="text-sm font-bold text-white leading-tight">
//                   {member.name}
//                 </div>
//                 <div className="text-xs text-gray-500 font-medium mt-0.5">
//                   {member.role}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Scrollable Content Area */}
//         <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 pt-2 scrollbar-hide">
//           <div className="flex gap-6 lg:gap-8 h-full">
//             {/* Main Column */}
//             <div className="flex-1 min-w-0">
//               {/* Animated View Content */}
//               <TransitionWrapper viewKey={currentView}>
//                 {children}
//               </TransitionWrapper>
//             </div>

//             {/* Right Sidebar Column - Animated */}
//             <AnimatePresence mode="popLayout">
//               {showRightSidebar && (
//                 <motion.div
//                   initial={{ width: 0, opacity: 0, x: 50 }}
//                   animate={{ width: 320, opacity: 1, x: 0 }}
//                   exit={{ width: 0, opacity: 0, x: 50 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   className="shrink-0 hidden xl:block overflow-hidden"
//                 >
//                   <div className="w-80">
//                     <RightSidebar member={member} />
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useState } from "react";
import { TeamMember } from "@/types";
import { RightSidebar } from "./RightSidebar";
import { TransitionWrapper } from "../shared/TransitionWrapper";
import { motion, AnimatePresence } from "framer-motion";
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
import Logo from "../../public/images/logo.png";
import Image from "next/image";

interface DashboardLayoutProps {
  currentView: string;
  onViewChange: (view: string) => void;
  member: TeamMember;
  onLogout: () => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  currentView,
  onViewChange,
  member,
  onLogout,
  children,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const isAdmin = member.name === "Ghadi";
  const showRightSidebar = currentView === "scorecard";

  const menuItems = [
    { id: "scorecard", icon: LayoutDashboard, label: "Scorecard" },
    { id: "dailytask", icon: CheckSquare, label: "Daily Task" },
    { id: "team", icon: Users, label: "My Team" },
    { id: "issues", icon: AlertCircle, label: "Issues" },
    { id: "rhythm", icon: Activity, label: "Rhythm" },
    { id: "business", icon: Briefcase, label: "Business" },
    { id: "playbooks", icon: BookOpen, label: "Playbooks" },
  ];

  if (isAdmin) {
    menuItems.push({ id: "admin", icon: Shield, label: "Admin Console" });
  }

  const currentViewLabel = menuItems.find((i) => i.id === currentView)?.label;

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden selection:bg-yellow-500/30">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 lg:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              className="absolute left-0 top-0 h-full w-64 bg-[#0A0A0A] border-r border-white/5 py-8 px-4 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Logo */}
              <div className="mb-12 flex items-center gap-3">
                {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl shrink-0">
                  T
                </div> */}
                <Image alt="Logo" src={Logo} height={80} />
                {/* <span className="text-xl font-bold text-white">TaskFlow</span> */}
              </div>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col gap-2 overflow-y-auto scrollbar-hide">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onViewChange(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
                        ${
                          isActive
                            ? "bg-yellow-500 text-black"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                      <span className="font-semibold">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-white/5">
                <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                  <Settings size={22} />
                  <span className="font-semibold">Settings</span>
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all"
                >
                  <LogOut size={22} />
                  <span className="font-semibold">Logout</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Left Sidebar - Expandable on Hover */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarExpanded ? 256 : 96 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
        className="hidden lg:flex bg-[#0A0A0A] flex-col py-8 border-r border-white/5 shrink-0 z-20 relative overflow-hidden"
      >
        {/* Logo */}
        <div className="mb-12 px-6 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
          {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-yellow-500/20 shrink-0">
            T
          </div> */}
          <Image alt="Logo" src={Logo} height={80} />

          {/* <motion.span
            initial={false}
            animate={{
              opacity: sidebarExpanded ? 1 : 0,
              x: sidebarExpanded ? 0 : -20,
            }}
            transition={{ duration: 0.2 }}
            className="text-xl font-bold text-white whitespace-nowrap"
          >
            TaskFlow
          </motion.span> */}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 flex flex-col gap-3 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`group relative flex items-center gap-4 px-3 py-3 rounded-2xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-yellow-500 text-black shadow-[0_4px_20px_-4px_rgba(234,179,8,0.5)]"
                      : "text-gray-500 hover:text-white hover:bg-white/10"
                  }`}
                title={item.label}
              >
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.5 : 2}
                  className="shrink-0"
                />
                <motion.span
                  initial={false}
                  animate={{
                    opacity: sidebarExpanded ? 1 : 0,
                    x: sidebarExpanded ? 0 : -20,
                  }}
                  transition={{ duration: 0.2 }}
                  className="font-semibold whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
                {isActive && !sidebarExpanded && (
                  <motion.div
                    layoutId="sidebar-active-indicator"
                    className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-yellow-500 rounded-l-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/5 px-3">
          <button className="group relative flex items-center gap-4 px-3 py-3 rounded-2xl text-gray-500 hover:text-white hover:bg-white/10 transition-all">
            <Settings size={22} className="shrink-0" />
            <motion.span
              initial={false}
              animate={{
                opacity: sidebarExpanded ? 1 : 0,
                x: sidebarExpanded ? 0 : -20,
              }}
              transition={{ duration: 0.2 }}
              className="font-semibold whitespace-nowrap overflow-hidden"
            >
              Settings
            </motion.span>
          </button>
          <button
            onClick={onLogout}
            className="group relative flex items-center gap-4 px-3 py-3 rounded-2xl text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
          >
            <LogOut size={22} className="shrink-0" />
            <motion.span
              initial={false}
              animate={{
                opacity: sidebarExpanded ? 1 : 0,
                x: sidebarExpanded ? 0 : -20,
              }}
              transition={{ duration: 0.2 }}
              className="font-semibold whitespace-nowrap overflow-hidden"
            >
              Logout
            </motion.span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-[#050505]">
        {/* Top Header */}
        <header className="h-20 lg:h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 z-10 bg-[#050505]/80 backdrop-blur-md sticky top-0 border-b border-white/5">
          <div className="flex items-center gap-3 lg:gap-4 flex-1 min-w-0">
            <button
              className="lg:hidden text-gray-500 hover:text-white shrink-0"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="space-y-1 min-w-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight flex items-center gap-2 lg:gap-3">
                <span className="truncate">
                  Good Afternoon, {member.name.split(" ")[0]}
                </span>
                <span className="text-gray-600 font-light text-base lg:text-lg hidden md:inline">
                  /
                </span>
                <span className="text-yellow-500 text-sm lg:text-lg font-bold hidden md:inline tracking-wide uppercase truncate">
                  {currentViewLabel}
                </span>
              </h1>
              <p className="text-xs lg:text-sm text-gray-500 font-medium hidden sm:block">
                Lets check your performance today.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-8 shrink-0">
            {/* Search Bar - Hidden on mobile and tablet */}
            <div className="hidden xl:flex items-center bg-[#18181A] rounded-2xl px-5 py-3.5 w-96 border border-transparent focus-within:border-yellow-500 focus-within:bg-[#1C1C1E] transition-all duration-300 group">
              <Search
                size={20}
                className="text-gray-500 mr-3 group-focus-within:text-yellow-500 transition-colors"
              />
              <input
                type="text"
                placeholder="Search anything here..."
                className="bg-transparent border-none text-sm text-white placeholder-gray-500 focus:outline-none w-full font-medium"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              <button className="relative w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Mail size={20} className="lg:w-5 lg:h-5" />
              </button>
              <button className="relative w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                <Bell size={20} className="lg:w-5 lg:h-5" />
                <span className="absolute top-2 right-2.5 lg:top-2.5 lg:right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-[#050505]"></span>
              </button>
            </div>

            {/* Profile Dropdown */}
            <div className="flex items-center gap-3 lg:gap-4 pl-3 lg:pl-6 border-l border-white/5">
              <div
                className={`w-9 h-9 lg:w-11 lg:h-11 rounded-full ${member.avatarColor} flex items-center justify-center font-bold text-xs lg:text-sm text-white shadow-lg ring-2 ring-white/5 cursor-pointer hover:ring-yellow-500 transition-all`}
              >
                {member.avatarInitials}
              </div>
              <div className="hidden lg:block">
                <div className="text-sm font-bold text-white leading-tight">
                  {member.name}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  {member.role}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-hidden">
          <div className="flex gap-6 lg:gap-8 h-full">
            {/* Main Column */}
            <div className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-6 lg:pb-8 pt-6 scrollbar-hide">
              {/* Animated View Content */}
              <TransitionWrapper viewKey={currentView}>
                {children}
              </TransitionWrapper>
            </div>

            {/* Right Sidebar Column - Animated */}
            <AnimatePresence mode="popLayout">
              {showRightSidebar && (
                <motion.div
                  initial={{ width: 0, opacity: 0, x: 50 }}
                  animate={{ width: 320, opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="shrink-0 hidden xl:block overflow-hidden border-l border-white/5 bg-[#050505]"
                >
                  <div className="w-80 px-6 pt-6 h-full">
                    <RightSidebar member={member} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};
