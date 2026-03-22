"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BarChart3, 
  Home, 
  Settings, 
  Users, 
  Wind, 
  Gem, 
  MapPin, 
  HeartHandshake,
  ShieldAlert,
  Sparkles,
  Bell,
  CreditCard,
  UserCheck
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MENU_ITEMS = [
  { icon: Home, label: "Overview", href: "/" },
  { icon: MapPin, label: "Temples", href: "/temples" },
  { icon: UserCheck, label: "Pandits", href: "/pandits" },
  { icon: Users, label: "Devotees", href: "/devotees" },
  { icon: HeartHandshake, label: "Donations", href: "/donations" },
  { icon: Gem, label: "Bookings", href: "/bookings" },
  { icon: CreditCard, label: "Payments", href: "/payments" },
  { icon: ShieldAlert, label: "Fraud", href: "/fraud" },
  { icon: Sparkles, label: "AI Insights", href: "/ai" },
  { icon: Bell, label: "Broadcast", href: "/notifications" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 shadow-sm overflow-y-auto">
      <div className="p-6">
        <h1 className="font-serif font-black text-2xl uppercase tracking-tighter text-primary">
          DIVYA <span className="text-[10px] block opacity-50 tracking-widest font-sans">CEO ADMIN</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all font-medium text-sm",
                isActive 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-on-surface-variant hover:bg-surface-container-low"
              )}
            >
              <item.icon className="size-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-100 italic text-[10px] text-center text-on-surface-variant opacity-60">
        © 2026 DIVYA Digital. All rights reserved.
      </div>
    </aside>
  );
}
