export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  avatarColor: string;
  tasksActive: number;
  compliance: number;
  status: "ready" | "locked";
}

export interface UnitSectionProps {
  id: string;
  title: string;
  description: string;
  color: "yellow" | "blue" | "green" | "purple" | "cyan" | "rose";
  memberIds: string[];
}

export interface TeamRosterContextProps {
  units: UnitSectionProps[];
  members: TeamMember[];
}
