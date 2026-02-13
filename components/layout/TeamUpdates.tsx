"use client";

import React, { useState } from 'react';
import { Star, CheckCircle2, AlertCircle } from 'lucide-react';

export const TeamUpdates = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Team member data
  const updates = [
    {
      id: 1,
      name: 'Philip',
      role: 'Lead Video Editor',
      avatar: 'P',
      avatarBg: 'bg-red-900/30',
      avatarText: 'text-red-500',
      time: '17:51',
      tags: ['EOD', 'WIN'],
      sections: [
        { label: 'COMPLETED', color: 'text-gray-400', content: '15 videos delivered this week. Personal record.' },
        { label: 'CARRY OVER', color: 'text-gray-400', content: 'Prep for next week\'s brief pipeline', kpi: '15 videos', kpiIcon: '✓' },
        { label: 'HIGHLIGHT', color: 'text-green-500', content: 'Hit 15 for the first time. The template system is working.' },
      ],
      type: 'eod',
    },
    {
      id: 2,
      name: 'Nour',
      role: 'Brand Lead',
      avatar: 'N',
      avatarBg: 'bg-purple-900/30',
      avatarText: 'text-purple-500',
      time: '09:16',
      tags: ['DTM'],
      sections: [
        { label: '#1 PRIORITY', color: 'text-yellow-500', content: 'Finalize the new landing page hero assets.' },
      ],
      type: 'dtm',
    },
    {
      id: 3,
      name: 'Dev Jour',
      role: 'Developer',
      avatar: 'DJ',
      avatarBg: 'bg-blue-900/30',
      avatarText: 'text-blue-500',
      time: '17:30',
      tags: ['EOD'],
      sections: [
        { label: 'COMPLETED', color: 'text-gray-400', content: 'Safari checkout bug fixed. Deployed to staging.' },
        { label: 'BLOCKER', color: 'text-red-500', content: 'Need API keys for the new payment gateway integration.' },
      ],
      type: 'eod',
    },
  ];

  // Filter updates based on active tab
  const filteredUpdates = updates.filter(update => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dtm') return update.type === 'dtm';
    if (activeTab === 'eod') return update.type === 'eod';
    return true;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-red-500 text-[11px] font-black tracking-[0.2em] mb-2 uppercase">Team Updates</h3>
        <p className="text-gray-500 text-xs">Live feed of daily check-ins.</p>
      </div>

      {/* Stats Grid */}
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

      {/* Tabs */}
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all ${
            activeTab === 'all'
              ? 'bg-white/10 border-white/20 text-white'
              : 'border-white/5 text-gray-500 hover:text-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('dtm')}
          className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all flex items-center gap-2 ${
            activeTab === 'dtm'
              ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
              : 'border-white/5 text-gray-500 hover:text-gray-300'
          }`}
        >
          <span>⚡</span> DTM
        </button>
        <button
          onClick={() => setActiveTab('eod')}
          className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all flex items-center gap-2 ${
            activeTab === 'eod'
              ? 'bg-blue-500/20 border-blue-500/30 text-blue-400'
              : 'border-white/5 text-gray-500 hover:text-gray-300'
          }`}
        >
          <span>◐</span> EOD
        </button>
      </div>

      {/* Team Updates Cards */}
      <div className="space-y-4">
        {filteredUpdates.map((update) => (
          <div key={update.id} className="bg-[#141417] rounded-3xl p-6 border border-white/5 space-y-4 shadow-xl">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className={`w-10 h-10 rounded-full ${update.avatarBg} flex items-center justify-center font-black ${update.avatarText} text-xs`}>
                  {update.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{update.name}</div>
                  <div className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter">{update.role}</div>
                </div>
              </div>
              <div className="text-[10px] text-gray-600 font-bold">{update.time}</div>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              {update.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[11px] font-black uppercase tracking-wider px-2 py-1 rounded ${
                    tag === 'DTM'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : tag === 'WIN'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-3 pt-2">
              {update.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <div className={`text-[11px] font-black uppercase tracking-wider ${section.color}`}>
                    {section.label}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{section.content}</p>
                  {section.kpi && (
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-semibold">
                      <span>{section.kpi}</span>
                      <span className="text-green-500">{section.kpiIcon}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Highlight Box (for special content) */}
            {update.sections.some((s) => s.label === 'HIGHLIGHT') && (
              <div className="mt-4 p-3 rounded-2xl bg-green-500/5 border border-green-500/20 flex gap-3">
                <Star size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-black text-green-500 uppercase tracking-wider">HIGHLIGHT</div>
                  <p className="text-xs text-green-400 leading-relaxed">
                    {update.sections.find((s) => s.label === 'HIGHLIGHT')?.content}
                  </p>
                </div>
              </div>
            )}

            {/* Blocker Box (for blockers) */}
            {update.sections.some((s) => s.label === 'BLOCKER') && (
              <div className="mt-4 p-3 rounded-2xl bg-red-500/5 border border-red-500/20 flex gap-3">
                <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-black text-red-500 uppercase tracking-wider">BLOCKER</div>
                  <p className="text-xs text-red-400 leading-relaxed">
                    {update.sections.find((s) => s.label === 'BLOCKER')?.content}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};