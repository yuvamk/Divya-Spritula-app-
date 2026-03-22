"use client";

import { 
  Users, 
  IndianRupee, 
  Calendar, 
  Activity, 
  Bell, 
  TrendingUp, 
  Map as MapIcon 
} from "lucide-react";
import MetricCard from "@/components/MetricCard";

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-serif font-black text-on-surface">CEO Admin Dashboard</h2>
          <p className="text-on-surface-variant font-medium opacity-70 mt-1">
            Real-time analytics for the DIVYA Spiritual Ecosystem
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
            <Calendar className="size-4" />
            Last 30 Days
          </button>
          <button className="bg-primary ember-gradient text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all active:scale-95">
            Onboard New Mandir
          </button>
        </div>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Total Revenue" 
          value="₹12.4L" 
          change="8.2%" 
          icon={IndianRupee} 
        />
        <MetricCard 
          title="Active Devotees" 
          value="45,820" 
          change="12.5%" 
          icon={Users} 
          color="gold"
        />
        <MetricCard 
          title="Mandir Registry" 
          value="142" 
          change="2.1%" 
          icon={MapIcon} 
          color="tertiary"
        />
        <MetricCard 
          title="Daily Pujas" 
          value="84" 
          change="15.4%" 
          icon={Activity} 
          color="secondary"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-3 gap-8">
        {/* Revenue Chart Placeholder */}
        <div className="col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-[400px] flex flex-col justify-between">
           <div className="flex justify-between items-center">
             <h4 className="font-serif font-bold text-xl">Revenue Growth</h4>
             <TrendingUp className="text-primary size-5" />
           </div>
           <div className="flex-1 flex items-center justify-center">
             <div className="w-full h-32 bg-surface-container-low rounded-2xl flex items-center justify-center italic text-on-surface-variant opacity-40">
               Live Chart Rendering Engine (Recharts integration active)
             </div>
           </div>
           <div className="flex justify-around border-t border-gray-50 pt-6">
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50 mb-1">Online Seva</p>
                <p className="font-serif font-bold">₹8.4L</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50 mb-1">Puja Booking</p>
                <p className="font-serif font-bold">₹3.2L</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-on-surface-variant opacity-50 mb-1">Other Assets</p>
                <p className="font-serif font-bold">₹0.8L</p>
              </div>
           </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-6">
             <h4 className="font-serif font-bold text-xl">Recent Sandesh</h4>
             <Bell className="text-gold size-5" />
           </div>
           <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { time: "2m ago", text: "New donation of ₹5,001 from Somnath Mandir", icon: IndianRupee, status: "success" },
                { time: "15m ago", text: "Temple Onboarding: Venkateswara, Tirupati", icon: MapIcon, status: "info" },
                { time: "1h ago", text: "Peak load on AI Sankalp Assist (8k rec/s)", icon: Activity, status: "warning" },
                { time: "3h ago", text: "420 new devotees registered in Varanasi Sector", icon: Users, status: "info" },
              ].map((update, i) => (
                <div key={i} className="flex gap-4">
                  <div className="size-10 rounded-xl bg-surface-container flex-shrink-0 flex items-center justify-center">
                    <update.icon className="size-4 text-on-surface-variant" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-on-surface leading-tight">{update.text}</p>
                    <p className="text-[10px] text-on-surface-variant opacity-60 mt-1">{update.time}</p>
                  </div>
                </div>
              ))}
           </div>
           <button className="w-full mt-6 py-3 border border-gray-200 rounded-xl text-xs font-bold hover:bg-gray-50 transition-all">
             View All Activity
           </button>
        </div>
      </div>
    </div>
  );
}
