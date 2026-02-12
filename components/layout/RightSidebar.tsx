// import React from "react";
// import { ChevronRight, Calendar, Clock } from "lucide-react";
// import { TeamMember } from "@/types";

// interface RightSidebarProps {
//   member: TeamMember;
// }

// export const RightSidebar: React.FC<RightSidebarProps> = ({ member }) => {
//   return (
//     <div className="w-full space-y-8">
//       {/* EOD of Team Section */}
//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-white">EOD of Team</h3>
//           <div className="bg-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
//             3
//           </div>
//         </div>

//         <div className="space-y-4">
//           <EodItem
//             name="Head of Growth"
//             action="Submitted weekly report"
//             time="10m ago"
//             avatar="Ho"
//             bg="bg-green-500"
//             status="Submitted"
//           />
//           <EodItem
//             name="Amama"
//             action="Blocked on API access"
//             time="24m ago"
//             avatar="A"
//             bg="bg-red-500"
//             status="Blocked"
//             badge="1"
//           />
//           <EodItem
//             name="Talha AI"
//             action="Deployed new automation"
//             time="1h ago"
//             avatar="TA"
//             bg="bg-blue-500"
//             status="Done"
//           />
//         </div>
//       </div>

//       {/* Upcoming Meetings Section */}
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold text-white">Upcoming Rhythm</h3>

//         {/* Immediate Next Meeting (Big Card) */}
//         <div className="relative rounded-[1.5rem] overflow-hidden p-6 min-h-[180px] flex flex-col justify-between bg-[#1E1E24] group hover:bg-[#25252b] transition-all">
//           {/* Decorative Elements */}
//           <div className="absolute -right-6 -bottom-10 w-32 h-32 rounded-full border-[6px] border-yellow-500/5 group-hover:border-yellow-500/10 transition-colors"></div>
//           <div className="absolute -right-2 -bottom-6 w-24 h-24 rounded-full border-[6px] border-yellow-500/5 group-hover:border-yellow-500/10 transition-colors"></div>

//           <div className="relative z-10">
//             <div className="flex justify-between items-start mb-2">
//               <h4 className="text-white font-bold text-lg">
//                 Friday After Review
//               </h4>
//               <span className="text-yellow-500 font-bold text-xs bg-yellow-500/10 px-2 py-1 rounded-lg">
//                 Now
//               </span>
//             </div>
//             <p className="text-gray-400 text-sm mb-6 leading-relaxed">
//               Coming up in 2 hours. Prepare your scorecard and review weekly
//               KPIs.
//             </p>

//             <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold py-3.5 px-6 rounded-xl transition-colors w-full flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
//               Join Meeting <ChevronRight size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Future Meetings List */}
//         <div className="bg-[#1E1E24] rounded-[1.5rem] p-2 space-y-1">
//           <MeetingItem
//             title="Monday Morning Download"
//             time="Mon, 9:00 AM"
//             duration="30m"
//             color="text-red-500"
//             bg="bg-red-500/10"
//           />
//           <MeetingItem
//             title="Design Review"
//             time="Mon, 2:00 PM"
//             duration="1h"
//             color="text-purple-500"
//             bg="bg-purple-500/10"
//           />
//           <MeetingItem
//             title="Product Sync"
//             time="Tue, 11:00 AM"
//             duration="45m"
//             color="text-blue-500"
//             bg="bg-blue-500/10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const EodItem = ({ name, action, time, avatar, bg, badge, status }: any) => (
//   <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#1E1E24] hover:bg-[#25252b] cursor-pointer transition-all group border border-transparent hover:border-white/5">
//     <div
//       className={`w-10 h-10 rounded-full ${bg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-lg`}
//     >
//       {avatar}
//     </div>
//     <div className="flex-1 min-w-0">
//       <div className="flex justify-between items-center mb-0.5">
//         <div className="text-white font-bold text-sm truncate">{name}</div>
//         <div className="text-gray-500 text-[10px]">{time}</div>
//       </div>
//       <div className="text-gray-400 text-xs truncate flex items-center gap-2">
//         {status === "Blocked" && (
//           <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
//         )}
//         {action}
//       </div>
//     </div>
//     {badge && (
//       <div className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center shrink-0 font-bold shadow-lg shadow-red-500/20">
//         {badge}
//       </div>
//     )}
//   </div>
// );

// const MeetingItem = ({ title, time, duration, color, bg }: any) => (
//   <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
//     <div className="flex items-center gap-3 flex-1 min-w-0">
//       <div
//         className={`w-10 h-10 rounded-xl ${bg} ${color} flex items-center justify-center shrink-0`}
//       >
//         <Calendar size={18} />
//       </div>
//       <div className="min-w-0 flex-1">
//         <div className="text-white font-bold text-sm group-hover:text-yellow-500 transition-colors truncate">
//           {title}
//         </div>
//         <div className="text-gray-500 text-xs flex items-center gap-2 truncate">
//           {time}
//         </div>
//       </div>
//     </div>
//     <div className="text-gray-600 text-xs font-medium bg-[#111] px-2 py-1 rounded-md border border-white/5 shrink-0 ml-2">
//       {duration}
//     </div>
//   </div>
// );

