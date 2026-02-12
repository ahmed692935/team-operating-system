"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TeamMember } from "@/types";
import { useRouter } from "next/navigation";
import { ScorecardView } from "@/components/views/ScoreCard";

// Placeholder components for other views
const DailyTaskView = () => (
  <div className="text-white p-8">Daily Task View</div>
);
const TeamView = () => <div className="text-white p-8">Team View</div>;
const IssuesView = () => <div className="text-white p-8">Issues View</div>;
const RhythmView = () => <div className="text-white p-8">Rhythm View</div>;
const BusinessView = () => <div className="text-white p-8">Business View</div>;
const PlaybooksView = () => (
  <div className="text-white p-8">Playbooks View</div>
);
const AdminView = () => (
  <div className="text-white p-8">Admin Console View</div>
);

export default function DashboardPage() {
  const router = useRouter();
  const [currentView, setCurrentView] = useState("scorecard");

  // Mock user data - replace with actual authentication
  const member: TeamMember = {
    name: "Ghadi",
    role: "Founder & CEO",
    avatarInitials: "G",
    avatarColor: "bg-purple-500",
    email: "ghadi@company.com",
  };

  const handleLogout = () => {
    // Add logout logic here
    router.push("/");
  };

  const renderView = () => {
    switch (currentView) {
      case "scorecard":
        return <ScorecardView member={member} />;
      case "dailytask":
        return <DailyTaskView />;
      case "team":
        return <TeamView />;
      case "issues":
        return <IssuesView />;
      case "rhythm":
        return <RhythmView />;
      case "business":
        return <BusinessView />;
      case "playbooks":
        return <PlaybooksView />;
      case "admin":
        return <AdminView />;
      default:
        return <ScorecardView member={member} />;
    }
  };

  return (
    <DashboardLayout
      currentView={currentView}
      onViewChange={setCurrentView}
      member={member}
      onLogout={handleLogout}
    >
      {renderView()}
    </DashboardLayout>
  );
}
