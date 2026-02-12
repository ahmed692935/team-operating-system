export interface TeamMember {
  name: string;
  role: string;
  avatarInitials: string;
  avatarColor: string;
  email?: string;
  kpis?: any[];
}

export interface DashboardView {
  id: string;
  label: string;
  component: React.ComponentType<any>;
}
