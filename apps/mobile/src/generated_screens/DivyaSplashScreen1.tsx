import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DivyaSplashScreen1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-[#7E1E1E] flex flex-col items-center justify-center flex-1">
<View className="relative w-full flex-1 flex flex-col items-center justify-center rangoli-overlay">
<View className="relative flex flex-col items-center text-center z-10">
<View className="relative mb-8 flex items-center justify-center">
<View className="absolute w-32 h-32 rounded-full bg-accent/30 blur-[40px] glow-ring"></View>
<View className="absolute w-24 h-24 rounded-full border border-accent/20 glow-ring"></View>
<View className="om-symbol leading-none">{"ॐ"}</View></View>
<View className="space-y-1">
<Text className="font-serif font-bold text-[38px] text-white tracking-[6px] uppercase leading-tight">{"DIVYA"}</Text>
<View className="font-serif text-[16px] text-accent font-medium">{"दिव्य"}</View>
<View className="pt-6">
<Text className="font-serif italic text-[13px] text-white/60 tracking-wide">{"Har Mandir. Har Dil."}</Text></View></View></View>
<View className="fixed bottom-12 left-12 flex flex-col items-center">
<View className="w-4 h-6 bg-gradient-to-t from-accent to-primary-container rounded-full flame blur-[1px]"></View>
<View className="w-10 h-4 bg-[#4A1111] rounded-b-full mt-[-2px] border-t border-accent/20 shadow-lg"></View></View>
<View className="fixed bottom-12 right-12 flex flex-col items-center">
<View className="w-4 h-6 bg-gradient-to-t from-accent to-primary-container rounded-full flame blur-[1px]"></View>
<View className="w-10 h-4 bg-[#4A1111] rounded-b-full mt-[-2px] border-t border-accent/20 shadow-lg"></View></View>
<View className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
<Text className="material-symbols-outlined text-[600px] text-white">{"local_florist"}</Text></View></View>
<View className="hidden">
<Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg2t3iBZzDMtLEZsk_jjAZJY9E-1fhW4X4axzOp4edKVZsRpwflWGGM2ht9vNq5e8eOL0OIAZr6-VLLW9ffSwsynD2sv53Z1sshFjFhlV0MEMkHJT-KaEPIxK1fQPSW-_SEV6AL_fXBPOofCClDSsmDV26vmSn7yLSfUfl8ToBsMJFu36w3Bv4PQt3lRRs9dvp2NegyqHZ4w9AUd0bIQ05nsgLFOJvR6oGFs1zv7yq7Oa-hOn6v0EifLtCBCwup1oswWQWKxO245ZC" }} />
<Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBfIxUDBc8xUmSXrGOeEOhERrwXaccZslrr_T6AOgRS2Zb2vgY9yY-Y5ewjiI43887XERNwVIYzXAEw56nXoArhtkKkSTezjxQZwxX9vsO8IWyLbTgVT0dPELBpAjYRoOELI18dza56B4H5WLMF3E3IKLAEy-nRYfRuaSI-LQT2LQFVmeH63ZYpy3-kNhEw-UZ9D64t1hckUDyd2I-6UDsWZLlodjyXZZz5aNtZ-T15_Mdb6euUPRFDAmawu9taiqCPINvllmPdy0v" }} /></View></View>
    </ScrollView>
  );
}
