import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LanguageSelection1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-background text-on-surface font-body flex-1 flex flex-col">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 flex items-center justify-center p-2">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-bold text-xl uppercase tracking-widest text-white dark:text-[#FAF9F6]">{"DIVYA"}</Text>
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 flex items-center justify-center p-2">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View>
<View className="flex-1 mt-[56px] px-6 py-12 flex flex-col max-w-md mx-auto w-full">
<View className="mb-12">
<Text className="font-headline font-bold text-3xl text-primary leading-tight mb-4">{"अपनी भाषा चुनें"}
<View></View>
<Text className="text-2xl font-normal opacity-90">{"Choose your language"}</Text></Text>
<Text className="text-on-surface-variant font-medium text-sm">{"Experience the divine in the language of your heart."}</Text></View>
<View className="grid grid-cols-2 gap-4 mb-24">
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border-2 border-primary bg-primary-container/10 text-primary font-bold shadow-sm active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"हिंदी"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"English"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"தமிழ்"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"తెలుగు"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"ಕನ್ನಡ"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"मराठी"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"বাংলা"}</Text></TouchableOpacity>
<TouchableOpacity className="h-[48px] px-6 flex items-center justify-center rounded-full border border-outline-variant hover:border-primary/50 text-on-surface-variant font-medium active:scale-95 transition-all">
<Text className="font-['Noto_Sans']">{"ગુજરાતી"}</Text></TouchableOpacity></View>
<View className="fixed bottom-32 right-0 opacity-[0.03] pointer-events-none select-none">
<Text className="material-symbols-outlined text-[240px]">{"ods"}</Text></View>
<View className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
<TouchableOpacity className="w-full h-[52px] saffron-gradient text-white font-headline font-bold text-lg rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">{"Continue"}
<Text className="material-symbols-outlined text-xl">{"arrow_forward"}</Text></TouchableOpacity></View></View></View>
    </ScrollView>
  );
}
