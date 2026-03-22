import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function PujaLiveTracking1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface text-on-surface font-body">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px]">
<View className="flex items-center gap-4">
<TouchableOpacity className="active:scale-95 duration-200 text-white/80">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text></View>
<TouchableOpacity className="active:scale-95 duration-200 text-white/80">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View>
<View className="pt-20 pb-24 px-4 max-w-2xl mx-auto space-y-8">
<View className="relative  bg-surface-container-lowest rounded-t-[48px] rounded-b-[16px] p-6 shadow-sm border-t-4 border-primary">
<View className="flex justify-between items-start mb-4">
<View>
<Text className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">{"Booking Reference"}</Text>
<Text className="font-['Roboto_Mono'] text-xl font-bold text-primary">{"#DV-8829-X1"}</Text></View>
<View className="bg-tertiary-container/10 px-3 py-1 rounded-full border border-tertiary-container/20">
<Text className="text-tertiary font-bold text-xs">{"Priority Seva"}</Text></View></View>
<View className="space-y-3">
<View className="flex items-center gap-3">
<Text className="material-symbols-outlined text-primary text-xl">{"fireplace"}</Text>
<View>
<Text className="text-sm font-bold leading-none">{"Maha Mrityunjaya Puja"}</Text>
<Text className="text-xs text-on-surface-variant">{"Vedic Chanting & Hawan"}</Text></View></View>
<View className="flex items-center gap-3">
<Text className="material-symbols-outlined text-accent text-xl">{"account_circle"}</Text>
<View>
<Text className="text-sm font-bold leading-none">{"Pandit Ravishankar Shastri"}</Text>
<Text className="text-xs text-on-surface-variant">{"Kashi Vishwanath Mandir, Varanasi"}</Text></View></View></View></View>
<View className="space-y-4">
<View className="flex items-center justify-between">
<View className="flex items-center gap-2">
<Text className="relative flex h-3 w-3">
<Text className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></Text>
<Text className="relative inline-flex rounded-full h-3 w-3 bg-error"></Text></Text>
<Text className="font-headline font-bold text-lg">{"LIVE DARSHAN"}</Text></View>
<View className="bg-surface-container-highest px-2 py-1 rounded text-[10px] font-bold">{"108 VIEWERS"}</View></View>
<View className="relative aspect-video w-full rounded-[24px]  bg-on-surface group cursor-pointer shadow-2xl">
<Image className="w-full h-full object-cover opacity-80" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ4iu4KyNGgUL2S4GPjHQG17obuf6Tr0sKVijnlrzIS_xoI4rvBa8Lv4sR5yj-Wjtjon7R40ajjDDBryfltqB2Oew9rsBiErEGITIF--Mq8XVvpzzPbUoRfvkl-WcMdtmwuwuw4eFIwAIJ3qQMJBWUNDIf5gLSHd7t2g2y5TW_YFOU1NIfWuxsWOa4Nw_i6Kwz4EGRpYRqTaMeYWESz7f_eKBOlBrsctJnXIBbspPjN7Mkjycyhol0EgxEhAeKiD0zMRfXsCqVS0kZ" }} />
<View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
<View className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 pulse-soft">
<Text className="material-symbols-outlined text-white text-4xl">{"play_arrow"}</Text></View></View>
<View className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-xs font-medium">
<Text className="material-symbols-outlined text-sm">{"location_on"}</Text>{"Ganga Ghat, Varanasi"}</View></View></View>
<View className="bg-surface-container-low rounded-xl p-6">
<Text className="font-headline font-bold text-lg mb-6">{"Sankalp Progress"}</Text>
<View className="space-y-0">
<View className="flex gap-4">
<View className="flex flex-col items-center">
<View className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
<Text className="material-symbols-outlined text-white text-xs">{"check"}</Text></View>
<View className="w-0.5 h-10 bg-primary"></View></View>
<View className="pb-6">
<Text className="font-bold text-sm">{"Booking Confirmed"}</Text>
<Text className="text-xs text-on-surface-variant">{"Varanasi Desk, 08:30 AM"}</Text></View></View>
<View className="flex gap-4">
<View className="flex flex-col items-center">
<View className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
<Text className="material-symbols-outlined text-white text-xs">{"check"}</Text></View>
<View className="w-0.5 h-10 bg-primary"></View></View>
<View className="pb-6">
<Text className="font-bold text-sm">{"Pandit accepted"}</Text>
<Text className="text-xs text-on-surface-variant">{"Acharya Ravishankar assigned"}</Text></View></View>
<View className="flex gap-4">
<View className="flex flex-col items-center">
<View className="w-6 h-6 rounded-full border-2 border-primary bg-surface flex items-center justify-center pulse-soft">
<View className="w-2 h-2 rounded-full bg-primary"></View></View>
<View className="w-0.5 h-10 bg-surface-container-highest"></View></View>
<View className="pb-6">
<Text className="font-bold text-sm text-primary">{"Puja shuru"}</Text>
<Text className="text-xs text-on-surface-variant">{"Mantra Jaap in progress..."}</Text></View></View>
<View className="flex gap-4">
<View className="flex flex-col items-center">
<View className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center"></View></View>
<View>
<Text className="font-bold text-sm text-on-surface/40">{"Puja ho rahi"}</Text>
<Text className="text-xs text-on-surface-variant/40">{"Aarti & Pushpanjali"}</Text></View></View></View></View>
<View className="space-y-4">
<Text className="font-headline font-bold text-lg">{"Punya Proofs"}</Text>
<View className="grid grid-cols-2 gap-3">
<View className="aspect-square rounded-2xl  shadow-sm">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Ummu0twcbzOPUn6PQYLyPjcjwlzaOoydSt7p63HdWhYj4lIGy_Woe-GuRD_6IfyN-iJYfZCFBAC9M1N_aj-6moSLStCgIaHbQ_hNAz-WS_GwzEuzZx9F6RV0oJtqKG4Ij-n42_Yua8c3ixad52YzLPQpvi1Dj3JWT8Pez-vH-YyXFLxPtLlQOoQ7YF2SLD3ow0o4P29fOnfQufWTs84H3Pyo2IPGI41jO6aMtaHji5FlABO-MDILcv5H50KaG8XbyFCBBlafKdQW" }} /></View>
<View className="aspect-square rounded-2xl  shadow-sm">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqct-NfZrYJxsOk49WWNJuYda8Ds9TuKoZDnaySGgbxIkyrPIuLEPSgCdm3_zYchKzvoa25ZJ3O9az04DLRTlBIrTvDzZALFCHaDRPJxI8csGMAHlBQU-5I3W0PqtnV5ZBI4_ol5T1yXuO7zU0IXF49C_vxaGcPKa-Vj8dIk0fUaZrvfLhpyqxR2pQAOWyaS-sg-bF2-giyGr4-4-QgJEgoJwa4KSyPgWGexP1e4vlmQsv7XqR7mwQBnvZgnRNZHS9Bm6NkOzFWctJ" }} /></View>
<View className="aspect-square rounded-2xl  shadow-sm">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7-Hk6fgJ9PTtg7z_Su1JRjHmxNjd0LqoJ0HeRm1x-nExzUgMlTn-6W4uTki5p_GgCFDaxRyxq_lx19QYwsKja4g4s1ehRxZIL6Ajm3eBxFknQXs1E9-u1lQh35MWCnYHVTJ4ugkvcsCfNCFwH21XiG-jcMZLk7KVb8sXp3i6F-tSlc0d-pLbi26hAyPh-xDkRjvvev5qGlXQjlo3RjIwCXdCykOsCyl-CH4H2tzz01dkMdFoBij54At-Xy3Kid3v30tYZSPgMUM3q" }} /></View>
<View className="relative aspect-square rounded-2xl  shadow-sm bg-surface-container-highest flex items-center justify-center">
<Text className="material-symbols-outlined text-on-surface-variant">{"more_horiz"}</Text></View></View>
<TouchableOpacity className="w-full py-4 rounded-xl bg-surface-container-highest flex items-center justify-center gap-3 active:scale-95 transition-transform">
<Text className="material-symbols-outlined text-primary">{"video_library"}</Text>
<Text className="font-bold text-sm uppercase tracking-wide">{"Puja video dekho"}</Text></TouchableOpacity></View>
<View className="bg-surface-container-lowest rounded-[32px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-6">
<View className="flex items-center justify-between">
<Text className="font-headline font-bold text-lg">{"Prasad Tracking"}</Text>
<Text className="text-[10px] font-bold text-tertiary bg-tertiary-fixed px-2 py-0.5 rounded">{"SHIPMENT #PR-001"}</Text></View>
<View className="relative h-24 w-full bg-surface-container rounded-2xl  flex items-center justify-center">
<View className="absolute inset-0 opacity-20 grayscale"></View>
<View className="relative w-4/5 flex items-center justify-between">
<View className="z-10 bg-white p-1 rounded-full shadow-md">
<Text className="material-symbols-outlined text-primary text-xl">{"temple_hindu"}</Text></View>
<View className="flex-grow h-px bg-dashed border-t-2 border-dashed border-primary/30 relative">
<View className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2">
<Text className="material-symbols-outlined text-primary text-sm transform rotate-90">{"local_shipping"}</Text></View></View>
<View className="z-10 bg-white p-1 rounded-full shadow-md opacity-40">
<Text className="material-symbols-outlined text-on-surface-variant text-xl">{"home"}</Text></View></View>
<View className="absolute bottom-2 left-6 text-[10px] font-bold text-on-surface-variant uppercase">{"Varanasi"}</View>
<View className="absolute bottom-2 right-6 text-[10px] font-bold text-on-surface-variant uppercase">{"Mera Home"}</View></View>
<View className="flex items-start gap-4 p-4 bg-surface-container-low rounded-2xl">
<Text className="material-symbols-outlined text-primary">{"local_shipping"}</Text>
<View>
<Text className="font-bold text-sm">{"En Route to Hub"}</Text>
<Text className="text-xs text-on-surface-variant">{"Estimated arrival: Wednesday, 4 PM"}</Text></View></View>
<TouchableOpacity className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 transition-transform">{"Confirm Delivery"}</TouchableOpacity></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 transition-all">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 transition-all">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 transition-all">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 transition-all">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 transition-all">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
