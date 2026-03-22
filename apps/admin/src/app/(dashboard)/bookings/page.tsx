import { Gem, CheckCircle, XCircle, Clock, Search } from "lucide-react";

const BOOKINGS = [
  { id: "ORD-8821", puja: "Rudrabhishek", devotee: "Suresh Kashyap", pandit: "Pt. Ramesh", status: "Completed", amount: "₹2,100", date: "Today" },
  { id: "ORD-8822", puja: "Satyanarayan Katha", devotee: "Meena Gupta", pandit: "Pt. Alok Nath", status: "Pending", amount: "₹1,500", date: "Tomorrow" },
  { id: "ORD-8823", puja: "Mahamrityunjaya Jaap", devotee: "Rahul Sharma", pandit: "Pt. Someshwar", status: "Active", amount: "₹5,100", date: "Today" },
];

export default function BookingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-on-surface">Puja Order Management</h1>
          <p className="text-on-surface-variant mt-2">Track rituals, escrow status, and proof verification across the platform.</p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 py-2 border border-gray-200 rounded-xl flex items-center gap-2 bg-white text-sm font-medium">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Search orders..." className="outline-none" />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Pujas", val: "42", status: "In Progress", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Completed (24h)", val: "128", status: "Finalized", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
          { label: "Cancelled", val: "3", status: "Refunded", icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div>
               <p className="text-sm font-medium text-gray-500">{item.label}</p>
               <p className="text-2xl font-bold">{item.val}</p>
               <p className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${item.color}`}>{item.status}</p>
            </div>
            <div className={`p-4 rounded-2xl ${item.bg} ${item.color}`}>
               <item.icon size={28} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Order ID</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Puja Type</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Devotee / Pandit</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Amount</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {BOOKINGS.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5 font-mono text-xs font-bold text-gray-400">{b.id}</td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-semibold text-gray-900">{b.puja}</span>
                   </div>
                </td>
                <td className="px-8 py-5">
                   <div className="text-sm">
                      <p className="font-medium text-gray-900">{b.devotee}</p>
                      <p className="text-xs text-gray-500">Assigned to {b.pandit}</p>
                   </div>
                </td>
                <td className="px-8 py-5">
                   <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      b.status === "Completed" ? "bg-green-50 text-green-700" : 
                      b.status === "Active" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
                   }`}>
                      {b.status}
                   </span>
                </td>
                <td className="px-8 py-5 font-bold text-gray-900">{b.amount}</td>
                <td className="px-8 py-5 text-right">
                   <button className="text-primary text-xs font-black hover:underline uppercase tracking-tighter">View Proof</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
