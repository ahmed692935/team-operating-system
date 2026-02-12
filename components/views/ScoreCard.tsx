"use client";

import React from "react";
import { TeamMember } from "@/types";
import { motion } from "framer-motion";

interface ScorecardViewProps {
  member: TeamMember;
}

export const ScorecardView: React.FC<ScorecardViewProps> = ({ member }) => {
  const isGhadi = member.name === "Ghadi";

  const reportsTo = isGhadi ? "The Board" : "Head of Growth";
  const roleType = isGhadi ? "Founder" : "Contractor";
  const accessLevel = isGhadi ? "ADMIN" : "LEAD";

  return (
    <div className="space-y-6 lg:space-y-8 relative">
      {/* Top Meta Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-4 text-xs font-medium tracking-wide uppercase pb-4 border-b border-white/5">
        <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            Reports to:{" "}
            <span className="text-white font-bold">{reportsTo}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
            Type: <span className="text-white font-bold">{roleType}</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Access:{" "}
            <span className="text-red-500 font-bold">{accessLevel}</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
          <div className="bg-red-500/10 text-red-500 px-2.5 lg:px-3 py-1.5 rounded-lg border border-red-500/10 font-bold text-[10px] lg:text-xs">
            !(152$) 8-day streak
          </div>
          <div className="bg-red-900/10 text-red-700 px-2.5 lg:px-3 py-1.5 rounded-lg border border-red-900/10 line-through text-[10px] lg:text-xs">
            %274C DTR
          </div>
          <div className="bg-green-500/10 text-green-500 px-2.5 lg:px-3 py-1.5 rounded-lg border border-green-500/10 font-bold text-[10px] lg:text-xs">
            %279S EOD
          </div>
        </div>
      </div>

      {/* A. MY KPIS */}
      <div className="space-y-4">
        <h3 className="text-white text-sm font-bold tracking-wide flex items-center gap-2">
          A. MY KPIS
          <span className="bg-[#1E1E24] text-gray-400 text-[10px] px-2 py-0.5 rounded-full border border-white/5">
            Weekly Targets
          </span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          <KpiCard
            title="Video ad batches per week"
            value="4"
            target="Target: 5+"
            label="LEAD"
            status="yellow"
          />
          <KpiCard
            title="Long-form edits per week"
            value="1"
            target="Target: 1+"
            label="LEAD"
            status="green"
          />
          <KpiCard
            title="Short-form clips per week"
            value="8"
            target="Target: 10+"
            label="LEAD"
            status="yellow"
          />
          <KpiCard
            title="Team output (Amir+Mahdi)"
            value="90%"
            target="Target: All delivered"
            label="LEAD"
            status="yellow"
          />
        </div>
      </div>

      {/* C. MILESTONES */}
      <div className="space-y-4">
        <h3 className="text-white text-sm font-bold tracking-wide">
          C. MILESTONES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          <MilestoneCard
            days="30 DAYS"
            items={[
              "Weekly production pipeline documented",
              "Amir and Mahdi receiving clear weekly briefs",
              "5 video ad batches produced in one week",
            ]}
            color="bg-red-500"
          />
          <MilestoneCard
            days="60 DAYS"
            items={[
              "15+ total video assets/week consistently",
              "Long-form YouTube quality improving",
              "Team running without daily direction",
            ]}
            color="bg-orange-500"
          />
          <MilestoneCard
            days="90 DAYS"
            items={[
              "Creative velocity target hit consistently",
              "Philip managing team independently",
              "Zero missed deadlines for 30 days",
            ]}
            color="bg-green-500"
          />
        </div>
      </div>

      {/* E. MY FUTURE */}
      <div className="space-y-4">
        <h3 className="text-white text-sm font-bold tracking-wide">
          E. MY FUTURE
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
          <FutureCard
            icon="🔮"
            title="MY 3-YEAR VISION"
            question="Where do you see yourself in 5 years? What does your life, career, and impact look like?"
          />
          <FutureCard
            icon="☀️"
            title="MY PERFECT DAY"
            question="Describe your ideal day from morning to night. What does it feel, look, and sound like when everything is exactly right?"
          />
          <FutureCard
            icon="🎯"
            title="MY GOALS RIGHT NOW"
            question="What are the 3-5 goals you are actively chasing? Professional, personal, health, creative — all of it."
          />
          <FutureCard
            icon="💭"
            title="MY BIGGER DREAMS"
            question="The audacious stuff. What would you build, create, or become if nothing was in the way?"
          />
        </div>
      </div>
    </div>
  );
};

