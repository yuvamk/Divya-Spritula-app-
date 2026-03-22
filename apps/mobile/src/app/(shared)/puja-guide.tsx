import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Volume2, Pause, SkipForward, Sparkles, BookOpen } from 'lucide-react-native';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { SaffronDivider } from '@/components/ui/SaffronDivider';

const { width } = Dimensions.get('window');

export default function PujaGuideScreen() {
  const router = useRouter();
  const [playing, setPlaying] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <ChevronLeft color={Colors.light.textPrimary} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI Puja Guide</Text>
        <Sparkles color={Colors.accent} size={20} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.artWrapper}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1590050752117-23a9d97984ac' }} 
            style={styles.art} 
          />
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.4)']} style={styles.artOverlay} />
          <View style={styles.ringOverlay}>
             <ProgressRing progress={0.34} size={260} strokeWidth={8} color={Colors.accent} />
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>Shri Vishnu Sahasranama</Text>
          <Text style={styles.subtitle}>Guided Puja Instruction • Divine AI Voice</Text>
        </View>

        <View style={styles.player}>
          <View style={styles.timeRow}>
             <Text style={styles.time}>04:15</Text>
             <Text style={styles.time}>12:30</Text>
          </View>
          
          <View style={styles.controls}>
            <TouchableOpacity style={styles.secBtn}><BookOpen size={24} color={Colors.light.textSecondary} /></TouchableOpacity>
            <TouchableOpacity style={styles.playBtn} onPress={() => setPlaying(!playing)}>
              <LinearGradient colors={[Colors.primary, '#800000']} style={styles.playGrad}>
                {playing ? <Pause size={32} color="#fff" fill="#fff" /> : <Volume2 size={32} color="#fff" />}
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secBtn}><SkipForward size={24} color={Colors.light.textSecondary} /></TouchableOpacity>
          </View>
        </View>

        <SaffronDivider marginVertical={Spacing.xl} />

        <View style={styles.instructionCard}>
          <LinearGradient colors={[Colors.accent + '10', 'transparent']} style={styles.instrGrad}>
            <View style={styles.instrHeader}>
              <Text style={styles.instrStep}>CURRENT STEP • PRARAMBH</Text>
              <Text style={styles.instrTitle}>Achamanam (Purification)</Text>
            </View>
            <Text style={styles.instrText}>
               Take three sips of water from your right palm while chanting: {'\n'}
               <Text style={styles.mantra}>'Om Keshavaya Namah, Om Narayanaya Namah, Om Madhavaya Namah'</Text>
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Colors.light.divider },
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.textPrimary, fontWeight: '700' },
  content: { padding: 24, alignItems: 'center', paddingBottom: 60 },
  artWrapper: { width: 280, height: 280, borderRadius: 140, overflow: 'hidden', ...Shadow.card, marginBottom: 40, position: 'relative', alignItems: 'center', justifyContent: 'center' },
  art: { width: 240, height: 240, borderRadius: 120 },
  artOverlay: { ...StyleSheet.absoluteFillObject },
  ringOverlay: { position: 'absolute' },
  info: { alignItems: 'center', marginBottom: 32 },
  title: { fontSize: 26, fontFamily: Typography.fonts.display, color: Colors.light.textPrimary, textAlign: 'center' },
  subtitle: { fontSize: 14, color: Colors.light.textTertiary, marginTop: 8, fontFamily: Typography.fonts.body, letterSpacing: 0.5 },
  player: { width: '100%', paddingHorizontal: 20 },
  timeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  time: { fontSize: 12, color: Colors.light.textTertiary, fontFamily: Typography.fonts.label },
  controls: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' },
  playBtn: { width: 80, height: 80, borderRadius: 40, overflow: 'hidden', ...Shadow.card },
  playGrad: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  secBtn: { width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.light.surfaceHigh, alignItems: 'center', justifyContent: 'center' },
  instructionCard: { borderRadius: Radius.xxl, overflow: 'hidden', width: '100%', borderWidth: 1, borderColor: Colors.accent + '20', ...Shadow.card },
  instrGrad: { padding: 28 },
  instrHeader: { marginBottom: 16 },
  instrStep: { fontSize: 10, fontFamily: Typography.fonts.headline, color: Colors.accent, letterSpacing: 2, fontWeight: '800' },
  instrTitle: { fontSize: 22, fontFamily: Typography.fonts.headline, color: Colors.maroon, marginTop: 6, fontWeight: '700' },
  instrText: { fontSize: 16, color: Colors.light.textSecondary, lineHeight: 26, fontFamily: Typography.fonts.body },
  mantra: { fontFamily: Typography.fonts.headline, color: Colors.primary, fontWeight: '700', fontStyle: 'italic', marginTop: 8 }
});

