import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LANGUAGES = [
  { id: 'hi', label: 'हिंदी' },
  { id: 'en', label: 'English' },
  { id: 'ta', label: 'தமிழ்' },
  { id: 'te', label: 'తెలుగు' },
  { id: 'kn', label: 'ಕನ್ನಡ' },
  { id: 'mr', label: 'मराठी' },
  { id: 'bn', label: 'বাংলা' },
  { id: 'gu', label: 'ગુજરાતી' },
];

export default function LanguageScreen() {
  const router = useRouter();
  const [selectedLang, setSelectedLang] = React.useState('hi');

  const handleContinue = () => {
    require('@/stores/auth.store').useAuthStore.setState({ languageSelected: true });
    router.push('/(auth)/onboarding');
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar style="light" />
      <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Top App Bar */}
        <View className="w-full z-50 flex-row justify-between items-center px-4 bg-[#AB2E15] pt-12 pb-4" style={{ height: 100 }}>
          <TouchableOpacity className="active:scale-95 flex items-center justify-center p-2">
            <MaterialCommunityIcons name="arrow-left" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text className="font-serif font-bold text-xl uppercase tracking-widest text-[#FAF9F6]">DIVYA</Text>
          <TouchableOpacity className="active:scale-95 flex items-center justify-center p-2">
            <MaterialCommunityIcons name="bell-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View className="flex-1 px-6 py-12 flex flex-col max-w-md mx-auto w-full">
          <View className="mb-12">
            <Text className="font-serif font-bold text-3xl text-primary leading-tight mb-2">अपनी भाषा चुनें</Text>
            <View className="w-10 h-1 bg-accent rounded-full my-2" />
            <Text className="text-2xl font-normal opacity-90 text-secondary mb-2">Choose your language</Text>
            <Text className="text-[#59413c] font-medium text-sm mt-2 leading-5">Experience the divine in the language of your heart.</Text>
          </View>

          {/* Grid of Languages */}
          <View className="flex-row flex-wrap justify-between mb-24 gap-y-4">
            {LANGUAGES.map((lang) => {
              const isActive = selectedLang === lang.id;
              return (
                <TouchableOpacity
                  key={lang.id}
                  onPress={() => setSelectedLang(lang.id)}
                  className={`w-[48%] h-[48px] flex items-center justify-center rounded-full active:scale-95 ${
                    isActive
                      ? 'border-2 border-primary bg-[#cd462b]/10'
                      : 'border border-[#e1bfb8]'
                  }`}
                >
                  <Text
                    className={`font-sans ${
                      isActive ? 'font-bold text-primary' : 'font-medium text-[#59413c]'
                    }`}
                  >
                    {lang.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

        </View>
      </ScrollView>

      {/* Watermark Om */}
      <View className="absolute bottom-32 -right-10 opacity-[0.03] pointer-events-none">
        <MaterialCommunityIcons name="om" size={240} color="#1a1c1a" />
      </View>

      {/* Bottom Sticky Button */}
      <View className="absolute bottom-0 left-0 w-full p-6 pt-12">
        <LinearGradient colors={['rgba(250,249,246,0)', 'rgba(250,249,246,0.95)', 'rgba(250,249,246,1)']} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} pointerEvents="none" />
        <TouchableOpacity onPress={handleContinue} className="w-full h-[56px] rounded-xl shadow-lg active:scale-95 flex-row items-center justify-center gap-2 overflow-hidden">
          <LinearGradient colors={['#BA7517', '#cd462b']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ position: 'absolute', width: '100%', height: '100%' }} />
          <Text className="text-white font-serif font-bold text-lg">Continue</Text>
          <MaterialCommunityIcons name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