const KpiCard = ({ title, value, target, label, status }: any) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#1E1E24] p-5 lg:p-6 rounded-[1.5rem] relative group hover:bg-[#25252b] transition-all cursor-pointer border border-transparent hover:border-white/5"
  >
    <div className="flex justify-between items-start mb-4 lg:mb-6">
      <div className="text-xs lg:text-sm text-gray-400 font-medium leading-snug max-w-[70%]">
        {title}
      </div>
      <div
        className={`w-2 h-2 rounded-full ${status === "green" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"}`}
      ></div>
    </div>
    <div className="flex items-end justify-between">
      <div>
        <div
          className={`text-2xl lg:text-3xl font-bold ${status === "green" ? "text-green-500" : "text-white"}`}
        >
          {value}
        </div>
        <div className="text-[10px] text-gray-500 mt-1 font-medium uppercase tracking-wide">
          {target}
        </div>
      </div>
      {/* Simple Graph */}
      <div className="flex gap-1 lg:gap-1.5 items-end h-8 lg:h-10 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="w-1 lg:w-1.5 bg-white/10 h-3 lg:h-4 rounded-full"></div>
        <div className="w-1 lg:w-1.5 bg-white/10 h-5 lg:h-6 rounded-full"></div>
        <div className="w-1 lg:w-1.5 bg-white/10 h-4 lg:h-5 rounded-full"></div>
        <div className="w-1 lg:w-1.5 bg-white/10 h-2 lg:h-3 rounded-full"></div>
        <div
          className={`w-1 lg:w-1.5 h-7 lg:h-8 rounded-full ${status === "green" ? "bg-green-500" : "bg-yellow-500"}`}
        ></div>
      </div>
    </div>
  </motion.div>
);

const MilestoneCard = ({ days, items, color }: any) => (
  <div
    className={`bg-[#1E1E24] p-5 lg:p-6 rounded-[1.5rem] relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
  >
    <div className={`absolute top-0 left-0 w-full h-1 ${color}`}></div>
    <h4 className="text-base lg:text-lg font-bold text-white mb-4 lg:mb-6 flex items-center justify-between">
      {days}
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
    </h4>
    <ul className="space-y-3 lg:space-y-4">
      {items.map((item: string, i: number) => (
        <li
          key={i}
          className="text-xs lg:text-sm text-gray-400 flex gap-2 lg:gap-3 items-start leading-relaxed group-hover:text-gray-300 transition-colors"
        >
          <span
            className={`mt-1.5 w-1.5 h-1.5 rounded-full ${color} shrink-0 opacity-50`}
          ></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FutureCard = ({ icon, title, question }: any) => (
  <div className="bg-[#1E1E24] p-5 lg:p-6 rounded-[1.5rem] flex flex-col hover:bg-[#25252b] transition-colors cursor-pointer min-h-[160px] lg:min-h-[180px] hover:shadow-xl hover:shadow-yellow-500/5 border border-transparent hover:border-yellow-500/10 group">
    <div className="flex items-center justify-between mb-3 lg:mb-4">
      <span className="text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <button className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
        <span className="text-xs">✏️</span>
      </button>
    </div>
    <h4 className="text-[10px] lg:text-xs font-bold text-yellow-500 tracking-widest uppercase mb-2">
      {title}
    </h4>
    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">
      {question}
    </p>
  </div>
);
