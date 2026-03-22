import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Typography, Spacing, Radius, Shadow, Gradients } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { DivyaButton } from '@/components/ui/DivyaButton';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    title: 'अपने मंदिर से जुड़ें',
    subtitle: 'Apne Mandir se Judein',
    description: 'Scan the QR at your local mandir and instantly join your temple community. Stay connected with your heritage.',
    image: 'https://images.unsplash.com/photo-1544013583-16474ba377b5?q=80&w=390&h=884&auto=format&fit=crop',
    icon: 'hands-pray'
  },
  {
    id: '2',
    title: 'AI आध्यात्मिक गाइड',
    subtitle: 'AI Spiritual Guide',
    description: 'Get personalized wisdom from the Gita and Muhurat assistance powered by Gemini AI. Your modern guide to ancient truth.',
    image: 'https://images.unsplash.com/photo-1590050752117-23aae2912f2c?q=80&w=390&h=884&auto=format&fit=crop',
    icon: 'auto-fix'
  },
  {
    id: '3',
    title: 'सेवा और समृद्धि',
    subtitle: 'Seva & Prosperity',
    description: 'Contribute to temple projects and track your spiritual contributions easily. Transparency in every grain of seva.',
    image: 'https://images.unsplash.com/photo-1574123221817-4375523531d2?q=80&w=390&h=884&auto=format&fit=crop',
    icon: 'heart-pulse'
  }
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push('/(auth)/scan');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.skipButton} 
        onPress={() => router.push('/(auth)/scan')}
      >
        <Text style={styles.skipText}>स्किप / Skip</Text>
      </TouchableOpacity>

      <View style={styles.illustrationContainer}>
        <View style={[styles.imageWrapper, { 
          borderTopLeftRadius: Radius.arch.top,
          borderTopRightRadius: Radius.arch.top,
          borderBottomLeftRadius: Radius.arch.bottom,
          borderBottomRightRadius: Radius.arch.bottom,
        }]}>
          <Image source={{ uri: SLIDES[currentIndex].image }} style={styles.image} />
          <LinearGradient
            colors={['transparent', 'rgba(15, 13, 26, 0.4)']}
            style={styles.imageOverlay}
          />
        </View>
        <View style={styles.floatingIcon}>
          <MaterialCommunityIcons name={SLIDES[currentIndex].icon as any} size={28} color={Colors.accent} />
        </View>
      </View>

      <View style={styles.contentSection}>
        <View style={styles.textContainer}>
          <Text style={styles.titleHindi}>{SLIDES[currentIndex].title}</Text>
          <Text style={styles.titleEnglish}>{SLIDES[currentIndex].subtitle}</Text>
          <Text style={styles.description}>{SLIDES[currentIndex].description}</Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.pagination}>
            {SLIDES.map((_, i) => (
              <View 
                key={i} 
                style={[
                  styles.dot, 
                  i === currentIndex && styles.activeDot,
                  { backgroundColor: i === currentIndex ? Colors.primary : Colors.light.surfaceHigh }
                ]} 
              />
            ))}
          </View>

          <DivyaButton 
            title={currentIndex === SLIDES.length - 1 ? 'प्रारंभ करें / Start' : 'अगला / Next'} 
            onPress={handleNext}
            style={styles.nextButton}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: Spacing.lg,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
  },
  skipText: {
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.caption,
    color: Colors.light.onSurfaceVar,
  },
  illustrationContainer: {
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  imageWrapper: {
    width: width * 0.75,
    height: height * 0.42,
    overflow: 'hidden',
    backgroundColor: Colors.light.surfaceHigh,
    ...Shadow.ambient,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  floatingIcon: {
    position: 'absolute',
    bottom: 20,
    right: width * 0.1,
    backgroundColor: Colors.light.surfaceLowest,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    ...Shadow.ambient,
  },
  contentSection: {
    flex: 1,
    paddingHorizontal: Spacing.editorial,
    paddingVertical: Spacing.xl,
    justifyContent: 'space-between',
  },
  textContainer: {
    alignItems: 'center',
  },
  titleHindi: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.displayMd,
    color: Colors.primary,
    textAlign: 'center',
  },
  titleEnglish: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.h2,
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 4,
    opacity: 0.8,
  },
  description: {
    fontFamily: Typography.fonts.body,
    fontSize: Typography.sizes.body,
    color: Colors.light.onSurfaceVar,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: Spacing.lg,
  },
  footer: {
    alignItems: 'center',
    width: '100%',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: Spacing.xl,
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  activeDot: {
    width: 20,
  },
  nextButton: {
    width: '100%',
  },
});

