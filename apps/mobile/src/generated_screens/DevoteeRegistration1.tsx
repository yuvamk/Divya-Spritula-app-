import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DevoteeRegistration1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface font-body text-on-surface flex-1 flex flex-col">
<View className="fixed top-0 left-0 w-full h-1 bg-surface-container-highest z-[60]">
<View className="h-full bg-primary w-1/2"></View></View>
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 transition-opacity hover:opacity-80">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text>
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 transition-opacity hover:opacity-80">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View>
<View className="flex-grow pt-20 pb-24 px-6 max-w-2xl mx-auto w-full">
<View className="flex items-center gap-4 mb-8">
<View className="w-16 h-16 rounded-full  flex-shrink-0 bg-surface-container-high">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDebYkdaMX3CwFf7z5vbW03YO-c3E1lzWlKpWrWcNm6AX3lwSgWVNDSax9uTnLhrVKMHzdX_eB7w0EiicDKqw_Nt6b0CvgygSYRcI7mCEYCkVbvlOS3ujsEX3GPfGU-UhyQ6Vioh04K8RnUeFFqGKMnd3PdYm5eBnn1BOnmhVuvFyLiT16i2Cb_9t2MhUjt4aQ2cKTE8HqrWK2W_pUZsyMb-vjdm8tGD2n6wyBg7-1llYDt7ouy7cJUiH7Yd6B9vDKAy6YrkNLUxJgv" }} /></View>
<View>
<Text className="font-headline font-bold text-2xl text-primary">{"Shri Kashi Vishwanath"}</Text>
<Text className="font-label text-on-surface-variant text-sm italic">{"Apni jankari bharen — Pandit ji aapko pehchaan sakein"}</Text></View></View>
<View className="space-y-10">
<View className="relative">
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider mb-2">{"Full Name"}</Text>
<View className="relative border-b-2 border-surface-container-highest transition-all duration-300 custom-input-focus">
<View className="w-full bg-transparent border-none px-0 py-3 text-lg focus:ring-0 placeholder:text-on-surface/30 font-label"></View></View></View>
<View className="relative">
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider mb-2">{"Mobile Number"}</Text>
<View className="flex items-center gap-3 border-b-2 border-surface-container-highest custom-input-focus transition-all duration-300">
<View className="flex items-center gap-1 font-label font-medium text-on-surface/70 pb-3">
<Image className="w-5 h-auto rounded-sm" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB749KSz5AZkUYVIQF6g5jmcd3PuCpHP1S1ZmdpWI8XhJhKk6EOFJNPnFepSvZT_4fBnfzJ26Q7_r-xhjy8vRBXLINgR_kV_WPma8_zDVbjL0Le2_AX2ceDB8Uu-EOrbcGLw1XKVLvb7lt4CvqbcIDtNCKm3yDTvOzWxwIh3ALtDiXU_XEciq4V2XgmpqLC80mbzdYQbQqthXBGfFu_OYWEy9OXnsFen2_V33FmWv3NgPRfvX9Pi-Q_d5fPnCWwfQx9kzX2xUt7yBCH" }} />
<Text>{"+91"}</Text></View>
<View className="w-full bg-transparent border-none px-0 py-3 text-lg focus:ring-0 placeholder:text-on-surface/30 font-label"></View></View></View>
<View className="grid grid-cols-1 md:grid-cols-2 gap-8">
<View className="relative">
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider mb-2">{"Gotra"}</Text>
<View className="relative border-b-2 border-surface-container-highest custom-input-focus">
<View className="w-full bg-transparent border-none px-0 py-3 text-lg focus:ring-0 appearance-none font-label cursor-pointer">
<View>{"Select spiritual identity"}</View>
<View>{"Kashyap"}</View>
<View>{"Bharadwaj"}</View>
<View>{"Vatsa"}</View>
<View>{"Shandilya"}</View>
<View>{"Don't Know"}</View></View>
<Text className="material-symbols-outlined absolute right-0 top-3 pointer-events-none text-on-surface/40">{"expand_more"}</Text></View></View>
<View className="relative">
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider mb-2">{"Occupation"}</Text>
<View className="relative border-b-2 border-surface-container-highest custom-input-focus">
<View className="w-full bg-transparent border-none px-0 py-3 text-lg focus:ring-0 appearance-none font-label cursor-pointer">
<View>{"Select profession"}</View>
<View>{"Farmer"}</View>
<View>{"Business"}</View>
<View>{"Service"}</View>
<View>{"Retired"}</View>
<View>{"Student"}</View></View>
<Text className="material-symbols-outlined absolute right-0 top-3 pointer-events-none text-on-surface/40">{"expand_more"}</Text></View></View></View>
<View className="bg-surface-container-low p-6 rounded-2xl flex items-center justify-between border border-outline-variant/10">
<View>
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider">{"Family Members"}</Text>
<Text className="text-xs text-on-surface-variant">{"Including yourself"}</Text></View>
<View className="flex items-center gap-6">
<TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary active:scale-90 transition-transform">
<Text className="material-symbols-outlined">{"remove"}</Text></TouchableOpacity>
<Text className="font-headline font-bold text-2xl text-on-surface min-w-[1.5rem] text-center">{"1"}</Text>
<TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary active:scale-90 transition-transform">
<Text className="material-symbols-outlined">{"add"}</Text></TouchableOpacity></View></View>
<View className="relative">
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider mb-2">{"Village / Locality"}</Text>
<View className="relative border-b-2 border-surface-container-highest custom-input-focus">
<Text className="material-symbols-outlined absolute left-0 top-3 text-on-surface/40">{"location_on"}</Text>
<View className="w-full bg-transparent border-none pl-8 py-3 text-lg focus:ring-0 placeholder:text-on-surface/30 font-label"></View></View></View>
<View className="relative pt-4">
<Text className="block font-label font-semibold text-accent text-xs uppercase tracking-wider mb-4">{"Family Photo (Optional)"}</Text>
<View className="sacred-arch border-2 border-dashed border-outline-variant bg-surface-container-lowest h-40 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-surface-container-low transition-colors group">
<View className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary  transition-transform">
<Text className="material-symbols-outlined">{"photo_camera"}</Text></View>
<Text className="font-label text-sm text-on-surface-variant">{"Click to upload or capture"}</Text></View></View>
<View className="pt-8">
<TouchableOpacity className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-3 shadow-lg active:scale-[0.98] transition-all hover:brightness-110">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>{"Mandir mein Register ho jaao"}</TouchableOpacity></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-[64px] rounded-t-[24px] bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all duration-200">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all duration-200">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all duration-200">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all duration-200">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold active:scale-90 transition-transform duration-200 px-4 py-1">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Mera"}</Text></TouchableOpacity></View>
<View className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]">
<View className="absolute top-20 -right-20 transform rotate-12 scale-150">
<Text className="material-symbols-outlined text-[300px]">{"filter_vintage"}</Text></View>
<View className="absolute bottom-40 -left-20 transform -rotate-12 scale-150">
<Text className="material-symbols-outlined text-[300px]">{"temple_hindu"}</Text></View></View></View>
    </ScrollView>
  );
}
