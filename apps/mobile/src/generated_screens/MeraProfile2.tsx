import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function MeraProfile2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-surface text-on-surface flex-1 pb-24">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#AB2E15] dark:bg-[#0F0D1A] h-[56px]">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/80 cursor-pointer">{"arrow_back"}</Text>
<Text className="font-['Noto_Serif'] font-black text-white dark:text-[#FAF9F6] text-xl uppercase tracking-widest">{"DIVYA"}</Text></View>
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-white/80">{"notifications"}</Text></View></View>
<View className="pt-20 px-4 max-w-2xl mx-auto space-y-8">
<View className="flex flex-col items-center text-center space-y-4">
<View className="relative">
<View className="w-32 h-32 rounded-full border-4 border-tertiary/20 p-1">
<Image className="w-full h-full object-cover rounded-full" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlu2uqG-2TizTc2TZQSYGXrMCGTsde38sgHgey40538RNEzm_-kP6e-WLD1-foEgOMVzaUxgrtJbqV8yZQEY374D8gifvQJE-Et83I3-b2xXPVo4mE1qMiW-E1W5GTnKbUJcNtC_iClcKurT5-9mZiUuwlhlGZrySKswNqHaT4wD6I6L6oapLT2w8qrg0W_p7-8JMPRjdZqHTkycfDmvIrldBjEMSgbpOBizwGexbebbMAj1nVtlw38cJi4C2uh9UUpQlSq-987rzq" }} /></View>
<View className="absolute bottom-1 right-1 bg-tertiary text-white p-1.5 rounded-full shadow-lg">
<Text className="material-symbols-outlined text-sm">{"verified"}</Text></View></View>
<View>
<Text className="text-3xl font-bold text-on-surface">{"Aditya Sharma"}</Text>
<Text className="text-on-surface-variant font-medium text-sm">{"Member since Oct 2021"}</Text></View></View>
<View className="grid grid-cols-2 gap-4">
<View className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between items-start transition-all hover:bg-surface-container-high">
<Text className="material-symbols-outlined text-tertiary mb-2">{"volunteer_activism"}</Text>
<View>
<Text className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant">{"Total Donated"}</Text>
<Text className="text-2xl font-bold text-tertiary mono">{"₹12,450"}</Text></View></View>
<View className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between items-start transition-all hover:bg-surface-container-high">
<Text className="material-symbols-outlined text-primary mb-2">{"auto_stories"}</Text>
<View>
<Text className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant">{"Pujas Booked"}</Text>
<Text className="text-2xl font-bold text-primary">{"08"}</Text></View></View></View>
<View className="space-y-4">
<Text className="text-xl font-bold px-1">{"My Temple"}</Text>
<View className="sacred-arch bg-surface-container-lowest shadow-sm  group">
<View className="h-32 w-full relative">
<Image className="w-full h-full object-cover  transition-transform duration-700" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCXDbNbGzM9c7xCQM_UPiHZlV631aN8rDPu45TAJsS3DwqDdrXsK1hDanCZOciP3fpb0wX48RKgWgV3QFfQCwgZN7j2jj3j2eaK2C7Fty4ymF1hKYAN0YppL8IDna7oliKfodXqgZi84iiAIyrngZpladH0qpkjjYkgenvyKzGDmSVTEUW6z4V4PBoJxAfWoRyn7as07nbcbDcCq1OA6CSL9ZzSI0gt63TLxhKzH_BsTY9VGTnoI7YLNhNsZneyXQ58ZXABWbjuEin" }} />
<View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></View>
<View className="absolute bottom-4 left-6">
<Text className="text-white text-xs font-bold bg-tertiary px-2 py-1 rounded-full uppercase tracking-tighter">{"Primary Sanctum"}</Text></View></View>
<View className="p-6 space-y-4">
<View className="flex justify-between items-start">
<View>
<Text className="text-lg font-bold">{"Kashi Vishwanath Mandir"}</Text>
<Text className="text-sm text-on-surface-variant">{"Varanasi, Uttar Pradesh"}</Text></View>
<TouchableOpacity className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<Text className="material-symbols-outlined">{"directions"}</Text></TouchableOpacity></View>
<TouchableOpacity className="pt-4 border-t border-outline-variant/20 flex items-center gap-4 transition-opacity hover:opacity-80">
<Image className="w-12 h-12 rounded-full object-cover" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3eQq-2QFc4CMirEtpESD61z7AQdcdwxTLZd-3AGlQWrHlDVbzmu2ONxpS1tD34XGQYRstHc5tcL3fTe8zlHDcfKVgi2MaCSymtM0oCiCz7HcNXm3gL8IhFffnChM2c653WnpnqHZFsTGAZ8xUcbQ0k8-OevBKRWV_0U0cDAuYSTHvvFVMM99dahbNlHUPbCHfTlb28i4UoKuCu2DqrotmoyiFQvWZdO6GRqQhYM4zOicbrgep2DxsufhU2Fyu2s_DqM22TlbprM2P" }} />
<View className="flex-1">
<Text className="text-xs font-bold text-on-surface-variant">{"Assigned Pandit"}</Text>
<Text className="text-sm font-semibold">{"Acharya Rajesh Shastri"}</Text></View>
<View className="ember-gradient text-white p-2 rounded-lg flex items-center justify-center shadow-md active:scale-95 transition-transform">
<Text className="material-symbols-outlined text-xl">{"call"}</Text></View></TouchableOpacity></View></View></View>
<View className="space-y-4">
<View className="flex justify-between items-end px-1">
<Text className="text-xl font-bold">{"Puja History"}</Text>
<TouchableOpacity className="text-primary text-sm font-bold">{"View All"}</TouchableOpacity></View>
<View className="space-y-3">
<View className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl transition-colors hover:bg-surface-container-high">
<View className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary">
<Text className="material-symbols-outlined">{"fireplace"}</Text></View>
<View className="flex-1">
<Text className="font-bold text-sm">{"Maha Mrityunjaya Jaap"}</Text>
<Text className="text-xs text-on-surface-variant">{"14 Oct, 2023 • 09:00 AM"}</Text></View>
<Text className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">{"Completed"}</Text></View>
<View className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl transition-colors hover:bg-surface-container-high">
<View className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
<Text className="material-symbols-outlined">{"local_florist"}</Text></View>
<View className="flex-1">
<Text className="font-bold text-sm">{"Ganesh Chaturthi Sthapana"}</Text>
<Text className="text-xs text-on-surface-variant">{"19 Sep, 2023 • 11:30 AM"}</Text></View>
<Text className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">{"Completed"}</Text></View></View></View>
<View className="pt-4 space-y-1">
<View className="flex items-center justify-between p-4 bg-surface hover:bg-surface-container-low transition-colors rounded-xl group cursor-pointer">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-on-surface-variant">{"account_circle"}</Text>
<Text className="font-medium">{"Personal Information"}</Text></View>
<Text className="material-symbols-outlined text-on-surface-variant text-sm  transition-transform">{"arrow_forward_ios"}</Text></View>
<View className="flex items-center justify-between p-4 bg-surface hover:bg-surface-container-low transition-colors rounded-xl group cursor-pointer">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-on-surface-variant">{"notifications_active"}</Text>
<Text className="font-medium">{"Prayer Reminders"}</Text></View>
<Text className="material-symbols-outlined text-on-surface-variant text-sm  transition-transform">{"arrow_forward_ios"}</Text></View>
<View className="flex items-center justify-between p-4 bg-surface hover:bg-surface-container-low transition-colors rounded-xl group cursor-pointer">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-on-surface-variant">{"security"}</Text>
<Text className="font-medium">{"Privacy & Security"}</Text></View>
<Text className="material-symbols-outlined text-on-surface-variant text-sm  transition-transform">{"arrow_forward_ios"}</Text></View>
<View className="flex items-center justify-between p-4 bg-surface hover:bg-surface-container-low transition-colors rounded-xl group cursor-pointer">
<View className="flex items-center gap-4">
<Text className="material-symbols-outlined text-error">{"logout"}</Text>
<Text className="font-medium text-error">{"Logout"}</Text></View></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#FAF9F6]/90 dark:bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px] shadow-[0_-4px_40px_rgba(26,28,26,0.06)]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#1A1C1A]/60 dark:text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/50 dark:hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#AB2E15] dark:text-[#E8593C] font-bold px-4 py-1">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