"use client";

import React from "react";
import { TeamMember } from "@/types";
import { ChevronRight, Calendar } from "lucide-react";

interface RightSidebarProps {
  member: TeamMember;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ member }) => {
  return (
    <div className="w-full space-y-8">
      {/* EOD of Team Section */}
      <div className="space-y-5">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-white uppercase tracking-wide">EOD of Team</h3>
          <div className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full h-fit">
            3
          </div>
        </div>

        <div className="space-y-3">
          <EodItem
            name="Head of Growth"
            action="Submitted weekly report"
            time="10m ago"
            avatar="Ho"
            bg="bg-green-500"
            status="Submitted"
          />
          <EodItem
            name="Amama"
            action="Blocked on API access"
            time="24m ago"
            avatar="A"
            bg="bg-red-500"
            status="Blocked"
            badge="1"
          />
          <EodItem
            name="Talha AI"
            action="Deployed new automation"
            time="1h ago"
            avatar="TA"
            bg="bg-blue-500"
            status="Done"
          />
        </div>
      </div>

      {/* Upcoming Meetings Section */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wide px-1">Upcoming Rhythm</h3>

        {/* Immediate Next Meeting (Big Card) */}
        <div className="relative rounded-[1.5rem] overflow-hidden p-6 min-h-[200px] flex flex-col justify-between bg-[#1E1E24] group hover:bg-[#25252b] transition-all border border-white/5">
          {/* Decorative Elements */}
          <div className="absolute -right-6 -bottom-10 w-32 h-32 rounded-full border-[6px] border-yellow-500/5 group-hover:border-yellow-500/10 transition-colors"></div>
          <div className="absolute -right-2 -bottom-6 w-24 h-24 rounded-full border-[6px] border-yellow-500/5 group-hover:border-yellow-500/10 transition-colors"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start gap-3 mb-3">
              <h4 className="text-white font-bold text-lg leading-tight">
                Friday After Review
              </h4>
              <span className="text-yellow-500 font-bold text-xs bg-yellow-500/10 px-3 py-1 rounded-lg shrink-0 border border-yellow-500/20">
                Now
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Coming up in 2 hours. Prepare your scorecard and review weekly KPIs.
            </p>

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold py-4 px-6 rounded-2xl transition-colors w-full flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20">
              Join Meeting <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Future Meetings List */}
        <div className="bg-[#1E1E24] rounded-[1.5rem] p-3 space-y-2 border border-white/5">
          <MeetingItem
            title="Monday Morning Download"
            time="Mon, 9:00 AM"
            duration="30m"
            color="text-red-500"
            bg="bg-red-500/10"
          />
          <MeetingItem
            title="Design Review"
            time="Mon, 2:00 PM"
            duration="1h"
            color="text-purple-500"
            bg="bg-purple-500/10"
          />
          <MeetingItem
            title="Product Sync"
            time="Tue, 11:00 AM"
            duration="45m"
            color="text-blue-500"
            bg="bg-blue-500/10"
          />
        </div>
      </div>
    </div>
  );
};

const EodItem = ({ name, action, time, avatar, bg, badge, status }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1E1E24] hover:bg-[#25252b] cursor-pointer transition-all group border border-white/5 hover:border-white/10">
    <div
      className={`w-12 h-12 rounded-full ${bg} text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg`}
    >
      {avatar}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start mb-1">
        <div className="text-white font-bold text-sm">{name}</div>
        <div className="text-gray-500 text-xs ml-2 shrink-0">{time}</div>
      </div>
      <div className="text-gray-400 text-xs flex items-center gap-2">
        {status === "Blocked" && (
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0"></span>
        )}
        <span>{action}</span>
      </div>
    </div>
    {badge && (
      <div className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center shrink-0 font-bold shadow-lg shadow-red-500/20">
        {badge}
      </div>
    )}
  </div>
);

const MeetingItem = ({ title, time, duration, color, bg }: any) => (
  <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
    <div className="flex items-center gap-3 flex-1 min-w-0">
      <div
        className={`w-10 h-10 rounded-lg ${bg} ${color} flex items-center justify-center shrink-0`}
      >
        <Calendar size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-white font-bold text-sm group-hover:text-yellow-500 transition-colors truncate">
          {title}
        </div>
        <div className="text-gray-500 text-xs truncate">
          {time}
        </div>
      </div>
    </div>
    <div className="text-gray-600 text-xs font-medium shrink-0 ml-2">
      {duration}
    </div>
  </div>
);
