import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DonationDriveDetail1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-background text-on-background font-body">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 transition-opacity hover:opacity-80">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text>
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 transition-opacity hover:opacity-80">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View>
<View className="pt-[56px] pb-40">
<View className="relative h-[397px] w-full">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Q2YlTem-rxeDOsJ6XGQyxPKEzplU3u8borL5_rfvJ_Ib9bWTDZEM2Oq_kEiC6QNqu-_r9wawskXnj5Xd4geuo3II5S5QHiTn_85QIN1QM5QXcYspnawuQYYSi4fu_GFsRktTYLINnIPVc_z2H2xL_JUo9WhX2uCCAJPLWwJzjoAu_X3gXXm5KFmi5vFU6eQE6Mx3Fdm9P-bipWOObu0wp3sdChlKGXudB2pmr7eB5FWfTeGDA34nuKT7MGBkMDpSNzFi-16-reFn" }} />
<View className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></View>
<View className="absolute bottom-0 left-0 p-6 w-full">
<Text className="inline-block bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">{"Ongoing Drive"}</Text>
<Text className="font-headline text-4xl font-bold leading-tight text-on-background max-w-sm">{"Ram Navami Puja 2025"}</Text>
<View className="flex items-center mt-2 text-on-surface-variant gap-2">
<Text className="material-symbols-outlined text-sm">{"location_on"}</Text>
<Text className="text-sm font-medium">{"Shree Ram Mandir, Ayodhya Complex"}</Text></View></View></View>
<View className="px-6 -mt-8 relative z-10 space-y-10">
<View className="bg-surface-container-lowest temple-arch p-8 shadow-[0_-4px_40px_rgba(26,28,26,0.06)] flex flex-col items-center">
<View className="relative w-48 h-48 flex items-center justify-center">
<View className="w-full h-full transform -rotate-90" />
<View className="absolute flex flex-col items-center">
<Text className="font-headline text-4xl font-black text-primary">{"74%"}</Text>
<Text className="text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">{"Funded"}</Text></View></View>
<View className="mt-8 grid grid-cols-2 w-full gap-4 text-center">
<View className="p-4 rounded-xl bg-surface-container-low">
<Text className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">{"Raised"}</Text>
<Text className="font-mono text-xl font-bold text-tertiary">{"₹18,430"}</Text></View>
<View className="p-4 rounded-xl bg-surface-container-low">
<Text className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">{"Target"}</Text>
<Text className="font-mono text-xl font-bold text-on-surface-variant">{"₹25,000"}</Text></View></View></View>
<View className="space-y-4">
<Text className="font-headline text-2xl font-bold flex items-center gap-2">
<Text className="material-symbols-outlined text-tertiary">{"temple_hindu"}</Text>{"Drive Purpose"}</Text>
<Text className="text-on-surface-variant leading-relaxed text-sm">{"This year's Ram Navami marks a historic milestone. We are organizing a grand Mahapuja and Bhandara for 5,000 devotees. Your contribution goes directly towards Samagri, floral decorations (Shringar), and the Prasad distribution."}</Text>
<View className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl">
<View className="w-14 h-14 rounded-full  border-2 border-tertiary/20">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCy_emi2Bd9BGj21zSN7bzeWnNDK5lL3XmbQ0yeA_X7r1OBi2GBlwG_gxlIx8f0oqGHdMaHp12WGuZ9CDxPSkb-rwbgjPGTuOYE0EQWdIOpsvi0Wxxar2NDxmhfzKZB5IxFsKYjKsbeP4ZGZmD_0wXCkrUrnogqlFyeF2Qj970-6acYiUnP6lrABBNP82pVecHi4SWB4lpKEPU3Ufuw9xKnZ54XZKkPvoU5ZPl9psedsmwcrUUK5ea-kNR_VET17qP54dFqgY7Q_W-8" }} /></View>
<View>
<Text className="text-xs font-bold uppercase tracking-wide text-tertiary">{"Pandit in Charge"}</Text>
<Text className="font-headline font-bold text-on-surface">{"Acharya Ramanand Shastri"}</Text>
<Text className="text-xs text-on-surface-variant">{"Chief Priest, Varanasi Sector"}</Text></View></View></View>
<View className="space-y-6 pb-12">
<View className="flex justify-between items-end">
<Text className="font-headline text-2xl font-bold">{"Recent Donors"}</Text>
<TouchableOpacity className="text-primary font-bold text-sm">{"View All"}</TouchableOpacity></View>
<View className="space-y-4">
<View className="flex items-center justify-between p-4 bg-white/50 rounded-xl shadow-sm">
<View className="flex items-center gap-3">
<View className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-on-secondary-container">{"RK"}</View>
<View>
<Text className="font-bold text-sm">{"Rajesh Kumar"}</Text>
<Text className="text-[10px] text-on-surface-variant">{"2 mins ago"}</Text></View></View>
<Text className="font-mono font-bold text-tertiary">{"₹1,001"}</Text></View>
<View className="flex items-center justify-between p-4 bg-white/50 rounded-xl shadow-sm">
<View className="flex items-center gap-3">
<View className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">{"AM"}</View>
<View>
<Text className="font-bold text-sm">{"Anjali Maurya"}</Text>
<Text className="text-[10px] text-on-surface-variant">{"15 mins ago"}</Text></View></View>
<Text className="font-mono font-bold text-tertiary">{"₹501"}</Text></View>
<View className="flex items-center justify-between p-4 bg-white/50 rounded-xl shadow-sm">
<View className="flex items-center gap-3">
<View className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center font-bold text-on-tertiary-fixed">{"SV"}</View>
<View>
<Text className="font-bold text-sm">{"Suresh Varma"}</Text>
<Text className="text-[10px] text-on-surface-variant">{"1 hour ago"}</Text></View></View>
<Text className="font-mono font-bold text-tertiary">{"₹2,501"}</Text></View></View></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-[60] glass-nav pb-safe pt-4 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
<View className="max-w-md mx-auto space-y-4">
<View className="flex overflow-x-auto gap-2 no-scrollbar pb-2">
<TouchableOpacity className="flex-shrink-0 px-5 py-2 rounded-full border border-outline-variant text-sm font-mono font-bold hover:bg-primary-fixed/20 active:scale-95 transition-all">{"₹51"}</TouchableOpacity>
<TouchableOpacity className="flex-shrink-0 px-5 py-2 rounded-full border border-outline-variant text-sm font-mono font-bold hover:bg-primary-fixed/20 active:scale-95 transition-all">{"₹101"}</TouchableOpacity>
<TouchableOpacity className="flex-shrink-0 px-5 py-2 rounded-full border-2 border-primary text-primary bg-primary-fixed/30 text-sm font-mono font-bold active:scale-95 transition-all">{"₹251"}</TouchableOpacity>
<TouchableOpacity className="flex-shrink-0 px-5 py-2 rounded-full border border-outline-variant text-sm font-mono font-bold hover:bg-primary-fixed/20 active:scale-95 transition-all">{"₹501"}</TouchableOpacity>
<TouchableOpacity className="flex-shrink-0 px-5 py-2 rounded-full border border-outline-variant text-sm font-mono font-bold hover:bg-primary-fixed/20 active:scale-95 transition-all">{"₹1001"}</TouchableOpacity></View>
<TouchableOpacity className="w-full saffron-gradient text-white py-4 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all shadow-lg">
<Text className="material-symbols-outlined">{"payments"}</Text>{"UPI se Daan Do"}</TouchableOpacity>
<Text className="text-center text-[10px] text-on-surface-variant opacity-60 pb-2 italic">{"Safe & Secure Transactions via NPCI"}</Text></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all cursor-pointer">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Mandir"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold px-4 py-1 cursor-pointer">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Seva"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all cursor-pointer">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Puja"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all cursor-pointer">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Khojo"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all cursor-pointer">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Mera"}</Text></View></View></View>
    </ScrollView>
  );
}
