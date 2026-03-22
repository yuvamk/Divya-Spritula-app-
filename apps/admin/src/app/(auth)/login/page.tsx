"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Sparkles } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate CEO Login
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl shadow-primary/10 p-12 relative z-10 border border-white/20 backdrop-blur-sm">
        <div className="mb-12 text-center">
          <h1 className="font-serif font-black text-4xl uppercase tracking-tighter text-primary">
            DIVY<span className="text-secondary">A</span>
          </h1>
          <p className="text-[10px] font-bold text-on-surface-variant opacity-50 tracking-[0.2em] mt-2 uppercase">
            CEO Command Center
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">CEO Credentials</label>
            <div className="relative group">
              <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="email" 
                placeholder="ceo@divya.digital"
                className="w-full pl-14 pr-8 py-5 bg-gray-50 border border-transparent rounded-3xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">Access Key</label>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-14 pr-8 py-5 bg-gray-50 border border-transparent rounded-3xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all font-medium text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="w-full bg-primary text-white font-black py-5 rounded-3xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
            AUTHORIZE ACCESS
          </button>
        </form>

        <div className="mt-10 pt-10 border-t border-gray-100 flex items-center justify-center gap-2">
           <Sparkles className="text-primary opacity-50" size={16} />
           <p className="text-xs font-semibold text-gray-400 italic">Secured by Gemini AI Sentry</p>
        </div>
      </div>

      <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
        Restricted Access • Authorized Personnel Only
      </p>
    </div>
  );
}
