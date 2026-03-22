"use client";

import React, { useState } from "react";
import { 
  Megaphone, 
  Send, 
  Calendar, 
  Eye, 
  Sparkles, 
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Layout,
  Smartphone
} from "lucide-react";

export default function BroadcastNotificationPage() {
  const [activeTab, setActiveTab] = useState("composer");

  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Broadcast Composer</h1>
          <p className="text-slate-500 mt-1">Send AI-optimized spiritual announcements to millions of devotees.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab("composer")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'composer' ? 'bg-saffron text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}
          >
            New Campaign
          </button>
          <button 
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === 'history' ? 'bg-saffron text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}
          >
            Campaign History
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8">
        {/* Composer Form */}
        <div className="col-span-3 space-y-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Campaign Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ram Navami Grand Celebration" 
                  className="w-full px-5 py-3 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-saffron/20 font-semibold"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Message Content</label>
                  <button className="flex items-center gap-1.5 text-[10px] font-bold text-saffron bg-saffron/5 px-2 py-1 rounded-full border border-saffron/10">
                    <Sparkles size={12} />
                    Refine with AI
                  </button>
                </div>
                <textarea 
                  rows={4}
                  placeholder="Type your spiritual message here..." 
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-saffron/20 leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 hover:text-saffron transition-colors">
                  <ImageIcon size={20} />
                  <span className="text-sm font-bold">Add Image</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-500 hover:text-saffron transition-colors">
                  <Calendar size={20} />
                  <span className="text-sm font-bold">Schedule</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold">Target Audience</h4>
                  <span className="text-xs text-saffron font-bold">12.4M Devotees</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag label="All Users" active={true} />
                  <Tag label="Varanasi Region" active={false} />
                  <Tag label="Frequent Donors" active={false} />
                  <Tag label="Puja Bookers" active={false} />
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-5 bg-saffron text-white rounded-3xl font-bold shadow-xl shadow-saffron/20 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform">
            <Send size={20} />
            Launch Spiritual Broadcast
          </button>
        </div>

        {/* Live Preview */}
        <div className="col-span-2 space-y-6">
          <div className="bg-slate-900 rounded-[3rem] p-4 border-[8px] border-slate-800 shadow-2xl aspect-[9/19] relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl" />
            
            <div className="mt-12 px-2">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-saffron rounded-lg flex items-center justify-center">
                    <Megaphone size={12} color="white" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Divine Update</span>
                  <span className="text-[10px] text-slate-400 ml-auto">Now</span>
                </div>
                <h5 className="text-sm font-bold text-slate-900">Ram Navami Grand Celebration</h5>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  Deepawali of spirit! Join the live Maha Aarti from Ayodhya Dham at 6 PM. Click to book your online presence...
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div className="w-12 h-12 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-4 h-4 text-slate-400" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Predicted Reach</h4>
            </div>
            <div className="space-y-4">
              <ReachItem label="Open Rate" value="32%" color="bg-green-500" />
              <ReachItem label="Click-through" value="12%" color="bg-saffron" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tag({ label, active }: any) {
  return (
    <button className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${active ? 'bg-saffron/10 border-saffron text-saffron' : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-saffron'}`}>
      {label}
    </button>
  );
}

function ReachItem({ label, value, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold mb-1.5">
        <span className="text-slate-500">{label}</span>
        <span className="text-slate-900">{value}</span>
      </div>
      <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: value }} />
      </div>
    </div>
  );
}
