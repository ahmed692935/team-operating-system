"use client";

import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DailyTaskView() {
  const [activeTab, setActiveTab] = useState('morning');
  const isMorning = activeTab === 'morning';

  return (
    <div className="w-full bg-[#0A0A0A] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
      {/* Page header (DAILY RHYTHM / Check IN) */}
      <div className="px-10 pt-8 pb-2">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
          <span className="text-sm text-yellow-400 font-semibold tracking-wider">DAILY RHYTHM</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white mt-3">Check IN</h1>
        <p className="text-sm text-gray-400 mt-2">Start strong. Finish stronger. Track your daily impact.</p>
      </div>

      {/* Tab Headers matching image_6a8850.png */}
      <div className="flex border-b border-white/5">
        <button 
          onClick={() => setActiveTab('morning')}
          className={`flex-1 flex items-center justify-center gap-3 py-6 transition-all relative ${isMorning ? 'text-yellow-500 bg-white/[0.02]' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <Sun size={18} />
          <span className="text-[11px] font-black tracking-[0.2em] uppercase">Morning DTM</span>
          {isMorning && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />}
        </button>

        <button 
          onClick={() => setActiveTab('eod')}
          className={`flex-1 flex items-center justify-center gap-3 py-6 transition-all relative ${!isMorning ? 'text-blue-400 bg-white/[0.02]' : 'text-gray-500 hover:text-gray-300'}`}
        >
          <Moon size={18} />
          <span className="text-[11px] font-black tracking-[0.2em] uppercase">Eod of the Day</span>
          {!isMorning && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)]" />}
        </button>
      </div>

      <div className="p-10 space-y-8">
        <div className={`text-[11px] font-black tracking-[0.2em] uppercase ${isMorning ? 'text-yellow-500' : 'text-blue-400'}`}>
          {isMorning ? 'Morning Priorities' : 'End of Day Update'}
        </div>

        <div className="space-y-6">
          {isMorning ? (
            /* Morning Form image_6b16fb.png */
            <>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 ml-1">My #1 priority today</label>
                <input placeholder="The one thing that must get done..." className="w-full bg-[#111111] rounded-2xl px-6 py-5 text-gray-200 border border-white/5 focus:border-yellow-500/50 outline-none transition-all placeholder:text-gray-700" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 ml-1">Key number I am watching</label>
                <input placeholder="e.g. ROAS on new campaign, tickets resolved, videos delivered..." className="w-full bg-[#111111] rounded-2xl px-6 py-5 text-gray-200 border border-white/5 focus:border-yellow-500/50 outline-none transition-all placeholder:text-gray-700" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 ml-1">Am I stuck on anything?</label>
                <textarea rows={3} placeholder="Describe the blocker, or type 'No blockers' if clear..." className="w-full bg-[#111111] rounded-3xl px-6 py-5 text-gray-200 border border-white/5 focus:border-yellow-500/50 outline-none transition-all placeholder:text-gray-700 resize-none" />
              </div>
            </>
          ) : (
            /* EOD Form image_6b1a23.png */
            <>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 ml-1">What I completed today</label>
                <input placeholder="Tasks finished, deliverables shipped, progress made..." className="w-full bg-[#111111] rounded-2xl px-6 py-5 text-gray-200 border border-white/5 focus:border-blue-400/50 outline-none transition-all placeholder:text-gray-700" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 ml-1">What is carrying to tomorrow?</label>
                <input placeholder="Unfinished work, pending items..." className="w-full bg-[#111111] rounded-2xl px-6 py-5 text-gray-200 border border-white/5 focus:border-blue-400/50 outline-none transition-all placeholder:text-gray-700" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-gray-500 ml-1">KPI numbers to update (if applicable)</label>
                <input placeholder="e.g. 5 video batches delivered, 22 tests launched..." className="w-full bg-[#111111] rounded-2xl px-6 py-5 text-gray-200 border border-white/5 focus:border-blue-400/50 outline-none transition-all placeholder:text-gray-700" />
              </div>
            </>
          )}

          <button className={`mt-4 flex items-center gap-3 px-10 py-4 rounded-full font-black text-[11px] tracking-widest transition-all hover:scale-[1.02] active:scale-95 ${isMorning ? 'bg-yellow-500 text-black' : 'bg-blue-400 text-black'}`}>
            SUBMIT {isMorning ? 'MORNING CHECK-IN' : 'END OF DAY'}
            <span className="text-xl">›</span>
          </button>
        </div>
      </div>

      {/* TODAY'S TASKS Section */}
      <div className="space-y-6 px-10 py-10 border-t border-white/5">
        <h2 className="text-lg font-bold text-gray-400 tracking-wide uppercase text-[11px]">Today's Tasks</h2>
        
        <div className="space-y-4">
          <TaskItem title="Edit 2 UGC ad batches" day="Mon" />
          <TaskItem title="Brief Amir on motion graphics batch" day="Mon" />
          <TaskItem title="Brief Mahdi on format adaptations" day="Tue" />
          <TaskItem title="Edit long-form YouTube video" day="Wed" />
          <TaskItem title="Review all team output for quality" day="Fri" />
        </div>
      </div>
    </div>
  );
}

function TaskItem({ title, day }: { title: string; day: string }) {
  const [status, setStatus] = React.useState('To Do');
  
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-4 bg-[#111111] rounded-2xl border border-white/5 hover:bg-[#161616] transition-all">
      <div className="flex items-center gap-4 flex-1">
        <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
        <span className="text-gray-200 font-medium text-sm">{title}</span>
      </div>
      
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-gray-500 text-xs">{day}</span>
        
        <div className="relative group">
          <button className="bg-[#1E1E24] hover:bg-[#25252b] border border-white/10 text-gray-300 text-xs font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-2">
            {status}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          <div className="absolute right-0 mt-1 w-32 bg-[#1E1E24] border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <button
              onClick={() => setStatus('To Do')}
              className="block w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-[#25252b] hover:text-yellow-500 first:rounded-t-lg"
            >
              To Do
            </button>
            <button
              onClick={() => setStatus('In Progress')}
              className="block w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-[#25252b] hover:text-yellow-500"
            >
              In Progress
            </button>
            <button
              onClick={() => setStatus('Done')}
              className="block w-full text-left px-4 py-2 text-xs text-gray-300 hover:bg-[#25252b] hover:text-yellow-500 last:rounded-b-lg"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}