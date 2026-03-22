import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LiveAartiStream2() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ flexGrow: 1 }}>
      
<View className="bg-[#0F0D1A] text-[#FAF9F6] font-body">
<View className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 bg-[#0F0D1A]/40 backdrop-blur-md h-[56px]">
<View className="flex items-center gap-3">
<TouchableOpacity className="active:scale-95 duration-200 text-[#E8593C]">
<Text className="material-symbols-outlined">{"arrow_back"}</Text></TouchableOpacity>
<View className="flex flex-col">
<Text className="font-headline font-black text-white tracking-widest text-sm uppercase">{"DIVYA"}</Text></View></View>
<View className="flex items-center gap-4">
<View className="flex items-center bg-error px-2 py-0.5 rounded-sm">
<Text className="material-symbols-outlined text-[14px] mr-1">{"fiber_manual_record"}</Text>
<Text className="text-[10px] font-bold tracking-tighter uppercase">{"LIVE"}</Text></View>
<TouchableOpacity className="text-white/80 active:scale-95 duration-200">
<Text className="material-symbols-outlined">{"notifications"}</Text></TouchableOpacity></View></View>
<View className="relative flex-1 flex flex-col">
<View className="relative aspect-[9/16] md:aspect-video w-full  bg-black">
<Image className="w-full h-full object-cover opacity-80" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAueMkvw6V9Yg_HdrJORMtvreYHC4S0IsL4sJvKU2kq5qvR7hDm26KLfJqtxdbqeNIIaKGsuwxi6IjqFeNBZ8aANvO9yEoKKUOq8jxBd1ONlmGXAR3RbkrcG8miW1S5B-lVoSN3N9g3l8xEQIADrovKVv4gzEK5LkwQkDA0N_6l5gVl9_58gSTTeNDcs4ojiTjk92mo8P2mWJJxgy_o0qTgiJNP6q6MRzkQdg6LIJnwd8S4tpN-zbcNORbYMEeO9BZHQh7-bl0qLKRX" }} />
<View className="absolute inset-0 flex flex-col justify-between p-6 custom-video-shadow pointer-events-none">
<View className="mt-12 pointer-events-auto">
<Text className="font-headline text-3xl font-bold text-white drop-shadow-lg">{"Kashi Vishwanath"}</Text>
<Text className="text-white/70 text-sm flex items-center gap-2">
<Text className="material-symbols-outlined text-xs">{"location_on"}</Text>{"Varanasi, Uttar Pradesh"}</Text></View>
<View className="absolute bottom-32 right-8 flex flex-col gap-4 items-center">
<View className="floating-emoji text-3xl">{"🙏"}</View>
<View className="floating-emoji text-3xl">{"🌸"}</View>
<View className="floating-emoji text-3xl">{"🔔"}</View>
<View className="floating-emoji text-3xl">{"🙏"}</View>
<View className="floating-emoji text-3xl">{"✨"}</View></View>
<View className="flex flex-col gap-4 pointer-events-auto">
<View className="flex justify-between items-end">
<View className="flex items-center gap-4">
<View className="glass-panel rounded-full px-4 py-2 flex items-center gap-2">
<Text className="material-symbols-outlined text-tertiary-fixed">{"visibility"}</Text>
<Text className="font-['Roboto_Mono'] text-sm font-bold">{"12.4K"}</Text></View>
<View className="glass-panel rounded-full px-4 py-2 flex items-center gap-2">
<Text className="material-symbols-outlined text-primary">{"favorite"}</Text>
<Text className="font-['Roboto_Mono'] text-sm font-bold">{"8.2K"}</Text></View></View>
<View className="flex flex-col gap-3">
<TouchableOpacity className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-xl hover:scale-110 transition-transform">{"🙏"}</TouchableOpacity>
<TouchableOpacity className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-xl hover:scale-110 transition-transform">{"🔔"}</TouchableOpacity>
<TouchableOpacity className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-xl hover:scale-110 transition-transform">{"🌸"}</TouchableOpacity></View></View></View></View></View>
<View className="flex-grow bg-[#0F0D1A] -mt-12 relative z-10 rounded-t-[48px] px-6 pt-10 pb-24 shadow-2xl">
<View className="flex items-center justify-between mb-8 bg-surface-container-low/10 p-4 rounded-xl">
<View className="flex items-center gap-4">
<View className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
<Text className="material-symbols-outlined text-primary">{"front_hand"}</Text></View>
<View>
<Text className="text-xs text-white/50 font-medium tracking-wide uppercase">{"Total Pranam"}</Text>
<Text className="font-['Roboto_Mono'] text-xl font-bold text-tertiary-fixed">{"1,04,283"}</Text></View></View>
<TouchableOpacity className="bg-gradient-to-r from-primary to-primary-container px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg active:scale-95 transition-all">{"Sankalp Pranam"}</TouchableOpacity></View>
<View className="grid grid-cols-1 md:grid-cols-2 gap-8">
<View className="space-y-4">
<Text className="font-headline text-2xl font-bold border-l-4 border-tertiary pl-4">{"Sandhya Aarti"}</Text>
<Text className="text-white/70 leading-relaxed text-sm">{"Experience the divine evening ritual at the sacred banks of the Ganges. The Sandhya Aarti at Kashi Vishwanath is a mesmerizing spectacle of synchronized chanting, rhythmic bells, and thousands of oil lamps."}</Text>
<View className="flex items-center justify-between bg-[#1A1C1A] p-4 rounded-2xl">
<View className="flex items-center gap-3">
<Text className="material-symbols-outlined text-tertiary">{"alarm"}</Text>
<View>
<Text className="text-sm font-bold text-white">{"Next: Mangala Aarti"}</Text>
<Text className="text-xs text-white/50">{"Tomorrow, 03:00 AM"}</Text></View></View>
<Text className="relative inline-flex items-center cursor-pointer">
<View className="sr-only peer"></View>
<View className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></View></Text></View></View>
<View className="bg-surface-container-high/5 rounded-[32px] rounded-bl-none p-6 flex flex-col justify-between">
<View>
<Text className="text-xs font-bold text-tertiary uppercase tracking-widest mb-2 block">{"Daan Seva"}</Text>
<Text className="font-headline text-xl font-bold mb-4 italic">{"Support the Temple"}</Text></View>
<View className="flex -space-x-3 mb-4">
<Image className="w-8 h-8 rounded-full border-2 border-[#0F0D1A]" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9hWH9zm32GxogWIos4ABh0zG79P8nm821K-9gY8o7rCTOeZaBlsdA2JSrhQkHu2Kg5aNIitsrX_1MmeStq3Z38TrqxJDI80fJs0OPb7n9dy8O9_VTleJS2Sq_MhZZPxBMTUrrjQ5wbGsCch6bpawmJXW0z19eogCywCE4vefNencFaa3G-jwxHsHf4L2EiBbWiRWyLyhgxx05fACiEfKmGhbjGLwUIdPYKjXeMzYfn0CuR5q3v7hhHmxdkdLDvBhNbRJeiPSCl0L" }} />
<Image className="w-8 h-8 rounded-full border-2 border-[#0F0D1A]" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF8jl2N19qdlVavVjqHHa6vg-EQu1Cv5iVETvt23h6DAfBfW99uf88CTm0CJjGwShnEJkNiEXNaN5_LftLCXiWKQgA2fBQkLONHBRlRuM-T_l7gDysb4tozAU00a6UA2dzJblQAiUt9lo0gfM2H7-JjS3CRh3V9QDti2kvnZbIYKpTzv45oDS6BM5ICDyu1dE7VWJjsGJuEMNg0dXcXeY585QZZ1sKtUOnfXYMroCIIp0lKqCtMC390IOM_C2LIGZ8vA5LBO01vEFK" }} />
<Image className="w-8 h-8 rounded-full border-2 border-[#0F0D1A]" source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7SCpgw0Rgwq10PY484M4neqqi4hUizTOqB8ABK5chKggYGc4fZ-pDIMD24mi6fVpxc9StGdhwBILjaqEnMMhPi4K4EhOJIS4f3BqxnqUWXJRROkUYGPP0u3F9reqhL-kY2dJu0eObVOhrM9gAQ_jJg_De38JW8Qgyf6LB2Dp0zojsixmlMBd9eJG7x7ma9_70R4U_TYMJwHuqoAiReOPBQj3JyTHAY8K0FSgvAfTxZoEDvg-BPVEnYjRWSgBOv520mdVv5ZYASf_E" }} />
<View className="w-8 h-8 rounded-full border-2 border-[#0F0D1A] bg-tertiary flex items-center justify-center text-[10px] font-bold">{"+240"}</View></View>
<TouchableOpacity className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">{"Offer Prasad Online"}</TouchableOpacity></View></View></View></View>
<View className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#0F0D1A]/90 backdrop-blur-xl h-[64px] rounded-t-[24px]">
<TouchableOpacity className="flex flex-col items-center justify-center text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"temple_hindu"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Mandir"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"fireplace"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Seva"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#E8593C] font-bold hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"local_florist"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Puja"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"search"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Khojo"}</Text></TouchableOpacity>
<TouchableOpacity className="flex flex-col items-center justify-center text-[#FAF9F6]/60 hover:bg-[#E3E2E0]/10 rounded-xl px-4 py-1 transition-all">
<Text className="material-symbols-outlined">{"ods"}</Text>
<Text className="font-['Noto_Sans'] text-[10px] font-medium mt-1">{"Mera"}</Text></TouchableOpacity></View></View>
    </ScrollView>
  );
}
