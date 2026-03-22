import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function PanditProfile2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface text-on-surface font-body">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<View className="flex items-center gap-4">
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 hover:opacity-80 transition-opacity">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text></View>
<View className="flex items-center">
<TouchableOpacity className="text-white/80 active:scale-95 duration-200 hover:opacity-80 transition-opacity">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View></View>
<View className="pt-[56px] pb-32">
<View className="relative w-full h-[360px]">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZA-IPlOOvEa8ve8TnHDgW8xvLFQRKXKkUki6wQVJMpVk1UlQC6Y8Tg-8nFuRYSblusqZKeHRBH3A1Qkviuh-9YxyPDvUhlGQSihc12y4bnFGFH1Hk10lXZrC-wTn_SEES34vTS2GxUeAaNQE7rFzwXXRZFHzWNkQghlNyo6PyvDi2pamDBN0oUmE4KJfw0Dz9SW9A4E1fUfKpv7tnej67Jul0j8jDSkcKCWCvnwkakgKJEW5qM3HbC47qdajvDG-r1z3VU58WfjkB" }} />
<View className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></View>
<View className="absolute bottom-6 left-6 flex items-center gap-2 bg-tertiary px-3 py-1.5 rounded-full shadow-lg">
<Text className="material-symbols-outlined text-[18px] text-white">{"verified"}</Text>
<Text className="text-white font-['Noto_Sans'] text-xs font-bold tracking-wider uppercase">{"Divya Verified"}</Text></View></View>
<View className="px-4 -mt-10 relative z-10">
<View className="bg-surface-container-lowest sacred-arch p-6 shadow-sm">
<View className="flex flex-col gap-1">
<Text className="font-headline font-bold text-3xl text-primary">{"Acharya Rahul Dev"}</Text>
<Text className="text-on-surface-variant font-medium">{"Vedic Scholar & Ritual Specialist"}</Text>
<View className="flex items-center gap-2 mt-2">
<Text className="material-symbols-outlined text-tertiary">{"location_on"}</Text>
<Text className="text-on-surface-variant text-sm">{"Varanasi, Uttar Pradesh"}</Text></View></View>
<View className="grid grid-cols-4 gap-2 mt-8">
<View className="flex flex-col items-center p-3 bg-surface-container-low rounded-xl">
<Text className="text-primary font-['Roboto_Mono'] font-bold text-lg">{"18"}</Text>
<Text className="text-[10px] text-on-surface-variant font-medium uppercase tracking-tight">{"Years Exp"}</Text></View>
<View className="flex flex-col items-center p-3 bg-surface-container-low rounded-xl">
<Text className="text-primary font-['Roboto_Mono'] font-bold text-lg">{"2.4k"}</Text>
<Text className="text-[10px] text-on-surface-variant font-medium uppercase tracking-tight">{"Pujas"}</Text></View>
<View className="flex flex-col items-center p-3 bg-surface-container-low rounded-xl">
<View className="flex items-center text-primary">
<Text className="font-['Roboto_Mono'] font-bold text-lg leading-none">{"4.8"}</Text>
<Text className="material-symbols-outlined text-[14px]">{"star"}</Text></View>
<Text className="text-[10px] text-on-surface-variant font-medium uppercase tracking-tight">{"Rating"}</Text></View>
<View className="flex flex-col items-center p-3 bg-surface-container-low rounded-xl">
<Text className="text-primary font-['Noto_Sans'] font-bold text-sm">{"H, S, E"}</Text>
<Text className="text-[10px] text-on-surface-variant font-medium uppercase tracking-tight">{"Langs"}</Text></View></View></View></View>
<View className="px-6 mt-12">
<View className="flex flex-col gap-4">
<View className="flex items-baseline gap-4">
<Text className="font-headline text-2xl font-bold">{"About Acharya Ji"}</Text>
<View className="h-[2px] flex-1 bg-surface-container-highest"></View></View>
<Text className="text-on-surface-variant leading-relaxed font-['Noto_Sans']">{"A graduate of Sampurnanand Sanskrit Vishwavidyalaya, Acharya Rahul Dev has been practicing Vedic rituals for over 18 years. He specializes in intricate Karmakanda procedures and is known for his clarity in explaining shlokas to devotees during the ceremony."}</Text></View></View>
<View className="px-6 mt-12">
<Text className="font-headline text-2xl font-bold mb-6">{"Specializations"}</Text>
<View className="grid grid-cols-2 gap-4">
<View className="aspect-square bg-surface-container-high rounded-3xl p-5 flex flex-col justify-between">
<Text className="material-symbols-outlined text-primary text-3xl">{"temple_hindu"}</Text>
<Text className="font-bold text-lg leading-tight">{"Satyanarayan Katha"}</Text></View>
<View className="aspect-square bg-secondary-container/10 rounded-3xl p-5 flex flex-col justify-between border border-secondary/10">
<Text className="material-symbols-outlined text-primary text-3xl">{"fireplace"}</Text>
<Text className="font-bold text-lg leading-tight">{"Maha Mrityunjaya"}</Text></View>
<View className="col-span-2 bg-tertiary-fixed/30 rounded-3xl p-6 flex items-center justify-between">
<View>
<Text className="material-symbols-outlined text-tertiary text-3xl">{"home"}</Text>
<Text className="font-bold text-xl mt-2">{"Griha Pravesh"}</Text>
<Text className="text-sm text-on-tertiary-fixed-variant">{"Traditional house warming rituals"}</Text></View>
<Text className="material-symbols-outlined text-tertiary text-4xl opacity-20">{"ods"}</Text></View>
<View className="bg-surface-container-high rounded-3xl p-5">
<Text className="material-symbols-outlined text-primary text-3xl">{"auto_awesome"}</Text>
<Text className="block font-bold mt-4">{"Vivah Sanskar"}</Text></View>
<View className="bg-surface-container-high rounded-3xl p-5">
<Text className="material-symbols-outlined text-primary text-3xl">{"child_care"}</Text>
<Text className="block font-bold mt-4">{"Namkaran"}</Text></View></View></View>
<View className="px-6 mt-12 mb-10">
<View className="flex justify-between items-center mb-6">
<Text className="font-headline text-2xl font-bold">{"Reviews"}</Text>
<TouchableOpacity className="text-primary font-bold text-sm">{"View All"}</TouchableOpacity></View>
<View className="flex flex-col gap-6">
<View className="bg-surface-container-low p-5 rounded-2xl relative">
<View className="flex items-center gap-3 mb-3">
<View className="w-10 h-10 rounded-full bg-outline-variant/30">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6GwHo1BxJ7agpq5PhKOU6HFjGpxQ9jtTsVhyDPVjAy8BDWdNgnDB9QuEUso--JHq99B4jg7zXr36_l5p45HJ5NdDkydDx8EWieA3GHbYV5r__epIZZ_eEGR23gfxa7zw21tQMkgyPxJBZUT2oYkiDriQLkSQnl6FfnWeHIep8aSxnEdp67dwTqS3KP03ewJvm73_3o2u0mhQ16_who-xT66J7LPAIvBKJHQd1dubgpjoxbAplwnte2M_Z2yJWJKhZfN470kunywm4" }} /></View>
<View>
<Text className="font-bold text-sm">{"Sunita Sharma"}</Text>
<View className="flex text-tertiary">
<Text className="material-symbols-outlined text-xs">{"star"}</Text>
<Text className="material-symbols-outlined text-xs">{"star"}</Text>
<Text className="material-symbols-outlined text-xs">{"star"}</Text>
<Text className="material-symbols-outlined text-xs">{"star"}</Text>
<Text className="material-symbols-outlined text-xs">{"star"}</Text></View></View></View>
<Text className="text-sm text-on-surface-variant italic leading-relaxed">{"\"Acharya Ji conducted our Griha Pravesh with such devotion. He explained every ritual so clearly. Truly blessed to have found him.\""}</Text></View></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 bg-[#FAF9F6]/90 backdrop-blur-xl h-24 px-6 flex items-center justify-between shadow-[0_-4px_40px_rgba(26,28,26,0.06)] rounded-t-[24px]">
<View className="flex flex-col">
<Text className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{"Dakshina starting at"}</Text>
<View className="flex items-baseline gap-1">
<Text className="font-['Roboto_Mono'] text-2xl font-bold text-primary">{"₹2,100"}</Text></View></View>
<TouchableOpacity className="saffron-glow text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 active:scale-95 transition-transform duration-200">
<Text>{"Book karo"}</Text>
<Text className="material-symbols-outlined text-lg">{"arrow_forward"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
