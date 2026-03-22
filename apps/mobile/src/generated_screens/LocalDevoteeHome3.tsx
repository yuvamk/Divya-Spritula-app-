import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LocalDevoteeHome3() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-background text-on-background font-body flex-1 pb-24 overflow-x-hidden">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px]">
<View className="flex items-center gap-3">
<Text className="material-symbols-outlined text-white/80 active:scale-95 duration-200 cursor-pointer">{"arrow_back"}</Text>
<Text className="font-headline font-black text-xl uppercase tracking-widest text-white">{"DIVYA"}</Text></View>
<View className="flex items-center">
<Text className="material-symbols-outlined text-white/80 active:scale-95 duration-200 cursor-pointer">{"notifications"}</Text></View></View>
<View className="pt-14">
<View className="relative h-[280px] w-full">
<View className="absolute inset-0 bg-cover bg-center">
<View className="absolute inset-0 bg-gradient-to-t from-[#0F0D1A] via-black/20 to-transparent"></View></View>
<View className="absolute inset-0 flex flex-col justify-end p-6">
<View className="flex items-center gap-3 mb-2">
<View className="w-10 h-10 rounded-full border-2 border-accent">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKmwzmQOMF-yAonEg1hlyAvTxqa3CkbS7OCMKmSSsVfUT9ZGtQsfaQDnTurEU6zDAmNanhwyxePK9KAng6Fme4di12T4iaXk0_Ng1UcOlfL4gEPCh-V2Wtq3s0IU1v8ybcQh3gfQDDI0s4f670IESwOabI4K5LqqQ3yVXq6wbFEHWvuM4OB6PmiE4uLFh5gT33_kQfsRk-b1YOyd3XqfTAsaBsIc5C6OeKIhqcAXROvLYYw75Ls1daLzvRntkQXx--04bZJaH5_XhK" }} /></View>
<Text className="text-white/90 font-medium text-sm">{"Acharya Ji"}</Text></View>
<Text className="font-headline font-bold text-3xl text-white mb-4 leading-tight">{"Shri Kashi Vishwanath"}</Text></View>
<View className="absolute bottom-0 left-0 w-full bg-accent/90 backdrop-blur-md py-2 px-6 flex justify-between items-center text-[#FAF9F6]">
<View className="flex items-center gap-2">
<Text className="material-symbols-outlined text-[18px]">{"calendar_today"}</Text>
<Text className="text-xs font-semibold tracking-wide uppercase">{"Ekadashi • Rohini Nakshatra"}</Text></View>
<Text className="material-symbols-outlined text-[18px]">{"share"}</Text></View></View>
<View className="px-6 py-8">
<View className="flex items-baseline gap-2">
<Text className="font-headline font-bold text-2xl text-primary">{"Jai Shri Ram,"}</Text>
<Text className="font-headline text-2xl text-on-surface">{"Arjun 🙏"}</Text></View></View>
<View className="mb-10">
<View className="flex gap-4 overflow-x-auto px-6 no-scrollbar scrolling-touch">
<View className="flex-shrink-0 flex flex-col items-center gap-2">
<View className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer">
<Text className="material-symbols-outlined text-white text-3xl">{"fireplace"}</Text></View>
<Text className="text-xs font-bold text-on-surface/80">{"Donate"}</Text></View>
<View className="flex-shrink-0 flex flex-col items-center gap-2">
<View className="w-16 h-16 rounded-full bg-[#7E1E1E] flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer">
<Text className="material-symbols-outlined text-white text-3xl">{"local_florist"}</Text></View>
<Text className="text-xs font-bold text-on-surface/80">{"Book Puja"}</Text></View>
<View className="flex-shrink-0 flex flex-col items-center gap-2">
<View className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer">
<Text className="material-symbols-outlined text-white text-3xl">{"notifications_active"}</Text></View>
<Text className="text-xs font-bold text-on-surface/80">{"Updates"}</Text></View>
<View className="flex-shrink-0 flex flex-col items-center gap-2">
<View className="w-16 h-16 rounded-full bg-[#00695C] flex items-center justify-center shadow-lg active:scale-90 transition-transform cursor-pointer">
<Text className="material-symbols-outlined text-white text-3xl">{"play_circle"}</Text></View>
<Text className="text-xs font-bold text-on-surface/80">{"Live Aarti"}</Text></View>
<View className="w-2 flex-shrink-0"></View></View></View>
<View className="px-6 mb-12">
<View className="flex justify-between items-end mb-6">
<View>
<Text className="font-headline font-bold text-xl text-on-surface">{"Chalti Seva"}</Text>
<View className="h-1 w-12 bg-accent mt-1"></View></View>
<TouchableOpacity className="text-sm font-bold text-primary active:opacity-60 transition-opacity">{"Sab dekho"}</TouchableOpacity></View>
<View className="bg-surface-container-lowest rounded-arch p-6 shadow-sm relative">
<View className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-12 -mt-12"></View>
<View className="relative z-10">
<View className="flex items-center gap-2 mb-2">
<Text className="px-2 py-0.5 bg-primary-container/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">{"Active Drive"}</Text></View>
<Text className="font-headline font-bold text-xl mb-6 text-on-surface leading-snug">{"Ram Navami Puja 2025"}</Text>
<View className="flex justify-between items-end mb-2">
<View className="flex flex-col">
<Text className="text-[10px] font-bold text-on-surface/40 uppercase tracking-tight">{"Raised"}</Text>
<Text className="font-mono font-bold text-lg text-primary">{"₹18,430 mila"}</Text></View>
<Text className="font-mono text-xs text-on-surface/60">{"Target: ₹25,000"}</Text></View>
<View className="h-2 w-full bg-surface-container-highest rounded-full mb-6">
<View className="h-full bg-saffron-gradient rounded-full"></View></View>
<TouchableOpacity className="w-full bg-saffron-gradient text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-md active:scale-[0.98] transition-all">{"Daan Do"}</TouchableOpacity></View></View></View>
<View className="mb-12">
<View className="px-6 mb-4">
<Text className="font-headline font-bold text-xl text-on-surface">{"Utsav"}</Text></View>
<View className="flex gap-3 overflow-x-auto px-6 no-scrollbar scrolling-touch">
<Text className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface flex-shrink-0">{"Ekadashi"}</Text>
<Text className="px-6 py-2 bg-accent text-white rounded-full text-xs font-bold flex-shrink-0">{"Navratri"}</Text>
<Text className="px-6 py-2 bg-surface-container-highest rounded-full text-xs font-bold text-on-surface flex-shrink-0">{"Hanuman Jayanti"}</Text>
<View className="w-2 flex-shrink-0"></View></View></View>
<View className="px-6 mb-12">
<View className="bg-surface-container-low rounded-2xl p-6 relative">
<View className="flex items-start gap-4 mb-4">
<View className="relative">
<View className="w-12 h-12 rounded-full  border-2 border-white shadow-sm">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJsW_OIH9W9rpcc89QvknZIRNKBnZb0mljaDLBWe0oFv1CcoJRkdeaAF9bauupSwTpYRa7X1hcMVP5nBf5WibXH-E4yIq0lQyTUaAwnySAEX6Qvwc6PV3wUwS25Ab0QfBlwEhGbPQl0-kjSEQSd_H017M_Imf2FsaX-AOUO6pusfDGqEBkua5bobel8iRtAECjCdlc2ic936AVb01gt7Q7OVOYGJZhq160L9FoUxkM55zk7D1gzRxqjZpKPD5WEH3dFQvtAPSBw10r" }} /></View>
<View className="absolute -bottom-1 -right-1 bg-accent text-white rounded-full p-0.5">
<Text className="material-symbols-outlined text-[12px]">{"verified"}</Text></View></View>
<View>
<Text className="font-bold text-sm text-on-surface">{"Acharya Ji"}</Text>
<Text className="text-[10px] text-on-surface/50 uppercase font-bold tracking-wider">{"Temple Admin • 2h ago"}</Text></View></View>
<Text className="text-sm text-on-surface-variant leading-relaxed mb-4 font-medium italic">{"\"All devotees are invited for the evening Maha Aarti today. Special prasad will be distributed in the North Gate courtyard...\""}</Text>
<View className="flex justify-between items-center border-t border-outline-variant/20 pt-4">
<TouchableOpacity className="flex items-center gap-2 text-primary">
<Text className="material-symbols-outlined text-lg">{"waving_hand"}</Text>
<Text className="text-xs font-bold">{"142 Pranam"}</Text></TouchableOpacity>
<TouchableOpacity className="text-xs font-bold text-accent uppercase tracking-widest">{"Read more"}</TouchableOpacity></View></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<View className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold active:scale-90 transition-transform duration-200 cursor-pointer">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Mandir"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl active:scale-90 transition-transform duration-200 cursor-pointer p-2">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Seva"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl active:scale-90 transition-transform duration-200 cursor-pointer p-2">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Puja"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl active:scale-90 transition-transform duration-200 cursor-pointer p-2">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Khojo"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl active:scale-90 transition-transform duration-200 cursor-pointer p-2">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Mera"}</Text></View></View></View>
    </ScrollView>
  );
}
