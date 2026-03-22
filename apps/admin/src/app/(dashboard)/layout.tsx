import React from 'react';
import Sidebar from '@/components/Sidebar';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#FAF9F6]">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-[#E8E5DE] flex items-center justify-between px-8">
          <h1 className="text-xl font-serif font-bold text-[#7E1E1E]">DIVYA CEO Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#5A5755]">Jai Shri Ram, Admin</span>
            <div className="w-8 h-8 rounded-full bg-[#E8593C] flex items-center justify-center text-white font-bold">A</div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
