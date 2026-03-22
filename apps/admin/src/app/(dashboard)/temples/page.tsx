"use client";

import { MapPin, Plus, Search, MoreVertical, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const TEMPLES = [
  { id: "1", name: "Kashi Vishwanath", city: "Varanasi", state: "UP", status: "Active", devotees: 1284, revenue: "₹8.4L" },
  { id: "2", name: "Somnath Mandir", city: "Veraval", state: "Gujarat", status: "Active", devotees: 4502, revenue: "₹12.1L" },
  { id: "3", name: "Meenakshi Amman", city: "Madurai", state: "Tamil Nadu", status: "Active", devotees: 3201, revenue: "₹9.8L" },
  { id: "4", name: "Banke Bihari", city: "Vrindavan", state: "UP", status: "Setup", devotees: 840, revenue: "₹0" },
  { id: "5", name: "Jagannath Puri", city: "Puri", state: "Odisha", status: "Active", devotees: 6710, revenue: "₹15.2L" },
];

export default function TemplesPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-serif font-black text-on-surface">Mandir Registry</h2>
          <p className="text-on-surface-variant font-medium opacity-70 mt-1">
            Manage temple registrations and community settings
          </p>
        </div>
        <button className="bg-primary ember-gradient text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2">
          <Plus className="size-5" />
          Add New Mandir
        </button>
      </div>

      <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex justify-between mb-8">
           <div className="relative w-96">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant opacity-40" />
             <input 
               type="text" 
               placeholder="Search by name, city or state..." 
               className="w-full pl-12 pr-4 py-3 bg-background border-none rounded-2xl text-sm focus:ring-2 ring-primary/20"
             />
           </div>
           <button className="flex items-center gap-2 px-6 py-3 border border-gray-100 rounded-2xl text-sm font-bold hover:bg-gray-50">
             <Filter className="size-4" />
             Filters
           </button>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 text-[10px] uppercase tracking-widest font-black text-on-surface-variant opacity-40">
                <th className="pb-4 px-4 text-center">#</th>
                <th className="pb-4 px-4">Temple Name</th>
                <th className="pb-4 px-4">Location</th>
                <th className="pb-4 px-4">Status</th>
                <th className="pb-4 px-4 text-right">Devotees</th>
                <th className="pb-4 px-4 text-right">Net Seva</th>
                <th className="pb-4 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {TEMPLES.map((temple, i) => (
                <tr key={temple.id} className="group hover:bg-surface-container-low/30 transition-colors">
                  <td className="py-6 px-4 text-center text-xs font-mono opacity-40">{i+1}</td>
                  <td className="py-6 px-4">
                    <span className="font-serif font-bold text-lg text-on-surface block">{temple.name}</span>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                      <MapPin className="size-3 text-primary opacity-60" />
                      {temple.city}, {temple.state}
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <span className={cn(
                      "text-[10px] font-black uppercase px-3 py-1 rounded-full",
                      temple.status === "Active" ? "bg-green-100 text-green-700" : "bg-gold/10 text-gold"
                    )}>
                      {temple.status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right font-medium">
                    {temple.devotees.toLocaleString()}
                  </td>
                  <td className="py-6 px-4 text-right font-serif font-black text-primary">
                    {temple.revenue}
                  </td>
                  <td className="py-6 px-4 text-center">
                    <button className="p-2 hover:bg-white rounded-lg transition-all border border-transparent hover:border-gray-100">
                      <MoreVertical className="size-4 text-on-surface-variant opacity-60" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
