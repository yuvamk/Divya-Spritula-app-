"use client";

import React from "react";
import { 
  Bot, 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  Cpu, 
  BarChart3, 
  ShieldAlert,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function FraudDetectionPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">Fraud Detection Command Center</h1>
          <p className="text-slate-500 mt-1">Real-time AI monitoring of transactions, bookings, and Pandit identities.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg border border-red-100 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-semibold">3 High Priority Flags</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard 
          label="Fraud Protection Rate" 
          value="99.8%" 
          trend="+0.2%" 
          icon={<ShieldAlert className="text-green-600" />} 
        />
        <StatCard 
          label="Total Scanned (24h)" 
          value="1,240" 
          trend="+12%" 
          icon={<Eye className="text-blue-600" />} 
        />
        <StatCard 
          label="False Positives" 
          value="0.04%" 
          trend="-0.01%" 
          icon={<CheckCircle className="text-amber-600" />} 
        />
        <StatCard 
          label="AI Confirmed Fraud" 
          value="₹12.4K" 
          trend="+₹1K" 
          icon={<AlertTriangle className="text-red-600" />} 
        />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Flagged Queue */}
        <div className="col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h2 className="text-lg font-bold">Investigation Queue</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="ID or Temple..." 
                  className="pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-saffron/20"
                />
              </div>
              <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-saffron">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Incident</th>
                  <th className="px-6 py-4 font-semibold">Risk Score</th>
                  <th className="px-6 py-4 font-semibold">Value</th>
                  <th className="px-6 py-4 font-semibold">AI Reason</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <FlaggedRow 
                  name="Bulk Booking Spike" 
                  entity="Prem Mandir" 
                  score={92} 
                  value="₹45,000" 
                  reason="Identity Mismatch / IP Cluster"
                />
                <FlaggedRow 
                  name="Escrow Buffer Bypass" 
                  entity="Pt. Someshwar" 
                  score={78} 
                  value="₹12,400" 
                  reason="Low Havan fire duration detected"
                />
                <FlaggedRow 
                  name="Account Takeover" 
                  entity="Devotee #829" 
                  score={88} 
                  value="₹5,100" 
                  reason="Payment method from blacklisted region"
                />
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insight Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cpu className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-saffron" />
                <span className="text-xs font-bold uppercase tracking-widest text-saffron">AI Guardian Insights</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "Detected an 8% increase in multi-device logins for Kashi region. Suggest increasing verification threshold for large bookings."
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold transition-colors">
                Apply Optimization
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Detection Logic</h3>
            <div className="space-y-4">
              <LogicItem label="Video Proof Sync" active={true} />
              <LogicItem label="Geo-fenced Pandits" active={true} />
              <LogicItem label="Auspicious Pattern Check" active={true} />
              <LogicItem label="IP Anomaly Filter" active={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className={`text-xs font-bold ${trend.startsWith('+') ? 'text-green-600' : 'text-slate-400'}`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      </div>
    </div>
  );
}

function FlaggedRow({ name, entity, score, value, reason }: any) {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-5">
        <div className="font-bold text-slate-900">{name}</div>
        <div className="text-xs text-slate-400">{entity}</div>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${score > 80 ? 'bg-red-500' : 'bg-amber-500'}`} 
              style={{ width: `${score}%` }} 
            />
          </div>
          <span className="text-xs font-bold text-slate-600">{score}%</span>
        </div>
      </td>
      <td className="px-6 py-5 font-mono text-sm font-bold text-slate-700">{value}</td>
      <td className="px-6 py-5">
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
          {reason}
        </span>
      </td>
      <td className="px-6 py-5">
        <div className="flex gap-2">
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-red-600 transition-colors border border-slate-200">
            <XCircle size={18} />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-green-600 transition-colors border border-slate-200">
            <CheckCircle size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function LogicItem({ label, active }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-slate-600">{label}</span>
      <div className={`w-10 h-5 rounded-full relative transition-colors ${active ? 'bg-saffron' : 'bg-slate-200'}`}>
        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${active ? 'right-1' : 'left-1'}`} />
      </div>
    </div>
  );
}
