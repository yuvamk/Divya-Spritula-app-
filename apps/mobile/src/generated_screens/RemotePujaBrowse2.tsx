import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function RemotePujaBrowse2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-background text-on-background font-body">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px]">
<View className="flex items-center">
<TouchableOpacity className="text-white/80 hover:opacity-80 transition-opacity active:scale-95 duration-200">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity></View>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text>
<View className="flex items-center">
<TouchableOpacity className="text-white/80 hover:opacity-80 transition-opacity active:scale-95 duration-200">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View></View>
<View className="pt-[56px] pb-[80px]">
<View className="relative px-6 pt-8 pb-12">
<View className="absolute inset-0 rangoli-pattern pointer-events-none"></View>
<View className="relative z-10 max-w-2xl mx-auto text-center mb-8">
<Text className="font-headline font-bold text-3xl md:text-4xl text-primary leading-tight mb-4">{"Remote Puja Booking"}</Text>
<Text className="text-on-surface-variant font-medium opacity-80">{"Experience the divine presence from your home"}</Text></View>
<View className="relative z-10 max-w-lg mx-auto">
<View className="flex items-center bg-surface-container-highest rounded-full px-5 py-3 shadow-sm group focus-within:ring-2 ring-tertiary/20 transition-all">
<Text className="material-symbols-outlined text-tertiary mr-3">{"search"}</Text>
<View className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant/60"></View></View></View></View>
<View className="px-6 mb-10">
<View className="flex gap-3 overflow-x-auto hide-scrollbar py-2">
<TouchableOpacity className="px-6 py-2 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap shadow-md">{"All"}</TouchableOpacity>
<TouchableOpacity className="px-6 py-2 rounded-full bg-surface-container-low border-outline-variant/15 border text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-highest transition-colors">{"Kashi"}</TouchableOpacity>
<TouchableOpacity className="px-6 py-2 rounded-full bg-surface-container-low border-outline-variant/15 border text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-highest transition-colors">{"Mathura"}</TouchableOpacity>
<TouchableOpacity className="px-6 py-2 rounded-full bg-surface-container-low border-outline-variant/15 border text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-highest transition-colors">{"Tirupati"}</TouchableOpacity>
<TouchableOpacity className="px-6 py-2 rounded-full bg-surface-container-low border-outline-variant/15 border text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-highest transition-colors">{"Vrindavan"}</TouchableOpacity></View></View>
<View className="mb-12">
<View className="px-6 flex justify-between items-baseline mb-6">
<Text className="font-headline font-bold text-2xl text-on-surface">{"Prasidh Mandir"}</Text>
<TouchableOpacity className="text-tertiary font-semibold text-sm">{"See All"}</TouchableOpacity></View>
<View className="flex gap-6 overflow-x-auto hide-scrollbar px-6 pb-4">
<View className="flex-shrink-0 w-72 arch-card bg-surface-container-lowest  shadow-sm hover:shadow-md transition-shadow">
<View className="relative h-64">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRZ9eVV7dHwQztnolMxqZxxFqNU44Bg3vLYJWhFLy9Pgg-UqM76GczWUdoYEq9qHAFzWrvFgR_QHfUFOdpqCD5i_gmjLT7-8paKc-1NWWRIg01UEvIW35wYP7GOu91ULhl3VZS7xbIuNPS_R70bj7MDqTLcDyvxhDZ0iOW3eCOGiA1D4nSYZUTf3aJeJTphaU9jEFObS7DISsdyw4qgfQLMOq62j4qF9B_Qx_nDXN9qIUPOhKxQud249Db-D37XYA7UmjH2weMAXHd" }} />
<View className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center shadow-sm">
<Text className="material-symbols-outlined text-tertiary text-lg mr-1">{"verified"}</Text>
<Text className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">{"Verified"}</Text></View></View>
<View className="p-5">
<Text className="font-headline font-bold text-lg text-on-surface mb-1">{"Kashi Vishwanath"}</Text>
<Text className="text-on-surface-variant text-xs mb-4 flex items-center">
<Text className="material-symbols-outlined text-[14px] mr-1">{"location_on"}</Text>{"Varanasi, Uttar Pradesh"}</Text>
<TouchableOpacity className="w-full saffron-gradient text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform">{"Book Puja"}</TouchableOpacity></View></View>
<View className="flex-shrink-0 w-72 arch-card bg-surface-container-lowest  shadow-sm hover:shadow-md transition-shadow">
<View className="relative h-64">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzRAC2CorepTXMM3sbUcXLD6uOSWA9AzXNe3PmWOksG32EomJEqOMyo8BgB6oKEhotczyMatsq88zAEIeuch66_yCw5sgeNfzb7WxSsMf83nRITNHDBlCcYutJXQkLSb0_Md0YLk5eb6luRVzEAvMPNA6K0SUApA479uzs0tkRpOwwZhTS5NdxE__CoGl2mHgMofdL04Per9k1YlaLt-myGF2kd-TM5Kb_uJvXcdosaoPV0UNygiMUxN4fDi6v1Q5JQsQLuUdGfMiL" }} />
<View className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center shadow-sm">
<Text className="material-symbols-outlined text-tertiary text-lg mr-1">{"verified"}</Text>
<Text className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">{"Verified"}</Text></View></View>
<View className="p-5">
<Text className="font-headline font-bold text-lg text-on-surface mb-1">{"Tirumala Tirupati"}</Text>
<Text className="text-on-surface-variant text-xs mb-4 flex items-center">
<Text className="material-symbols-outlined text-[14px] mr-1">{"location_on"}</Text>{"Tirupati, Andhra Pradesh"}</Text>
<TouchableOpacity className="w-full saffron-gradient text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform">{"Book Puja"}</TouchableOpacity></View></View>
<View className="flex-shrink-0 w-72 arch-card bg-surface-container-lowest  shadow-sm hover:shadow-md transition-shadow">
<View className="relative h-64">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6qN98MFKTEMFZI0s_9gAtx107ws94TMN40UAxDs7HoTvGrOmoFGcWFFiTcAAhneyWAhrJyfQFs-kagMCa6QvoFhsGdwvqHSeEv2RwOlms6vHTv6MCnIZ5aeyR3sl5OItHoy-m-LPZ524egnPiUNBrp0cFbfaXDk02jM4HMo_Gk_3EeMQ7-bHnKDcdnspgmE-AdNH8Q0fultkdybd3CaIINWcl0Iq0lqemXh5gqQwitEFwRqHACxso6uR7BjnJBsRBICROt5tCIE8i" }} />
<View className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center shadow-sm">
<Text className="material-symbols-outlined text-tertiary text-lg mr-1">{"verified"}</Text>
<Text className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">{"Verified"}</Text></View></View>
<View className="p-5">
<Text className="font-headline font-bold text-lg text-on-surface mb-1">{"Banke Bihari"}</Text>
<Text className="text-on-surface-variant text-xs mb-4 flex items-center">
<Text className="material-symbols-outlined text-[14px] mr-1">{"location_on"}</Text>{"Vrindavan, Uttar Pradesh"}</Text>
<TouchableOpacity className="w-full saffron-gradient text-white font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-transform">{"Book Puja"}</TouchableOpacity></View></View></View></View>
<View className="px-6 mb-12">
<Text className="font-headline font-bold text-2xl text-on-surface mb-8">{"Puja ka Prakar Chunein"}</Text>
<View className="grid grid-cols-2 gap-4 md:grid-cols-4">
<View className="bg-surface-container-low p-6 rounded-[24px] flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors">
<View className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm  transition-transform">
<Text className="material-symbols-outlined text-primary text-3xl">{"water_drop"}</Text></View>
<Text className="font-bold text-on-surface-variant text-sm">{"Abhishek"}</Text></View>
<View className="bg-surface-container-low p-6 rounded-[24px] flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors">
<View className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm  transition-transform">
<Text className="material-symbols-outlined text-primary text-3xl">{"auto_stories"}</Text></View>
<Text className="font-bold text-on-surface-variant text-sm">{"Satyanarayan Katha"}</Text></View>
<View className="bg-surface-container-low p-6 rounded-[24px] flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors">
<View className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm  transition-transform">
<Text className="material-symbols-outlined text-primary text-3xl">{"fireplace"}</Text></View>
<Text className="font-bold text-on-surface-variant text-sm">{"Rudrabhishek"}</Text></View>
<View className="bg-surface-container-low p-6 rounded-[24px] flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors">
<View className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm  transition-transform">
<Text className="material-symbols-outlined text-primary text-3xl">{"storm"}</Text></View>
<Text className="font-bold text-on-surface-variant text-sm">{"Maha Mrityunjaya"}</Text></View></View></View>
<View className="px-6 mb-8">
<View className="relative bg-surface-container p-10 rounded-[32px]  text-center">
<View className="absolute top-0 right-0 p-8 opacity-5">
<Text className="material-symbols-outlined text-8xl">{"ods"}</Text></View>
<Text className="font-headline italic text-xl text-on-surface-variant leading-relaxed">{"\"Yatra yogeshvarah krishno yatra partho dhanur-dharah..."}
<View></View>{"Wherever there is Krishna, the master of all mystics, there will also certainly be opulence, victory, extraordinary power, and morality.\""}</Text></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
