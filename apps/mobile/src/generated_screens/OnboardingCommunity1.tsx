import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function OnboardingCommunity1() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface font-body text-on-surface flex-1 flex flex-col rangoli-pattern">
<View className="fixed top-0 left-0 w-full z-50 flex justify-end items-center px-6 py-4">
<TouchableOpacity className="text-on-surface/60 font-label font-medium text-sm hover:text-primary transition-colors tracking-wide">{"Skip"}</TouchableOpacity></View>
<View className="flex-grow flex flex-col">
<View className="h-[442px] w-full relative flex items-center justify-center pt-8">
<View className="absolute inset-0 bg-primary/5 rounded-b-[40px] -z-10"></View>
<View className="absolute w-[320px] h-[320px] border border-tertiary/10 rounded-full animate-pulse opacity-20"></View>
<View className="relative z-10 w-full max-w-sm px-8">
<View className="aspect-square w-full rounded-[32px]  bg-surface-container-low flex items-center justify-center shadow-sm">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6c5uqv2ybzmJ_FR04NxdVF8l0FIW3oBkTIYP1z4v4fPoFVY3FeFnuDwcUdK2XYVwuKDyvLBQ-6BFFdjMgDij25fHuF1r6iNe-5CoEAcfkcAyo8vI-KyGkjBglvJS8KBjSHESZ2Dy6MvfIJyaqqf4lvHM8YFRrpWwJOO6gXHm0FPw-1SH9ifwAUaw1g3LzjJOHGAewHRx28IiEYgurGD75gBfcHPqh4e8Mp-qDnUdJdRBMPuIhrMd4ZAvk7-l3yhAYb3j1O4THoAp0" }} /></View>
<View className="absolute -bottom-4 -right-4 bg-surface p-3 rounded-2xl shadow-lg border border-outline-variant/10">
<Text className="material-symbols-outlined text-tertiary text-3xl">{"groups"}</Text></View></View></View>
<View className="flex-grow flex flex-col items-center text-center px-8 pt-12 pb-24">
<Text className="font-headline font-bold text-3xl text-primary tracking-tight leading-tight mb-4">{"Apne Mandir se Judein"}</Text>
<Text className="font-label text-on-surface/70 text-base leading-relaxed max-w-xs">{"Scan the QR at your local mandir and instantly join your temple community"}</Text>
<View className="mt-auto w-full flex flex-col items-center gap-10">
<View className="flex items-center gap-3">
<View className="w-8 h-2 rounded-full saffron-gradient"></View>
<View className="w-2 h-2 rounded-full bg-surface-container-highest"></View>
<View className="w-2 h-2 rounded-full bg-surface-container-highest"></View></View>
<TouchableOpacity className="w-full max-w-xs h-14 saffron-gradient text-on-primary font-label font-semibold text-lg rounded-xl shadow-[0_8px_24px_rgba(171,46,21,0.25)] active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2">{"Next"}
<Text className="material-symbols-outlined text-xl">{"arrow_forward"}</Text></TouchableOpacity></View></View></View></View>
    </ScrollView>
  );
}
