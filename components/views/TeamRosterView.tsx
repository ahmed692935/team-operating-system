"use client";

import React from "react";
import { UnitSection } from "./UnitSection";
import { UNIT_CONFIG } from "@/constants/unitConfig";
import { TEAM_MEMBERS } from "@/constants/teamData";
import { TeamMember } from "@/types/TeamRoster";

export default function TeamRosterView() {
  const getMembersForUnit = (memberIds: string[]): TeamMember[] => {
    return memberIds
      .map((id) => TEAM_MEMBERS.find((member) => member.id === id))
      .filter((member) => member !== undefined) as TeamMember[];
  };

  return (
    <div className="w-full space-y-16 pb-20">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          <span className="text-sm text-yellow-400 font-semibold tracking-wider uppercase">Organization</span>
        </div>
        <h1 className="text-5xl font-extrabold text-white">Team Roster</h1>
        <p className="text-base text-gray-400 max-w-2xl">
          Full visibility and control over all 17 active personnel across 6 units.
        </p>
      </div>

      {/* Render all units from config */}
      {UNIT_CONFIG.map((unit) => (
        <UnitSection
          key={unit.id}
          {...unit}
          members={getMembersForUnit(unit.memberIds)}
        />
      ))}

      {/* Summary Stats */}
      {/* <section className="pt-12 border-t border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Total Personnel
            </p>
            <p className="text-4xl font-bold text-yellow-400">17</p>
            <p className="text-xs text-gray-600 mt-2">Active members</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Average Compliance
            </p>
            <p className="text-4xl font-bold text-green-400">95.2%</p>
            <p className="text-xs text-gray-600 mt-2">Team performance</p>
          </div>
          <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Units</p>
            <p className="text-4xl font-bold text-blue-400">6</p>
            <p className="text-xs text-gray-600 mt-2">Teams operational</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}