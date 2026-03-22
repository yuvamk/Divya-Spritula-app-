"use client";

import { LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive?: boolean;
  icon: LucideIcon;
  color?: string;
}

export default function MetricCard({ 
  title, 
  value, 
  change, 
  isPositive = true, 
  icon: Icon,
  color = "primary"
}: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-3xl sacred-arch shadow-sm border border-gray-100 flex flex-col justify-between h-48 group hover:shadow-xl transition-all duration-500">
      <div className="flex justify-between items-start">
        <div className={cn(
          "size-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500",
          color === "primary" ? "bg-primary/10 text-primary" :
          color === "gold" ? "bg-gold/10 text-gold" :
          color === "tertiary" ? "bg-tertiary/10 text-tertiary" :
          "bg-secondary/10 text-secondary"
        )}>
          <Icon className="size-6" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50">
          {title}
        </span>
      </div>
      
      <div className="mt-4">
        <h3 className="text-3xl font-black font-serif text-on-surface">{value}</h3>
        <p className={cn(
          "text-xs font-bold mt-2 flex items-center gap-1",
          isPositive ? "text-green-600" : "text-red-600"
        )}>
          {isPositive ? "+" : "-"}{change} 
          <span className="text-on-surface-variant font-medium opacity-50 ml-1">v/s last week</span>
        </p>
      </div>
    </div>
  );
}
