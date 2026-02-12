"use client";

import React from 'react';

export const TeamUpdates = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-red-500 text-[11px] font-black tracking-[0.2em] mb-2 uppercase">Team Updates</h3>
        <p className="text-gray-500 text-xs">Live feed of daily check-ins.</p>
      </div>

      {/* Stats Grid from your screenshot: image_6a9e7d.png */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl border border-white/5 bg-[#111111] text-center">
          <div className="text-xl font-black text-yellow-500">10</div>
          <div className="text-[8px] font-black text-gray-500 mt-1 uppercase">Dtms</div>
        </div>
        <div className="p-4 rounded-2xl border border-white/5 bg-[#111111] text-center">
          <div className="text-xl font-black text-blue-400">6</div>
          <div className="text-[8px] font-black text-gray-500 mt-1 uppercase">Eods</div>
        </div>
        <div className="p-4 rounded-2xl border border-white/5 bg-[#111111] text-center">
          <div className="text-xl font-black text-green-500">6</div>
          <div className="text-[8px] font-black text-gray-500 mt-1 uppercase">Wins</div>
        </div>
      </div>

      {/* Philip's Card Example */}
      <div className="bg-[#141417] rounded-3xl p-6 border border-white/5 space-y-4 shadow-xl">
        <div className="flex justify-between items-start">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center font-black text-red-500 text-xs">P</div>
            <div>
              <div className="text-sm font-bold text-white">Philip</div>
              <div className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">Lead Video Editor</div>
            </div>
          </div>
          <div className="text-[10px] text-gray-600 font-bold">17:51</div>
        </div>
        {/* ... rest of Philip's card content ... */}
      </div>
    </div>
  );
};