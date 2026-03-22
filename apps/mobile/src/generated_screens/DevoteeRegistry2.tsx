import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DevoteeRegistry2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface font-body text-on-surface flex-1 pb-24">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px]">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/80 active:scale-95 transition-transform duration-200 cursor-pointer">{"arrow_back"}</Text>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text></View>
<View className="flex items-center">
<Text className="material-symbols-outlined text-white/80 active:scale-95 transition-transform duration-200 cursor-pointer">{"notifications"}</Text></View></View>
<View className="pt-[56px] px-4 max-w-2xl mx-auto">
<View className="mt-8 mb-6">
<View className="flex justify-between items-end mb-6">
<View>
<Text className="text-on-surface-variant font-medium text-sm tracking-wide mb-1">{"Devotee Registry"}</Text>
<Text className="font-headline font-bold text-3xl text-primary">{"342 Devotees"}</Text></View>
<View className="bg-surface-container-highest p-2 rounded-xl">
<Text className="material-symbols-outlined text-primary">{"person_add"}</Text></View></View>
<View className="relative group">
<View className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<Text className="material-symbols-outlined text-on-surface-variant">{"search"}</Text></View>
<View className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl focus:ring-2 focus:ring-tertiary transition-all placeholder:text-on-surface-variant/60 font-medium"></View></View>
<View className="flex gap-2 mt-4 overflow-x-auto hide-scrollbar py-1">
<TouchableOpacity className="px-5 py-2 sacred-gradient text-white rounded-full text-sm font-semibold whitespace-nowrap shadow-sm">{"All"}</TouchableOpacity>
<TouchableOpacity className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap border-none">{"New"}</TouchableOpacity>
<TouchableOpacity className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap border-none">{"Donated"}</TouchableOpacity>
<TouchableOpacity className="px-5 py-2 bg-surface-container-highest text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap border-none">{"Family 5+"}</TouchableOpacity></View></View>
<View className="space-y-3">
<View className="flex items-center justify-between h-[72px] bg-surface-container-lowest p-3 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<View className="flex items-center gap-3">
<View className="relative">
<View className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2-EAOub-AwroomhCXRj3o69LQBvy6oMSCsiLTyVnANNtvO8LrMAYV8dUPqpvWdx4NiW_1RGqwsuVqHzb0aeaFIkMVG8q1JpMyclRoSMPIf8_mgkpnXCoFRHciJ_a28wufmLlvKaaKLNHPhczNHc_g5a0gXdWFg2vMqr0NrUnYzd-acLIRHnYOn2ukmQNd-dUUqje3q8OO7eTTQ90jgSxwC1Qqo0PnaM-xI8MTE2ed6D8sAAV7KxC5H3S4nqdB-e2r8Be2wemJS014" }} /></View>
<Text className="absolute -bottom-1 -right-1 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">{"4"}</Text></View>
<View>
<Text className="font-bold text-on-surface leading-tight">{"Rajesh Sharma"}</Text>
<Text className="text-xs text-on-surface-variant font-medium">{"Merchant • Assi Ghat"}</Text></View></View>
<View className="flex items-center gap-4">
<View className="text-right">
<View className="flex items-center gap-1 text-tertiary font-['Roboto_Mono'] font-bold text-sm">
<Text className="material-symbols-outlined text-xs">{"fireplace"}</Text>{"₹501"}</View>
<Text className="text-[10px] text-on-surface-variant/70 uppercase tracking-tighter">{"Last Donated"}</Text></View>
<TouchableOpacity className="text-on-surface-variant  transition-colors">
<Text className="material-symbols-outlined">{"more_vert"}</Text></TouchableOpacity></View></View>
<View className="flex items-center justify-between h-[72px] bg-surface-container-lowest p-3 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<View className="flex items-center gap-3">
<View className="relative">
<View className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_UpjFVey7DQR34k8De4jwhsyvFSQhe6853N-1Serl8PVO884iiAKeK0uIrHBcRwT6UzXhQjtwbHEwD5U7s3_-h-DulQp0VBCX0hbscYUarQJEJozvQ4fvSoxqWwu2BjHbH_vzI6qlMewekhCHiQakcc4FkY1a3Y3-DWP7Cqfu5axyEcB2dhYjChi2-VOA-A8sy7FWGCq-9HYVFIx6fbYvAGwh9z59iSBGgTack1a33oHG2FbYHelsVEZuPJSyn8r1wAJ9OUt4I0Xh" }} /></View>
<Text className="absolute -bottom-1 -right-1 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">{"6"}</Text></View>
<View>
<Text className="font-bold text-on-surface leading-tight">{"Meera Devi"}</Text>
<Text className="text-xs text-on-surface-variant font-medium">{"Teacher • Lanka Sector"}</Text></View></View>
<View className="flex items-center gap-4">
<View className="text-right">
<View className="flex items-center gap-1 text-tertiary font-['Roboto_Mono'] font-bold text-sm">
<Text className="material-symbols-outlined text-xs">{"fireplace"}</Text>{"₹1,101"}</View>
<Text className="text-[10px] text-on-surface-variant/70 uppercase tracking-tighter">{"Last Donated"}</Text></View>
<TouchableOpacity className="text-on-surface-variant  transition-colors">
<Text className="material-symbols-outlined">{"more_vert"}</Text></TouchableOpacity></View></View>
<View className="flex items-center justify-between h-[72px] bg-surface-container-lowest p-3 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<View className="flex items-center gap-3">
<View className="relative">
<View className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxIZwCGpblNHHfh8lJUydkm42jbmLgp57yxGH1rZFHa2P8jVTmwv5gme8sumpwhXliD3Emo7KU8xSYl1oA0S81vMzuFawQzaOhGj_xkG8i8MO7KqYRNZiCuPK4YQffujw5iNtqkJCXbNcs8bZx5oDNDKR26H19bhKyY3As86DAU4DkyewIYJFAJ4fmMq6XOmpKVZZ16de5C3t5feB_wB6iBr9PTiSpRpTjgqwEajF6ljUA8mfEfqqsYRP-xZvCque9pxQDS4jMO9zN" }} /></View>
<Text className="absolute -bottom-1 -right-1 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">{"2"}</Text></View>
<View>
<Text className="font-bold text-on-surface leading-tight">{"Amit Pathak"}</Text>
<Text className="text-xs text-on-surface-variant font-medium">{"Engineer • BHU Campus"}</Text></View></View>
<View className="flex items-center gap-4">
<View className="text-right">
<View className="flex items-center gap-1 text-tertiary font-['Roboto_Mono'] font-bold text-sm">
<Text className="material-symbols-outlined text-xs">{"fireplace"}</Text>{"₹251"}</View>
<Text className="text-[10px] text-on-surface-variant/70 uppercase tracking-tighter">{"Last Donated"}</Text></View>
<TouchableOpacity className="text-on-surface-variant  transition-colors">
<Text className="material-symbols-outlined">{"more_vert"}</Text></TouchableOpacity></View></View>
<View className="flex items-center justify-between h-[72px] bg-surface-container-lowest p-3 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<View className="flex items-center gap-3">
<View className="relative">
<View className="w-12 h-12 rounded-full bg-secondary-fixed-dim flex items-center justify-center">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjN0Jlqd14vh-vtk46f3fDCmSALbGLZpCV5SAOSP4GNH6aPqcFI00PxR13Zi-TFriGmhW4gqWgs9NVIvISM2R8EImObgFroEWDmLP8p1QndoyP0cgR_a6pVm2JsWUIu0SlEInuFqYqh4HujWeJHXm1lb-5YMKhTqtlFMAvcvkjFe_76n1t5TSqxVwb31QJjF12dxRu0rxMQS8U-IVlAexmWN0gVGZmpSWUfD0bhE9cRkcJyMb3l2zaIL29QYy_n4PRamubTgpvTet" }} /></View>
<Text className="absolute -bottom-1 -right-1 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">{"5"}</Text></View>
<View>
<Text className="font-bold text-on-surface leading-tight">{"Sunita Yadav"}</Text>
<Text className="text-xs text-on-surface-variant font-medium">{"Homemaker • Godowlia"}</Text></View></View>
<View className="flex items-center gap-4">
<View className="text-right">
<View className="flex items-center gap-1 text-tertiary font-['Roboto_Mono'] font-bold text-sm">
<Text className="material-symbols-outlined text-xs">{"fireplace"}</Text>{"₹501"}</View>
<Text className="text-[10px] text-on-surface-variant/70 uppercase tracking-tighter">{"Last Donated"}</Text></View>
<TouchableOpacity className="text-on-surface-variant  transition-colors">
<Text className="material-symbols-outlined">{"more_vert"}</Text></TouchableOpacity></View></View>
<View className="flex items-center justify-between h-[72px] bg-surface-container-lowest p-3 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer group">
<View className="flex items-center gap-3">
<View className="relative">
<View className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center">
<Image className="w-full h-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3LaMeBUdD3lC0WYvQ9JDeer3xylNhjQSJ0R2IF_thN7_d3Fdfu2LC3Cq-MNHXiZoL7rc_Fi_nTfbpkXzL34aYP4s1GHlQgeREtlj1t4Ka6rC5GCjGOUCaLA0MJve-krrVenYPvoexvBYksV2OSg3LA6xJjMmBbgyHpbpenosmEmxkPuuemOYXyZvSPnx1g_3S9H0vSHG5erGU7g-szQvOgHR7zWim_K8RWpIn-4Ak9_YboUr__zvb3UzjVopK3A_IRriP_82xi6Oc" }} /></View>
<Text className="absolute -bottom-1 -right-1 bg-tertiary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">{"8"}</Text></View>
<View>
<Text className="font-bold text-on-surface leading-tight">{"Vijay Kapoor"}</Text>
<Text className="text-xs text-on-surface-variant font-medium">{"Business • Dashashwamedh"}</Text></View></View>
<View className="flex items-center gap-4">
<View className="text-right">
<View className="flex items-center gap-1 text-tertiary font-['Roboto_Mono'] font-bold text-sm">
<Text className="material-symbols-outlined text-xs">{"fireplace"}</Text>{"₹2,501"}</View>
<Text className="text-[10px] text-on-surface-variant/70 uppercase tracking-tighter">{"Last Donated"}</Text></View>
<TouchableOpacity className="text-on-surface-variant  transition-colors">
<Text className="material-symbols-outlined">{"more_vert"}</Text></TouchableOpacity></View></View></View>
<View className="mt-8 flex justify-center">
<TouchableOpacity className="text-primary font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity">{"LOAD MORE REGISTRATIONS"}
<Text className="material-symbols-outlined text-sm">{"expand_more"}</Text></TouchableOpacity></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all active:scale-90 duration-200">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all active:scale-90 duration-200">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all active:scale-90 duration-200">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all active:scale-90 duration-200">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold px-4 py-1 active:scale-90 duration-200">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px]">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
