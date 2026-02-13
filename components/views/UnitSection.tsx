"use client";

import React from "react";
import { motion } from "framer-motion";
import { TeamMember, UnitSectionProps } from "@/types/TeamRoster";
import { TeamMemberCard } from "./TeamMemberCard";
import { getColorClass } from "@/constants/unitConfig";

interface UnitSectionComponentProps extends UnitSectionProps {
  members: TeamMember[];
}

export function UnitSection({ title, description, color, members }: UnitSectionComponentProps) {
  const colorClass = getColorClass(color);

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <span className={`w-2 h-2 rounded-full ${colorClass} inline-block`} />
        <span className={`text-sm ${color === "yellow" ? "text-yellow-400" : color === "blue" ? "text-blue-400" : color === "green" ? "text-green-500" : color === "purple" ? "text-purple-500" : color === "cyan" ? "text-cyan-500" : "text-rose-500"} font-semibold tracking-wider uppercase`}>
          {title}
        </span>
      </div>
      <p className="text-gray-400 text-sm italic mb-8 max-w-2xl">
        {description}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
