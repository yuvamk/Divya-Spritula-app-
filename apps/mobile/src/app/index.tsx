import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';
import { useAuthStore } from '@/stores/auth.store';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeOut, Easing, withRepeat, withTiming, useSharedValue, useAnimatedStyle, withSequence } from 'react-native-reanimated';

export default function Index() {
  const { user, languageSelected } = useAuthStore();
  const [isReady, setIsReady] = useState(false);

  // Glow ring animations
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.6);

  useEffect(() => {
    // Start pulsing animation
    scale.value = withRepeat(
      withSequence(
        withTiming(1.15, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
    opacity.value = withRepeat(
      withSequence(
        withTiming(0.9, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.6, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );

    // Artificial delay to show splash screen for proof of concept
    const timer = setTimeout(() => setIsReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const animatedGlowStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  if (isReady) {
    if (!languageSelected) return <Redirect href="/(auth)/language" />;
    if (!user) return <Redirect href="/(auth)/onboarding" />;
    if (user.role === 'pandit') return <Redirect href="/(pandit)/dashboard" />;
    return <Redirect href="/(devotee)/home" />;
  }

  return (
    <View className="bg-[#7E1E1E] flex-1 flex-col items-center justify-center overflow-hidden">
      <View className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Center Brand Cluster */}
        <Animated.View entering={FadeIn.duration(1000)} exiting={FadeOut} className="relative flex flex-col items-center text-center z-10">
          
          {/* Om Symbol with Glow Ring */}
          <View className="relative mb-8 flex items-center justify-center w-32 h-32">
            {/* Golden Glow Ring */}
            <Animated.View style={animatedGlowStyle} className="absolute w-32 h-32 rounded-full bg-accent/30" />
            <Animated.View style={animatedGlowStyle} className="absolute w-24 h-24 rounded-full border border-accent/20" />
            
            {/* The Sacred Om */}
            <Text className="font-serif text-[80px] text-accent leading-none text-center" style={{ textShadowColor: 'rgba(186, 117, 23, 0.4)', textShadowRadius: 20, includeFontPadding: false, transform: [{ translateY: 10 }] }}>
              ॐ
            </Text>
          </View>
          
          {/* Brand Identity Section */}
          <View className="space-y-1 items-center flex-col flex">
            <Text className="font-serif font-bold text-[38px] text-white uppercase leading-tight" style={{ letterSpacing: 6 }}>
              DIVYA
            </Text>
            <Text className="font-serif text-[16px] text-accent font-medium mt-1" style={{ letterSpacing: 2 }}>
              दिव्य
            </Text>
            <View className="pt-6">
              <Text className="font-serif italic text-[13px] text-white/60 tracking-widest">
                Har Mandir. Har Dil.
              </Text>
            </View>
          </View>
        </Animated.View>
        
        {/* Decorative Diya Flames (Bottom Corners) */}
        <View className="absolute bottom-12 left-12 flex flex-col items-center">
          <LinearGradient colors={['#BA7517', '#cd462b']} style={{ width: 16, height: 24, borderRadius: 12, opacity: 0.8 }} />
          <View className="w-10 h-4 bg-[#4A1111] rounded-b-full -mt-2 border-t border-accent/20 shadow-lg" />
        </View>
        <View className="absolute bottom-12 right-12 flex flex-col items-center">
          <LinearGradient colors={['#BA7517', '#cd462b']} style={{ width: 16, height: 24, borderRadius: 12, opacity: 0.8 }} />
          <View className="w-10 h-4 bg-[#4A1111] rounded-b-full -mt-2 border-t border-accent/20 shadow-lg" />
        </View>

      </View>
    </View>
  );
}
