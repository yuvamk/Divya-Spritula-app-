import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DonationSuccess1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-[#0F0D1A] flex-1 flex flex-col font-body   overflow-x-hidden">
<View className="fixed top-0 left-0 w-full h-[56px] flex items-center justify-between px-6 z-50">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/60 cursor-pointer">{"arrow_back"}</Text></View>
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/60">{"share"}</Text></View></View>
<View className="flex-grow flex flex-col items-center justify-center px-6 pt-20 pb-12 relative">
<View className="absolute inset-0 opacity-[0.03] pointer-events-none"></View>
<View className="relative flex flex-col items-center mb-8">
<View className="w-32 h-32 mb-4 diya-glow flex items-center justify-center">
<Text className="material-symbols-outlined text-[120px] text-[#BA7517]">{"fireplace"}</Text></View>
<Text className="font-headline font-black text-4xl text-[#BA7517] tracking-wider mb-2">{"Dhanyavaad 🙏"}</Text>
<Text className="text-white/80 text-center text-lg max-w-xs leading-relaxed px-4">{"Aapka"}
<Text className="text-[#BA7517] font-bold">{"₹501"}</Text>{"ka daan Ram Navami Puja ke liye shamil ho gaya"}</Text></View>
<View className="arch-mask bg-surface-container-lowest/10 backdrop-blur-md w-full max-w-sm p-8 flex flex-col items-center gap-6 relative">
<View className="absolute inset-0 bg-white/[0.02] pointer-events-none"></View>
<View className="flex flex-col items-center gap-1">
<Text className="text-white/50 text-xs uppercase tracking-widest font-semibold">{"Amount Donated"}</Text>
<Text className="font-mono text-4xl font-bold text-[#BA7517]">{"₹501.00"}</Text></View>
<View className="w-full grid grid-cols-2 gap-y-4 pt-4 border-t border-white/10">
<View className="flex flex-col">
<Text className="text-white/40 text-[10px] uppercase font-bold">{"Date"}</Text>
<Text className="text-white/90 text-sm font-medium">{"17 Apr 2024"}</Text></View>
<View className="flex flex-col text-right">
<Text className="text-white/40 text-[10px] uppercase font-bold">{"Status"}</Text>
<Text className="text-[#4CAF50] text-sm font-bold flex items-center justify-end gap-1">
<Text className="material-symbols-outlined text-xs">{"check_circle"}</Text>{"SUCCESS"}</Text></View>
<View className="flex flex-col col-span-2">
<Text className="text-white/40 text-[10px] uppercase font-bold">{"Transaction ID"}</Text>
<Text className="text-white/90 font-mono text-xs tracking-tight">{"DIVYA-TXN-9823410762"}</Text></View></View></View>
<View className="w-full max-w-sm flex flex-col gap-4 mt-8">
<TouchableOpacity className="saffron-gradient text-white py-4 px-8 rounded-xl font-bold text-lg shadow-xl active:scale-95 transition-transform duration-200">{"Wapas Jaao"}</TouchableOpacity>
<TouchableOpacity className="flex items-center justify-center gap-2 border border-white/20 text-white/90 py-3 px-8 rounded-xl font-semibold hover:bg-white/5 transition-colors">
<Text className="material-symbols-outlined text-xl">{"download"}</Text>{"Receipt download karo"}</TouchableOpacity></View>
<View className="fixed bottom-0 left-0 w-full bg-[#25D366]/10 backdrop-blur-lg border-t border-white/5 py-4 px-6 flex items-center justify-between z-50">
<View className="flex items-center gap-3">
<View className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
<Image className="w-6 h-6 invert brightness-0" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWjKR7O0kC6DHRAe7UIzk_SATW6V1Jj58vyBMu6P_3ydC3zAcFyc5xrTfIK7638rAoR2wdxpnIi-bJy5vltwiOZNbStARW9fiWDw59mU9XwFe1tSHJPdt11wMjavj4HXgezWRi8lGCDaA_Qb-zpzIhtDuKEi2LeiJcGo74dBXoPFOItyzQ8k2XnBzJXpW3BNe7SKKQxb-CaZNO6zdVyqR4DNWsETvCiyRoVpS24uPH9elk-QQBaZ27h9bFNI2udz7hfZ62cNaBhC3g" }} /></View>
<View className="flex flex-col">
<Text className="text-white text-xs font-bold leading-none">{"Share with Family"}</Text>
<Text className="text-white/60 text-[10px]">{"Punya baantein auron ke saath"}</Text></View></View>
<TouchableOpacity className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">{"Share Now"}</TouchableOpacity></View></View>
<View className="fixed bottom-12 right-[-20px] opacity-[0.04] pointer-events-none select-none">
<Text className="material-symbols-outlined text-[300px] text-white">{"ods"}</Text></View></View>
    </ScrollView>
  );
}
