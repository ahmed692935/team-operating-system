"use client";

import React from "react";
// Import using the relative path from your tree: image_6b03d6.png
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import DailyTaskView from "../../components/views/DailyTaskView";
import { TeamUpdates } from "../../components/layout/TeamUpdates";

export default function DailyTaskPage() {
  return (
    <DashboardLayout>
      {/* Wrapper for side-by-side layout */}
      <div className="flex gap-8 h-full w-full">
        
        {/* LEFT COLUMN: Check-in Form */}
        <div className="flex-1 min-w-0 overflow-y-auto">
          <DailyTaskView />
        </div>

        {/* RIGHT COLUMN: Team Updates - fixed width */}
        <div className="w-[420px] shrink-0 overflow-y-auto hidden lg:block">
          <TeamUpdates />
        </div>

      </div>
    </DashboardLayout>
  );
}