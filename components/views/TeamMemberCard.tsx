"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TeamMember } from "@/types/TeamRoster";

const StatusBadge = ({ status }: { status: "ready" | "locked" }) => {
  const isReady = status === "ready";
  return (
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${isReady ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
      <span className="text-sm font-medium text-gray-400">
        {isReady ? "Ready to operate" : "Locked and loaded"}
      </span>
    </div>
  );
};

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-gradient-to-br from-[#1a1a1e] to-[#0f0f12] border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl ${member.avatarColor} flex items-center justify-center font-bold text-lg text-white`}>
            {member.avatar}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-sm text-yellow-500 font-semibold tracking-wide mt-1 uppercase">
              {member.role}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <StatusBadge status={member.status} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-[#111117] rounded-2xl px-4 py-4 border border-white/5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tasks</p>
          <p className="text-2xl font-bold text-white">{member.tasksActive}</p>
          <p className="text-xs text-gray-600 mt-1">Active</p>
        </div>
        <div className="bg-[#111117] rounded-2xl px-4 py-4 border border-white/5">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Compliance</p>
          <p className="text-2xl font-bold text-green-400">{member.compliance}%</p>
          <p className="text-xs text-gray-600 mt-1">Score</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="w-full px-4 py-3 rounded-2xl bg-[#111117] border border-white/5 text-gray-300 font-semibold hover:bg-white/5 transition-all">
          Profile
        </button>
        <button className="w-full px-4 py-3 rounded-2xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 group/btn">
          <span>Manage</span>
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
