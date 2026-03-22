import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function QrScanTemplePreview2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-on-surface font-body  flex-1 flex flex-auto flex-col">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-transparent h-[56px]">
<View className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md active:scale-95 transition-transform duration-200">
<Text className="material-symbols-outlined text-white">{"arrow_back"}</Text></View>
<Text className="font-headline font-black text-white text-xl uppercase tracking-widest">{"DIVYA"}</Text>
<View className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md active:scale-95 transition-transform duration-200">
<Text className="material-symbols-outlined text-white">{"notifications"}</Text></View></View>
<View className="relative flex-grow flex flex-col items-center justify-center pt-14">
<View className="absolute inset-0 z-0">
<Image className="w-full h-full object-cover filter brightness-50 contrast-125" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyGAX8umjuY2akPPyW780MxaBJzfvHbUM_PJBsj-5vxQQ4OCz1fXYzF6jAyBblXUputljkN3xQRO-ByVyl53d9gC7jLCFeOa7aKNssWBkO_jtEa1qr4oO5mgAoBbPCkkoxebqdaqZS3nF-riTzPOfmaP1VlGpI1vJePjagLdPqelw3jCCqwK_BzB24hjPeyg4H9Y5uyaVDIEQQ8DzOB06qu458eP-S_E3IVRAz95dv45hj9Kc15GTl4Q2Ozvo8jQaME--DT8Y5CA89" }} />
<View className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></View></View>
<View className="relative z-10 flex flex-col items-center w-full px-8 mb-40">
<Text className="text-white font-headline text-xl mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{"Mandir ka QR Scan karein"}</Text>
<View className="relative w-64 h-64 md:w-80 md:h-80 qr-gradient flex items-center justify-center">
<View className="w-full h-0.5 bg-primary/40 shadow-[0_0_15px_#ab2e15] absolute top-1/2 animate-pulse"></View></View>
<TouchableOpacity className="mt-10 group">
<Text className="text-accent font-medium text-sm underline underline-offset-8 decoration-accent/50  transition-all">{"Or search for your temple manually"}</Text></TouchableOpacity></View>
<View className="absolute bottom-64 left-8 z-20">
<TouchableOpacity className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-xl text-white active:scale-90 transition-transform">
<Text className="material-symbols-outlined">{"flashlight_on"}</Text></TouchableOpacity></View>
<View className="absolute bottom-64 left-1/2 -translate-x-1/2 z-20">
<TouchableOpacity className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl text-white/80 text-xs font-medium tracking-wide flex items-center gap-2">
<Text className="material-symbols-outlined text-sm">{"help"}</Text>{"Help"}</TouchableOpacity></View>
<View className="absolute bottom-0 left-0 w-full z-30 transition-transform duration-500 transform">
<View className="bg-surface shrine-arch shadow-2xl  max-w-2xl mx-auto border-t-0">
<View className="w-full flex justify-center pt-3 pb-1">
<View className="w-12 h-1.5 rounded-full bg-surface-container-highest"></View></View>
<View className="relative">
<View className="h-[180px] w-full relative">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM04BaNdINAK1GwdD1LcpC1MLF8ulGOqIGXrafEAwnbvwt4f_k3TDtJefMbsTRyFGzdCsPGNAh96ZX9g8uDts8KoiK4t3Qh7f_rq2je_CdZfeq7G27j1HpeDDYmdqPJLn6YOqFjWDCrSxsn9_V1g0JV3w_I4wmfBMYvF9te9Lea3m5fJys0d6gDZ1-kKf5f8OSHTosRTpJ2xv59Lg0xiZloTiSs1ao21I7Dnd3dD5yEUS5e--tw6pjbU7CF_dXjD_JcQhN1vgk1Pxo" }} />
<View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></View>
<View className="absolute bottom-4 left-6 flex items-center gap-2">
<Text className="material-symbols-outlined text-white text-sm">{"groups"}</Text>
<Text className="text-white font-mono text-sm tracking-tighter">{"3,442 Devotees"}</Text></View></View>
<View className="px-6 py-6 space-y-4">
<View className="flex justify-between items-start">
<View>
<Text className="font-headline font-bold text-2xl text-on-surface">{"Shri Kashi Vishwanath Mandir"}</Text>
<Text className="text-on-surface-variant flex items-center gap-1 mt-0.5">
<Text className="material-symbols-outlined text-sm">{"location_on"}</Text>{"Varanasi, UP"}</Text></View>
<View className="bg-surface-container-low px-3 py-2 shrine-arch border border-outline-variant/10 text-center">
<Text className="material-symbols-outlined text-accent">{"verified"}</Text></View></View>
<View className="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
<View className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVxxX4HbHhGc5yoWYV9DMvfwFFrJGi8pCup3tNJ6QCMUQC8If6SkT9Zn0FUM72zbTMX7TGQSXi98I76aF75QHoAGuNVAzrDn06fv1Q3u3RdP71XWqwL54YRRfx_XCGmd6pD7P-Dy6uOIdSbgN61Jez2pnvH31D-MMvA-NKua9UGPk07aBCP48EpeiQtW6fjEiGoDSXUinc7qluroBwW-4j0rBYbiRDvVCYanPvidaEqxI2S2je-GEvkt_lNIQdF0FdKF7QVZu5tzYp" }} /></View>
<View>
<Text className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">{"Main Pandit"}</Text>
<Text className="font-headline font-bold text-primary">{"Acharya Brajesh Ji"}</Text></View></View>
<View className="grid grid-cols-2 gap-4 pt-2">
<TouchableOpacity className="saffron-glow text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all">{"Join Community"}</TouchableOpacity>
<TouchableOpacity className="bg-transparent border border-outline text-on-surface-variant font-semibold py-4 rounded-xl active:bg-surface-container-highest transition-all">{"View Temple"}</TouchableOpacity></View></View></View>
<View className="h-20 md:h-0"></View></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 font-medium hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 transition-all duration-200">
<Text className="material-symbols-outlined text-[24px]">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Mandir"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 font-medium hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 transition-all duration-200">
<Text className="material-symbols-outlined text-[24px]">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Seva"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 font-medium hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 transition-all duration-200">
<Text className="material-symbols-outlined text-[24px]">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Puja"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#AB2E15] font-bold active:scale-90 transition-transform duration-200 px-2 py-1">
<Text className="material-symbols-outlined text-[24px]">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Khojo"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 font-medium hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 transition-all duration-200">
<Text className="material-symbols-outlined text-[24px]">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Mera"}</Text></View></View></View>
    </ScrollView>
  );
}
