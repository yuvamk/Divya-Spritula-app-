import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function PanditHomeDashboard2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface text-on-surface font-body">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px] shadow-none">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/80 hover:opacity-80 transition-opacity active:scale-95 duration-200 cursor-pointer">{"arrow_back"}</Text>
<Text className="font-['Noto_Serif'] font-black text-xl uppercase tracking-widest text-white dark:text-[#FAF9F6]">{"DIVYA"}</Text></View>
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/80 hover:opacity-80 transition-opacity active:scale-95 duration-200 cursor-pointer">{"notifications"}</Text></View></View>
<View className="pt-[56px] pb-24">
<View className="relative bg-primary px-6 pt-10 pb-20 text-on-primary">
<View className="absolute inset-0 rangoli-pattern pointer-events-none"></View>
<View className="relative z-10">
<Text className="font-headline text-lg opacity-90 italic">{"Jai Shri Ram, Pandit ji"}</Text>
<Text className="font-headline text-3xl font-bold mt-1 tracking-tight">{"Kashi Vishwanath Temple"}</Text>
<View className="mt-2 flex items-center gap-2 text-primary-fixed text-sm font-medium">
<Text className="material-symbols-outlined text-sm">{"location_on"}</Text>{"Varanasi Sector"}</View></View></View>
<View className="px-4 -mt-12 relative z-20">
<View className="grid grid-cols-2 gap-4">
<TouchableOpacity className="bg-surface-container-lowest p-5 sacred-arch shadow-[0_-4px_40px_rgba(26,28,26,0.06)] flex flex-col justify-between h-40 active:scale-95 transition-transform">
<View className="flex justify-between items-start">
<Text className="material-symbols-outlined text-tertiary">{"groups"}</Text>
<Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60">{"Devotees"}</Text></View>
<View>
<View className="text-3xl font-headline font-black text-tertiary">{"1,284"}</View>
<Text className="text-xs text-on-surface-variant font-medium mt-1">{"Registered members"}</Text></View></TouchableOpacity>
<View className="bg-surface-container-lowest p-5 sacred-arch shadow-[0_-4px_40px_rgba(26,28,26,0.06)] flex flex-col justify-between h-40 mt-4">
<View className="flex justify-between items-start">
<Text className="material-symbols-outlined text-primary">{"currency_rupee"}</Text>
<Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60">{"Donations"}</Text></View>
<View>
<View className="text-3xl font-['Roboto_Mono'] font-bold text-on-surface tracking-tighter">{"₹8,450"}</View>
<Text className="text-xs text-on-surface-variant font-medium mt-1">{"Today's collection"}</Text></View></View>
<View className="bg-surface-container-lowest p-5 sacred-arch shadow-[0_-4px_40px_rgba(26,28,26,0.06)] flex flex-col justify-between h-40 -mt-4">
<View className="flex justify-between items-start">
<Text className="material-symbols-outlined text-secondary-container">{"calendar_month"}</Text>
<View className="h-2 w-2 rounded-full bg-error animate-pulse"></View></View>
<View>
<View className="text-3xl font-headline font-black text-on-surface">{"12"}</View>
<Text className="text-xs text-on-surface-variant font-medium mt-1">{"Pending Puja Orders"}</Text></View></View>
<View className="bg-surface-container-lowest p-5 sacred-arch shadow-[0_-4px_40px_rgba(26,28,26,0.06)] flex flex-col justify-between h-40">
<View className="flex justify-between items-start">
<Text className="material-symbols-outlined text-accent text-[#BA7517]">{"volunteer_activism"}</Text>
<Text className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant/60">{"Drives"}</Text></View>
<View>
<View className="text-3xl font-headline font-black text-on-surface">{"04"}</View>
<Text className="text-xs text-on-surface-variant font-medium mt-1">{"Active Drives"}</Text></View></View></View></View>
<View className="mt-12 px-6">
<View className="flex justify-between items-baseline mb-6">
<Text className="font-headline text-2xl font-bold text-on-surface">{"Community at a Glance"}</Text>
<TouchableOpacity className="text-primary text-sm font-bold">{"View All"}</TouchableOpacity></View>
<View className="bg-surface-container-low rounded-[32px] p-2">
<View className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-[24px] mb-2">
<View className="flex items-center gap-4">
<View className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center  border-2 border-surface">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-GA5DPb-eR-sftmDOS1TLnox_eRXuy13zG6XgXAR226ZdBaziZcDSsN850cQgtMO50CYEuvg_Dm82Qu6i8m8yJudFlyZ_avgsIuqe7qGilXSKcR36S8a_RrGGvpUg-ZYSRRWP2B_uxb3k97KxJd3CJe44pebK-KXab8hnCUYmXQuNQI9GXf16ivBmOuAyB9eh-QSQa7RRLRZ6k2FFsZurZ9bbYPfWcO4RInEbi_Q5jPdHzJyQ8wf4Tcm8FGeRXZMJJaJECTVhsTFb" }} /></View>
<View>
<Text className="font-bold text-on-surface">{"Rajesh Sharma"}</Text>
<Text className="text-xs text-on-surface-variant">{"Family size: 4 members"}</Text></View></View>
<Text className="text-[10px] font-mono text-on-surface-variant/60">{"2m ago"}</Text></View>
<View className="flex items-center justify-between p-4 hover:bg-surface-container-highest transition-colors rounded-[24px] mb-2">
<View className="flex items-center gap-4">
<View className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center  border-2 border-surface">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsMSoutdLLzOTfJBNE7XXbU3a8lqwzgXo_CQQAXqhaXBYVemZ418wL6Ipv3N0LAy0smo5loo4Dehnk3AIt8x7R2JdN6-O4MNH05y4q-YIYOBTkpITbA0qW5IssB2-cV6MjBNZVziFdGVakx1zK3MxDpmJ2dG9zqF5PmG7wMjUSvbkKJGc9TWqGVwCPgluRdAjum8J0mR8jbcXYObDxo8JwtWST0pGHcxd3lr14hNBSXyFkfgBstfNl4dakfFzqNfwCPwm6gVKNZ7oB" }} /></View>
<View>
<Text className="font-bold text-on-surface">{"Priya Mishra"}</Text>
<Text className="text-xs text-on-surface-variant">{"Family size: 2 members"}</Text></View></View>
<Text className="text-[10px] font-mono text-on-surface-variant/60">{"15m ago"}</Text></View>
<View className="flex items-center justify-between p-4 hover:bg-surface-container-highest transition-colors rounded-[24px] mb-2">
<View className="flex items-center gap-4">
<View className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center  border-2 border-surface">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_FAmFeM2-xlHsRuh17lidfcOw-lx0D3C4hpxmrmM2Nr3yMA7NNkHGibJaVFm7dYw37j0tiPOkGYC9Fvr52S2ChvL7-emc9yKR9Yv6nnJGmJgvPGIeYeSnT260fvbjCAmK0RJH7MSJmIWyfCSaLBfkuhbGDSGQVc2i58ROWbvknT9sg-KWfVq07GG3Nss2zBNz0KqYQlO0adQEdYo2nOgseYc99aSh6Kl81YHmNHM66ZHQatwiM94SW6kKdUvCp0mbPI_f0tNSgkQE" }} /></View>
<View>
<Text className="font-bold text-on-surface">{"Amit Gupta"}</Text>
<Text className="text-xs text-on-surface-variant">{"Family size: 5 members"}</Text></View></View>
<Text className="text-[10px] font-mono text-on-surface-variant/60">{"1h ago"}</Text></View>
<View className="flex items-center justify-between p-4 hover:bg-surface-container-highest transition-colors rounded-[24px] mb-2">
<View className="flex items-center gap-4">
<View className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center  border-2 border-surface">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxz5At_ShqbmVu_HK3WVmpgDXRZvZv1MsdzoGL4qwKcegvQm2IgrodNSimj1r0UH9hq_pTXVbrn51GXnn5u3y_usOCuNxW3haYrE0_0c_5FOENf-lG7JBS2lK0tsuZuTD6bORpC7Bw8NHMUVIcmf6OofO9HSOD5-xuI9egQwegeUc7gBIdX0e5cI00vfjHv8aM3T3GEqVMAPovCFb5wgDyGZwMbadyEeqmZfumANDcdGGiUw37deXqKqYf3elBub83JuzZMsfmcL6a" }} /></View>
<View>
<Text className="font-bold text-on-surface">{"Sunita Devi"}</Text>
<Text className="text-xs text-on-surface-variant">{"Family size: 3 members"}</Text></View></View>
<Text className="text-[10px] font-mono text-on-surface-variant/60">{"3h ago"}</Text></View></View></View>
<View className="mt-12 px-6 mb-12">
<Text className="font-headline text-2xl font-bold text-on-surface mb-6">{"Active Donation Drives"}</Text>
<View className="bg-surface-container-low rounded-[32px] p-6 mb-6">
<View className="flex justify-between items-start mb-4">
<View>
<Text className="font-headline text-xl font-bold text-on-surface">{"Temple Shikhara Renovation"}</Text>
<Text className="text-sm text-on-surface-variant mt-1">{"Goal: ₹5,00,000"}</Text></View>
<View className="bg-tertiary-container text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">{"Urgent"}</View></View>
<View className="flex justify-between text-xs font-bold text-primary mb-2">
<Text>{"₹3,42,000 Collected"}</Text>
<Text>{"68%"}</Text></View>
<View className="h-3 w-full bg-surface-container-highest rounded-full  mb-6">
<View className="h-full bg-secondary-container rounded-full"></View></View>
<View className="grid grid-cols-2 gap-3">
<TouchableOpacity className="flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary/20 transition-all">
<Text className="material-symbols-outlined text-sm">{"edit"}</Text>{"Edit"}</TouchableOpacity>
<TouchableOpacity className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold text-sm ember-gradient shadow-lg active:scale-95 transition-all">
<Text className="material-symbols-outlined text-sm">{"qr_code_2"}</Text>{"Share QR"}</TouchableOpacity></View></View>
<View className="bg-surface-container-low rounded-[32px] p-6">
<View className="flex justify-between items-start mb-4">
<View>
<Text className="font-headline text-xl font-bold text-on-surface">{"Annadaan Seva Fund"}</Text>
<Text className="text-sm text-on-surface-variant mt-1">{"Goal: ₹1,00,000"}</Text></View></View>
<View className="flex justify-between text-xs font-bold text-primary mb-2">
<Text>{"₹89,500 Collected"}</Text>
<Text>{"90%"}</Text></View>
<View className="h-3 w-full bg-surface-container-highest rounded-full  mb-6">
<View className="h-full bg-secondary-container rounded-full"></View></View>
<View className="grid grid-cols-2 gap-3">
<TouchableOpacity className="flex items-center justify-center gap-2 bg-primary/10 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary/20 transition-all">
<Text className="material-symbols-outlined text-sm">{"edit"}</Text>{"Edit"}</TouchableOpacity>
<TouchableOpacity className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold text-sm ember-gradient shadow-lg active:scale-95 transition-all">
<Text className="material-symbols-outlined text-sm">{"qr_code_2"}</Text>{"Share QR"}</TouchableOpacity></View></View></View></View>
<View className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">
<View className="flex flex-col items-end gap-2 group">
<TouchableOpacity className="bg-surface-container-highest text-on-surface-variant flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold">{"Sandesh"}
<Text className="material-symbols-outlined text-sm">{"send"}</Text></TouchableOpacity>
<TouchableOpacity className="bg-surface-container-highest text-on-surface-variant flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold">{"Puja Book"}
<Text className="material-symbols-outlined text-sm">{"menu_book"}</Text></TouchableOpacity>
<TouchableOpacity className="bg-surface-container-highest text-on-surface-variant flex items-center gap-2 px-4 py-2 rounded-full shadow-lg text-xs font-bold">{"Naya Drive"}
<Text className="material-symbols-outlined text-sm">{"add_circle"}</Text></TouchableOpacity>
<TouchableOpacity className="w-14 h-14 ember-gradient text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform">
<Text className="material-symbols-outlined text-3xl">{"add"}</Text></TouchableOpacity></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 font-medium hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Mandir"}</Text></View>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 font-medium hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Seva"}</Text></TouchableOpacity>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 font-medium hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Puja"}</Text></View>
<View className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 font-medium hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Khojo"}</Text></View>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
