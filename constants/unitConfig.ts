import { UnitSectionProps } from "@/types/TeamRoster";

export const UNIT_CONFIG: UnitSectionProps[] = [
  {
    id: "command",
    title: "Command",
    description: '"The ones who see the whole board. Strategy, vision, and the calls that shape everything."',
    color: "yellow",
    memberIds: ["1", "2"],
  },
  {
    id: "units",
    title: "Units",
    description: '"Specialized teams executing the vision. Each unit is a force multiplier."',
    color: "blue",
    memberIds: ["3", "4", "5", "6", "7"],
  },
  {
    id: "g-unit",
    title: "G-UNIT: Acquisition & Growth",
    description: '"Customer acquisition and expansion. Breaking new markets and scaling operations."',
    color: "green",
    memberIds: ["3", "4", "5"],
  },
  {
    id: "p-unit",
    title: "P-UNIT: Product & Innovation",
    description: '"Building exceptional products. R&D, technical development, and architectural decisions."',
    color: "purple",
    memberIds: ["4", "5", "6"],
  },
  {
    id: "d-unit",
    title: "D-UNIT: Delivery & Operations",
    description: '"Flawless execution. Operations, logistics, and quality assurance at scale."',
    color: "cyan",
    memberIds: ["3", "4", "6"],
  },
  {
    id: "c-unit",
    title: "C-UNIT: Culture & Strategy",
    description: '"People, culture, and strategic direction. Building the foundation for long-term success."',
    color: "rose",
    memberIds: ["1", "2"],
  },
];

const COLOR_MAP = {
  yellow: "bg-yellow-400",
  blue: "bg-blue-400",
  green: "bg-green-500",
  purple: "bg-purple-500",
  cyan: "bg-cyan-500",
  rose: "bg-rose-500",
};

export const getColorClass = (color: string): string => {
  return COLOR_MAP[color as keyof typeof COLOR_MAP] || COLOR_MAP.blue;
};
