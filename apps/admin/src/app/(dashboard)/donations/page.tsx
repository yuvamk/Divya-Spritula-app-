"use client";

import { CreditCard, IndianRupee, Search, Download, ExternalLink, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const DONATIONS = [
  { id: "TXN1024", date: "21 Mar, 2026", devotee: "Aditya Sharma", temple: "Kashi Vishwanath", amount: 1001, mode: "UPI", status: "Success" },
  { id: "TXN1025", date: "21 Mar, 2026", devotee: "Priya Mishra", temple: "Somnath Mandir", amount: 501, mode: "Card", status: "Success" },
  { id: "TXN1026", date: "20 Mar, 2026", devotee: "Rajesh Sharma", temple: "Kashi Vishwanath", amount: 12500, mode: "Net Banking", status: "Success" },
  { id: "TXN1027", date: "20 Mar, 2026", devotee: "Anonymous", temple: "Meenakshi Amman", amount: 101, mode: "UPI", status: "Pending" },
  { id: "TXN1028", date: "19 Mar, 2026", devotee: "Amit Gupta", temple: "Jagannath Puri", amount: 2501, mode: "UPI", status: "Success" },
];

export default function DonationsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-serif font-black text-on-surface">Seva Donations</h2>
          <p className="text-on-surface-variant font-medium opacity-70 mt-1">
            Track and reconcile all digital contributions
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
            <Download className="size-4" />
            Export CSV
          </button>
          <button className="bg-tertiary text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-tertiary/30 hover:scale-105 transition-all flex items-center gap-2">
            <IndianRupee className="size-4" />
            Settlements
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
        <div className="flex justify-between mb-8">
           <div className="flex gap-4">
             <div className="relative w-80">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-on-surface-variant opacity-40" />
               <input 
                 type="text" 
                 placeholder="Search TXN ID or Devotee..." 
                 className="w-full pl-12 pr-4 py-3 bg-background border-none rounded-2xl text-sm focus:ring-2 ring-primary/20"
               />
             </div>
             <button className="px-6 py-3 bg-background rounded-2xl text-sm font-bold flex items-center gap-2 border border-transparent hover:border-gray-100">
               <Calendar className="size-4" />
               All time
             </button>
           </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 text-[10px] uppercase tracking-widest font-black text-on-surface-variant opacity-40">
                <th className="pb-4 px-4">Transaction ID</th>
                <th className="pb-4 px-4">Date</th>
                <th className="pb-4 px-4">Devotee</th>
                <th className="pb-4 px-4">Dest. Temple</th>
                <th className="pb-4 px-4 text-right">Amount</th>
                <th className="pb-4 px-4 text-center">Status</th>
                <th className="pb-4 px-4 text-center">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {DONATIONS.map((txn) => (
                <tr key={txn.id} className="group hover:bg-surface-container-low/30 transition-colors">
                  <td className="py-6 px-4">
                    <span className="text-xs font-mono font-bold text-on-surface-variant opacity-60">{txn.id}</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-sm font-medium text-on-surface-variant">{txn.date}</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="font-serif font-bold text-on-surface">{txn.devotee}</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-xs px-3 py-1 bg-surface-container rounded-full font-bold text-on-surface-variant">
                      {txn.temple}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right">
                    <span className="font-serif font-black text-lg text-primary">₹{txn.amount.toLocaleString()}</span>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <span className={cn(
                      "text-[10px] font-black uppercase px-3 py-1 rounded-full",
                      txn.status === "Success" ? "bg-green-100 text-green-700" : "bg-gold/10 text-gold"
                    )}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-center">
                    <button className="p-2 hover:bg-white rounded-lg transition-all border border-transparent hover:border-gray-100">
                      <ExternalLink className="size-4 text-primary opacity-60" />
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
