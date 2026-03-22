import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function NayaSevaDrive2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface font-body text-on-surface flex-1 pb-24">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<TouchableOpacity className="text-white/80 hover:opacity-80 transition-opacity active:scale-95 duration-200">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-black text-white text-xl uppercase tracking-widest">{"DIVYA"}</Text>
<TouchableOpacity className="text-white/80 hover:opacity-80 transition-opacity active:scale-95 duration-200">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View>
<View className="pt-20 px-6 max-w-2xl mx-auto">
<View className="mb-10">
<Text className="text-tertiary font-headline italic text-sm tracking-wide">{"Sacred Service"}</Text>
<Text className="text-4xl font-headline font-bold text-primary mt-2">{"Launch Drive"}</Text>
<Text className="text-on-surface-variant mt-2 max-w-md">{"Initiate a new donation circle for the community's spiritual well-being."}</Text></View>
<View className="flex items-center justify-between mb-12 relative">
<View className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -z-10"></View>
<View className="flex flex-col items-center gap-2">
<View className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center text-white font-bold shadow-lg">{"1"}</View>
<Text className="text-[10px] font-bold uppercase tracking-tighter text-primary">{"Details"}</Text></View>
<View className="flex flex-col items-center gap-2">
<View className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold border-4 border-surface">{"2"}</View>
<Text className="text-[10px] font-medium uppercase tracking-tighter text-on-surface-variant">{"Schedule"}</Text></View>
<View className="flex flex-col items-center gap-2">
<View className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-bold border-4 border-surface">{"3"}</View>
<Text className="text-[10px] font-medium uppercase tracking-tighter text-on-surface-variant">{"Review"}</Text></View></View>
<View className="space-y-10">
<View className="flex flex-col md:flex-row gap-8 items-start">
<View className="w-full md:w-1/3 aspect-[3/4] sacred-arch bg-surface-container-high flex flex-col items-center justify-center border-2 border-dashed border-outline-variant group cursor-pointer hover:bg-surface-container transition-colors relative">
<Image className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLlCnO7iedYN-6YYcgGp2PmTEHym8dgFR98C5nlruJ7TQm1CowPI2qsbkw0L6rtkM4F9cAM-qMzB8Q0CvIOzfoWa1gwlLJW2zapEuqTn2Cu_g_YndxnHlep2ybmC79zppe-XqU5b75uSA_hiXRFJ0wvlwieSmIGyumJcjg4DUwD4c1Wqx_4bhQcXPCAMGesJ-eiu8Mwp5l4oKYgWB-1XOwKUp527n4I892Wk86x66LMA0ZAPrm7pLgrcQn0kiYZyyrUttBm41spuS" }} />
<Text className="material-symbols-outlined text-tertiary text-4xl mb-2">{"add_a_photo"}</Text>
<Text className="text-[10px] font-bold uppercase text-tertiary">{"Upload Cover"}</Text></View>
<View className="flex-1 w-full space-y-6">
<View className="relative">
<Text className="block text-[10px] font-bold uppercase text-tertiary mb-1 ml-1">{"Drive Name"}</Text>
<View className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-tertiary focus:ring-0 transition-all px-4 py-3 rounded-t-xl text-on-surface placeholder:text-on-surface-variant/40"></View></View>
<View className="relative">
<Text className="block text-[10px] font-bold uppercase text-tertiary mb-1 ml-1">{"Puja Category"}</Text>
<View className="relative">
<View className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-tertiary focus:ring-0 appearance-none px-4 py-3 rounded-t-xl text-on-surface">
<View>{"Select a Ritual"}</View>
<View>{"Maha Aarti"}</View>
<View>{"Bhandara (Community Meal)"}</View>
<View>{"Temple Restoration"}</View>
<View>{"Vedic Education"}</View></View>
<Text className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">{"expand_more"}</Text></View></View></View></View>
<View className="relative">
<Text className="block text-[10px] font-bold uppercase text-tertiary mb-1 ml-1">{"Spiritual Purpose"}</Text>
<View className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-tertiary focus:ring-0 transition-all px-4 py-3 rounded-t-xl text-on-surface placeholder:text-on-surface-variant/40 resize-none"></View></View>
<View className="grid grid-cols-1 md:grid-cols-2 gap-6">
<View className="relative">
<Text className="block text-[10px] font-bold uppercase text-tertiary mb-1 ml-1">{"Event Date (Tithi)"}</Text>
<View className="flex items-center bg-surface-container-low rounded-t-xl px-4 py-3 border-b-2 border-transparent focus-within:border-tertiary">
<Text className="material-symbols-outlined text-tertiary mr-3">{"calendar_today"}</Text>
<View className="bg-transparent border-none focus:ring-0 p-0 text-on-surface w-full"></View></View>
<Text className="text-[9px] text-on-surface-variant mt-1 italic ml-1">{"*Syncs with Lunar Panchang"}</Text></View>
<View className="relative">
<Text className="block text-[10px] font-bold uppercase text-tertiary mb-1 ml-1">{"Target Amount"}</Text>
<View className="flex items-center bg-surface-container-low rounded-t-xl px-4 py-3 border-b-2 border-transparent focus-within:border-tertiary">
<Text className="font-['Roboto_Mono'] text-tertiary font-bold mr-2 text-lg">{"₹"}</Text>
<View className="bg-transparent border-none focus:ring-0 p-0 text-on-surface w-full font-['Roboto_Mono'] text-lg"></View></View></View></View>
<View className="pt-8 pb-12">
<TouchableOpacity className="w-full saffron-gradient text-white py-5 rounded-xl font-headline font-bold text-lg shadow-xl active:scale-95 transition-transform duration-200 flex items-center justify-center gap-3">
<Text className="material-symbols-outlined">{"publish"}</Text>{"Publish Drive"}</TouchableOpacity>
<Text className="text-center text-[10px] text-on-surface-variant mt-4 uppercase tracking-widest opacity-60">{"Visibility: All Registered Devotees"}</Text></View></View></View>
<View className="hidden md:flex fixed left-0 top-0 h-full w-80 bg-[#FAF9F6] dark:bg-[#0F0D1A] flex-col py-8 gap-4 shadow-2xl z-[60] rounded-r-[32px]">
<View className="px-8 mb-8 flex items-center gap-4">
<View className="w-12 h-12 rounded-full  bg-surface-container-highest">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_n14jY539gXJqJjKdat6CMF9jC14bnfuY8E04SNok3Egj2gRxNL_zS3WwYJY8GXafygBxO3eAHVFxhh1gD-WNISdCvtL-BmUdMn0JEIdleLQ7t7RXH_8QLb4wUR0dnLO_qqUXYiqzoDsPXlJTxaMQuMOEYd61rhQ-SjYyqXLm3JPl7wiwVCNh7AkUpB4-Utipb33VEoDrWoZ6RxEMs_s-4crUqwHpm29IGHU7sSy3m78E1TQmpiB2Yk8lWA9hN6duXr5bz2jlodil" }} /></View>
<View>
<Text className="font-['Noto_Sans'] font-semibold text-base text-[#AB2E15] dark:text-[#E8593C]">{"Acharya Ji"}</Text>
<Text className="text-[10px] text-on-surface-variant uppercase tracking-widest">{"Temple Admin"}</Text></View></View>
<View className="flex flex-col gap-1 pr-4">
<TouchableOpacity className="flex items-center gap-4 px-8 py-4 text-[#1A1C1A] dark:text-[#FAF9F6] hover:pl-10 transition-all duration-300 font-['Noto_Sans'] font-semibold">
<Text className="material-symbols-outlined">{"dashboard"}</Text>{"Dashboard"}</TouchableOpacity>
<TouchableOpacity className="flex items-center gap-4 px-8 py-4 text-[#1A1C1A] dark:text-[#FAF9F6] hover:pl-10 transition-all duration-300 font-['Noto_Sans'] font-semibold">
<Text className="material-symbols-outlined">{"groups"}</Text>{"Samaj"}</TouchableOpacity>
<TouchableOpacity className="flex items-center gap-4 px-8 py-4 bg-[#E3E2E0] dark:bg-[#E3E2E0]/20 text-[#AB2E15] dark:text-[#E8593C] rounded-r-full font-['Noto_Sans'] font-semibold">
<Text className="material-symbols-outlined">{"volunteer_activism"}</Text>{"Daan"}</TouchableOpacity>
<TouchableOpacity className="flex items-center gap-4 px-8 py-4 text-[#1A1C1A] dark:text-[#FAF9F6] hover:pl-10 transition-all duration-300 font-['Noto_Sans'] font-semibold">
<Text className="material-symbols-outlined">{"calendar_month"}</Text>{"Booking"}</TouchableOpacity>
<TouchableOpacity className="flex items-center gap-4 px-8 py-4 text-[#1A1C1A] dark:text-[#FAF9F6] hover:pl-10 transition-all duration-300 font-['Noto_Sans'] font-semibold">
<Text className="material-symbols-outlined">{"account_circle"}</Text>{"Mera"}</TouchableOpacity></View></View>
<View className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 rounded-xl px-2 py-1 active:scale-90 transition-transform duration-200">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
