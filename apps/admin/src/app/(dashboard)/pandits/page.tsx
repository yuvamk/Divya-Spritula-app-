import { UserCheck, ShieldCheck, Clock, MapPin } from "lucide-react";

const PANDITS = [
  { id: 1, name: "Pt. Ramesh Sharma", temple: "Kashi Vishwanath", status: "Verified", rating: 4.9, joined: "2024-01-12" },
  { id: 2, name: "Pt. Alok Nath", temple: "Assi Ghat Mandir", status: "Pending", rating: 0.0, joined: "2 days ago" },
  { id: 3, name: "Pt. Someshwar", temple: "Hanuman Mandir", status: "Verified", rating: 4.7, joined: "2024-02-05" },
];

export default function PanditsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-on-surface">Pandit Registry</h1>
        <p className="text-on-surface-variant mt-2">Manage and verify mandir priests across the platform.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <UserCheck size={24} />
             </div>
             <div>
                <p className="text-sm font-medium text-gray-500">Total Pandits</p>
                <p className="text-2xl font-bold">1,240</p>
             </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
                <Clock size={24} />
             </div>
             <div>
                <p className="text-sm font-medium text-gray-500">Pending Verification</p>
                <p className="text-2xl font-bold">28</p>
             </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
             <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                <ShieldCheck size={24} />
             </div>
             <div>
                <p className="text-sm font-medium text-gray-500">Verified Today</p>
                <p className="text-2xl font-bold">12</p>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Pandit Name</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Temple</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Status</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Rating</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Joined</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {PANDITS.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-serif text-primary font-bold">
                         {p.name[4]}
                      </div>
                      <span className="font-semibold text-gray-900">{p.name}</span>
                   </div>
                </td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={14} />
                      {p.temple}
                   </div>
                </td>
                <td className="px-8 py-5">
                   <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      p.status === "Verified" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                   }`}>
                      {p.status}
                   </span>
                </td>
                <td className="px-8 py-5 font-medium text-gray-900">⭐ {p.rating}</td>
                <td className="px-8 py-5 text-gray-600">{p.joined}</td>
                <td className="px-8 py-5 text-right">
                   <button className="text-primary font-bold text-xs hover:underline uppercase tracking-widest">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
