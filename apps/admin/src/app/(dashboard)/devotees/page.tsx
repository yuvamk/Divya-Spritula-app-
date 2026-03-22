import { Users, UserPlus, Map, Heart } from "lucide-react";

const DEVOTEES = [
  { id: 1, name: "Suresh Kashyap", location: "Varanasi", family: 4, donations: "₹12,500", lastActive: "Today" },
  { id: 2, name: "Meena Gupta", location: "Delhi", family: 2, donations: "₹5,000", lastActive: "2 days ago" },
  { id: 3, name: "Rahul Sharma", location: "Mumbai", family: 5, donations: "₹25,000", lastActive: "1 week ago" },
  { id: 4, name: "Priya Verma", location: "Bangalore", family: 3, donations: "₹8,200", lastActive: "Yesterday" },
];

export default function DevoteesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-on-surface">Devotee Registry</h1>
        <p className="text-on-surface-variant mt-2">Global directory of DIVYA devotees and their spiritual journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Users, label: "Total Devotees", val: "45,280", color: "text-primary", bg: "bg-red-50" },
          { icon: UserPlus, label: "New Growth", val: "+12%", color: "text-green-600", bg: "bg-green-50" },
          { icon: Map, label: "Cities Covered", val: "124", color: "text-blue-600", bg: "bg-blue-50" },
          { icon: Heart, label: "Active Donors", val: "8,920", color: "text-amber-600", bg: "bg-amber-50" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className={`p-3 w-fit rounded-2xl ${item.bg} ${item.color} mb-4`}>
               <item.icon size={24} />
            </div>
            <p className="text-sm font-medium text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
           <h3 className="font-bold">Member Directory</h3>
           <div className="flex gap-2">
              <input type="text" placeholder="Search devotees..." className="text-xs px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl">FILTER</button>
           </div>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Devotee</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Location</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Family Size</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Total Seva</th>
              <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Last Active</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {DEVOTEES.map((d) => (
              <tr key={d.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-gray-600">
                         {d.name[0]}
                      </div>
                      <span className="font-semibold text-gray-900">{d.name}</span>
                   </div>
                </td>
                <td className="px-8 py-5 text-gray-600">{d.location}</td>
                <td className="px-8 py-5">
                   <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600">
                      {d.family} MEMBERS
                   </span>
                </td>
                <td className="px-8 py-5 font-bold text-primary">{d.donations}</td>
                <td className="px-8 py-5 text-right text-xs text-gray-500 font-medium italic">{d.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
