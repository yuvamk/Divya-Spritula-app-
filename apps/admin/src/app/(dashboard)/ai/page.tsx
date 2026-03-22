"use client";

import React from "react";
import { 
  Bot, 
  Cpu, 
  Search, 
  TrendingUp, 
  Zap, 
  History, 
  BarChart, 
  MessageSquare,
  Sparkles,
  PieChart,
  Lightbulb
} from "lucide-react";

export default function AIAnalyticsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900">AI Analytics & Cost Tracker</h1>
          <p className="text-slate-500 mt-1">Monitoring 12+ Gemini Pro/Flash agents across the DIVYA ecosystem.</p>
        </div>
        <div className="bg-saffron/10 text-saffron px-4 py-2 rounded-xl border border-saffron/20 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span className="font-bold text-sm">Flash 2.0 Active</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard label="Total AI Requests" value="142.5K" trend="+15%" icon={<Cpu className="text-saffron" />} />
        <StatCard label="Avg. Latency" value="840ms" trend="-45ms" icon={<Zap className="text-blue-600" />} />
        <StatCard label="Token Usage" value="84.2M" trend="+8%" icon={<TrendingUp className="text-purple-600" />} />
        <StatCard label="Estimated Cost" value="₹1,240" trend="+₹120" icon={<BarChart className="text-green-600" />} />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Agent Distribution */}
        <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm col-span-1">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">Agent Utilization</h3>
            <PieChart className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-6">
            <AgentUsage label="DivyaBot (Chat)" percent={45} color="bg-saffron" />
            <AgentUsage label="Sankalp Assist" percent={22} color="bg-blue-500" />
            <AgentUsage label="Fraud Detection" percent={18} color="bg-red-500" />
            <AgentUsage label="Muhurat Calc" percent={10} color="bg-amber-500" />
            <AgentUsage label="Other" percent={5} color="bg-slate-300" />
          </div>
        </div>

        {/* Real-time AI Logs */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm col-span-2 overflow-hidden">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center">
            <h2 className="text-lg font-bold">Live Model Invocation Log</h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-green-100">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Streaming
            </div>
          </div>
          <div className="divide-y divide-slate-50">
            <LogItem 
              agent="Sankalp Assist" 
              model="Gemini Pro" 
              latency="1.2s" 
              tokens={1420} 
              status="Success" 
            />
            <LogItem 
              agent="Fraud Scraper" 
              model="Gemini Flash" 
              latency="0.4s" 
              tokens={450} 
              status="Success" 
            />
            <LogItem 
              agent="DivyaBot" 
              model="Gemini Pro" 
              latency="1.8s" 
              tokens={2100} 
              status="Success" 
            />
            <LogItem 
              agent="Temple Health" 
              model="Gemini Flash" 
              latency="0.3s" 
              tokens={120} 
              status="Success" 
            />
          </div>
        </div>
      </div>

      {/* CEO Optimization Advice */}
      <div className="mt-8 bg-gradient-to-r from-saffron to-maroon rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12">
          <Lightbulb className="w-48 h-48" />
        </div>
        <div className="relative z-10 flex items-center gap-8">
          <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md">
            <Bot className="w-12 h-12 text-gold" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">CEO Strategy Optimization</h3>
            <p className="text-white/80 max-w-2xl leading-relaxed">
              Current peak usage detected between 5 AM - 8 AM. Recommend switching 'Muhurat Calculator' to cached responses during off-peak to save 12% in compute tokens.
            </p>
          </div>
          <button className="px-8 py-3 bg-white text-maroon font-bold rounded-xl hover:bg-gold transition-colors">
            Optimize Now
          </button>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, trend, icon }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-2xl">
          {icon}
        </div>
        <span className="text-xs font-bold text-green-600">{trend}</span>
      </div>
      <div>
        <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      </div>
    </div>
  );
}

function AgentUsage({ label, percent, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-xs font-bold mb-2">
        <span className="text-slate-600">{label}</span>
        <span className="text-slate-900">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function LogItem({ agent, model, latency, tokens, status }: any) {
  return (
    <div className="flex items-center justify-between p-6 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-slate-100 rounded-lg">
          <MessageSquare className="w-4 h-4 text-slate-500" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-900">{agent}</p>
          <p className="text-[10px] text-slate-400 font-mono">{model}</p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="text-right">
          <p className="text-xs font-bold text-slate-700">{latency}</p>
          <p className="text-[10px] text-slate-400">Latency</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-slate-700">{tokens}</p>
          <p className="text-[10px] text-slate-400">Tokens</p>
        </div>
        <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg border border-green-100">
          {status}
        </div>
      </div>
    </div>
  );
}
