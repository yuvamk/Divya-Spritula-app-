import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function PujaBookingForm2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-background text-on-background font-body flex-1 pb-24">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<View className="flex items-center gap-4">
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 transition-opacity hover:opacity-80">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text></View>
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/80">{"notifications"}</Text></View></View>
<View className="pt-[56px] rangoli-pattern flex-1">
<View className="px-6 py-6 max-w-2xl mx-auto">
<View className="flex items-center justify-between mb-2">
<Text className="text-xs font-bold text-primary uppercase tracking-tighter">{"Step 1 of 3"}</Text>
<Text className="text-xs font-medium text-on-surface-variant">{"Sankalp Details"}</Text></View>
<View className="w-full h-1 bg-surface-container-highest rounded-full">
<View className="h-full bg-primary w-1/3 rounded-full"></View></View></View>
<View className="px-6 mb-8 max-w-2xl mx-auto">
<View className="flex flex-col gap-1">
<Text className="font-headline font-bold text-3xl text-primary leading-tight">{"Kashi Vishwanath"}</Text>
<Text className="font-headline italic text-lg text-on-surface-variant">{"Rudrabhishek Puja"}</Text></View>
<View className="mt-4 inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full">
<Text className="material-symbols-outlined text-tertiary text-sm">{"payments"}</Text>
<Text className="font-['Roboto_Mono'] font-bold text-tertiary">{"₹2,500"}</Text></View></View>
<View className="px-4 max-w-2xl mx-auto">
<View className="bg-surface-container-lowest arch-card p-8 shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<View className="mb-8">
<Text className="font-headline font-bold text-2xl text-on-surface mb-2">{"Sankalp Bharo"}</Text>
<Text className="text-on-surface-variant text-sm">{"Provide details of the devotee for whom the puja will be performed."}</Text></View>
<View className="flex flex-col gap-6">
<View className="relative">
<Text className="block text-xs font-bold text-tertiary uppercase tracking-widest mb-1 ml-1">{"Full Name"}</Text>
<View className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-lg transition-all placeholder:text-on-surface-variant/40"></View></View>
<View className="grid grid-cols-1 md:grid-cols-2 gap-6">
<View className="relative">
<Text className="block text-xs font-bold text-tertiary uppercase tracking-widest mb-1 ml-1">{"Gotra"}</Text>
<View className="relative">
<View className="w-full appearance-none bg-surface-container-low border-0 border-b-2 border-transparent focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-lg transition-all text-on-surface">
<View>{"Select Gotra"}</View>
<View>{"Bhardwaj"}</View>
<View>{"Kashyap"}</View>
<View>{"Vatsa"}</View>
<View>{"Shandilya"}</View>
<View>{"Atri"}</View>
<View>{"Not Known / Kashyap"}</View></View>
<Text className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">{"expand_more"}</Text></View></View>
<View className="relative">
<Text className="block text-xs font-bold text-tertiary uppercase tracking-widest mb-1 ml-1">{"Nakshatra"}</Text>
<View className="relative">
<View className="w-full appearance-none bg-surface-container-low border-0 border-b-2 border-transparent focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-lg transition-all text-on-surface">
<View>{"Select Nakshatra"}</View>
<View>{"Ashwini"}</View>
<View>{"Bharani"}</View>
<View>{"Krittika"}</View>
<View>{"Rohini"}</View>
<View>{"Mrigashirsha"}</View></View>
<Text className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">{"expand_more"}</Text></View></View></View>
<View className="relative">
<Text className="block text-xs font-bold text-tertiary uppercase tracking-widest mb-1 ml-1">{"Rashi"}</Text>
<View className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-lg transition-all placeholder:text-on-surface-variant/40"></View></View>
<View className="relative">
<Text className="block text-xs font-bold text-tertiary uppercase tracking-widest mb-1 ml-1">{"Puja Purpose"}</Text>
<View className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-tertiary focus:ring-0 px-4 py-3 rounded-t-lg transition-all placeholder:text-on-surface-variant/40 resize-none"></View></View></View></View></View>
<View className="mt-8 px-6 max-w-2xl mx-auto flex gap-4 items-start text-on-surface-variant opacity-70 italic">
<Text className="material-symbols-outlined">{"info"}</Text>
<Text className="text-sm">{"In case Gotra is unknown, 'Kashyap' Gotra is traditionally used for Sankalp rituals."}</Text></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-xl h-[80px] flex items-center px-6 shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<View className="max-w-2xl mx-auto w-full flex justify-between items-center gap-4">
<View className="flex flex-col">
<Text className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{"Total Payable"}</Text>
<Text className="font-['Roboto_Mono'] font-bold text-lg text-tertiary">{"₹2,500"}</Text></View>
<TouchableOpacity className="saffron-gradient text-white font-bold py-3 px-10 rounded-xl active:scale-95 duration-200 shadow-lg shadow-primary/20 flex items-center gap-2">{"Continue"}
<Text className="material-symbols-outlined text-sm">{"arrow_forward"}</Text></TouchableOpacity></View></View></View>
    </ScrollView>
  );
}
