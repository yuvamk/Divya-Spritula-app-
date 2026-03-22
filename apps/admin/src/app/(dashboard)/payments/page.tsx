import { CreditCard, ArrowUpRight, ArrowDownLeft, ShieldCheck, Landmark } from "lucide-react";

const PAYMENTS = [
  { id: "PAY-1001", type: "Booking", dev: "Suresh K.", amount: "₹2,100", method: "UPI", status: "Escrowed", time: "12m ago" },
  { id: "PAY-1002", type: "Donation", dev: "Meena G.", amount: "₹5,000", method: "Card", status: "Settled", time: "1h ago" },
  { id: "PAY-1003", type: "Dakshina", dev: "Rahul S.", amount: "₹500", method: "Razorpay", status: "Pending", time: "3h ago" },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-on-surface">Payment & Escrow Hub</h1>
        <p className="text-on-surface-variant mt-2">Financial reconciliation, Razorpay settlements, and escrow management.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="lg:col-span-2 bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/20 flex justify-between items-center relative overflow-hidden">
            <div>
               <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 font-sans">Total Escrow Balance</p>
               <h2 className="text-5xl font-serif font-bold">₹12,45,000</h2>
               <div className="flex gap-4 mt-6">
                  <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                     <ArrowUpRight size={14} className="text-green-400" /> +₹2.4k today
                  </div>
               </div>
            </div>
            <Landmark size={80} className="opacity-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
         </div>
         
         <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <CreditCard className="text-amber-600 mb-4" />
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Pending Payouts</p>
            <p className="text-3xl font-bold mt-2 text-gray-900">₹84,200</p>
            <button className="mt-4 text-xs font-bold text-primary hover:underline uppercase tracking-tighter">DISBURSE ALL →</button>
         </div>

         <div className="bg-green-600 p-8 rounded-3xl border border-green-700 shadow-xl shadow-green-100 text-white">
            <ShieldCheck className="text-white/60 mb-4" />
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Settlement Health</p>
            <p className="text-3xl font-bold mt-2">100%</p>
            <p className="text-[10px] font-medium mt-2">Razorpay status: Operational</p>
         </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center">
           <h3 className="font-bold">Transaction Ledger</h3>
           <div className="flex gap-2">
              <span className="text-[10px] font-bold bg-gray-100 px-3 py-1 rounded-full text-gray-500 uppercase tracking-widest">Auto-Reconciled by AI</span>
           </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Transaction ID</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Type</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Devotee</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Amount</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Method</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {PAYMENTS.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5 font-mono text-[10px] font-bold text-gray-400">{p.id}</td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg ${
                         p.type === "Donation" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                      }`}>
                         {p.type === "Donation" ? <Heart size={12} fill="currentColor" /> : <Landmark size={12} />}
                      </div>
                      <span className="font-semibold text-sm text-gray-900">{p.type}</span>
                   </div>
                </td>
                <td className="px-8 py-5 font-medium text-gray-600">{p.dev}</td>
                <td className="px-8 py-5 font-black text-gray-900">{p.amount}</td>
                <td className="px-8 py-5">
                   <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-500">{p.method}</span>
                </td>
                <td className="px-8 py-5">
                   <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      p.status === "Settled" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                   }`}>
                      {p.status}
                   </span>
                </td>
                <td className="px-8 py-5 text-right text-[10px] text-gray-400 font-bold">{p.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { Heart } from "lucide-react";
