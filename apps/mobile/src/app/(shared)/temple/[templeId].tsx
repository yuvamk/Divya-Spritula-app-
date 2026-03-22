import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MapPin, Star, ShieldCheck, Sparkles, Calendar, Zap, MessageCircle, Heart } from 'lucide-react-native';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { DivyaButton } from '@/components/ui/DivyaButton';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { SaffronDivider } from '@/components/ui/SaffronDivider';

export default function TempleDetailScreen() {
  const { templeId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1590050752117-23a9d97984ac' }} style={styles.heroImg} />
          <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} style={styles.navOverlay}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <ChevronLeft color="#fff" size={24} />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.heroBottomOverlay} />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Kashi Vishwanath</Text>
              <View style={styles.locRow}>
                <MapPin size={14} color={Colors.light.textTertiary} />
                <Text style={styles.locText}>Varanasi, Uttar Pradesh</Text>
              </View>
            </View>
            <View style={styles.healthScoreContainer}>
              <ProgressRing progress={0.98} size={50} strokeWidth={4} color={Colors.accent} />
              <View style={styles.scoreTextOverlay}>
                 <Text style={styles.scoreVal}>9.8</Text>
                 <Text style={styles.scoreLabel}>AI HEALTH</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNum}>1.2M</Text>
              <Text style={styles.statLbl}>Devotees</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statNum}>4.9</Text>
              <Text style={styles.statLbl}>Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.stat}>
              <Text style={styles.statNum}>24/7</Text>
              <Text style={styles.statLbl}>Live Darshan</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Divine Legacy</Text>
          <Text style={styles.about}>
            One of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas.
          </Text>

          <SaffronDivider marginVertical={Spacing.lg} />

          <View style={styles.actionGrid}>
            <TouchableOpacity style={styles.actionItem} onPress={() => router.push('/(devotee)/puja/book')}>
              <LinearGradient colors={[Colors.accent + '10', 'transparent']} style={styles.actionGrad}>
                <Zap size={24} color={Colors.accent} />
                <Text style={styles.actionText}>Book Puja</Text>
                <Text style={styles.actionSub}>AI Sankalp Assist</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionItem}>
              <LinearGradient colors={[Colors.primary + '10', 'transparent']} style={styles.actionGrad}>
                <Heart size={24} color={Colors.primary} />
                <Text style={styles.actionText}>Offer Seva</Text>
                <Text style={styles.actionSub}>Transparency Wall</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Sacred Pandits</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.panditList}>
            {[1, 2, 3, 4].map(i => (
              <TouchableOpacity key={i} style={styles.pCard} onPress={() => router.push(`/(shared)/pandit/${i}`)}>
                <View style={styles.pImgContainer}>
                   <Image source={{ uri: `https://i.pravatar.cc/150?u=${i}` }} style={styles.pImg} />
                   <View style={styles.onlineDot} />
                </View>
                <Text style={styles.pName}>Pt. Ramesh</Text>
                <View style={styles.pRating}>
                  <Star size={10} fill={Colors.gold} color={Colors.gold} />
                  <Text style={styles.pRateText}>4.9</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.chatFab} onPress={() => router.push('/(shared)/chatbot')}>
        <LinearGradient colors={[Colors.primary, '#800000']} style={styles.fabGrad}>
           <MessageCircle color="#fff" size={28} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.bg },
  hero: { height: 350 },
  heroImg: { width: '100%', height: '100%' },
  navOverlay: { ...StyleSheet.absoluteFillObject, paddingHorizontal: 20, paddingTop: 60, height: 120 },
  heroBottomOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 100 },
  backBtn: { width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' },
  content: { padding: 24, marginTop: -40, backgroundColor: Colors.light.bg, borderTopLeftRadius: Radius.xxl, borderTopRightRadius: Radius.xxl },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 },
  name: { fontSize: 28, fontFamily: Typography.fonts.display, color: Colors.light.textPrimary },
  locRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
  locText: { fontSize: 13, color: Colors.light.textTertiary, fontFamily: Typography.fonts.body },
  healthScoreContainer: { width: 60, height: 60, alignItems: 'center', justifyContent: 'center' },
  scoreTextOverlay: { position: 'absolute', alignItems: 'center' },
  scoreVal: { fontSize: 14, fontFamily: Typography.fonts.headline, fontWeight: '800', color: Colors.accent },
  scoreLabel: { fontSize: 6, fontWeight: '700', color: Colors.accent, marginTop: -2 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 24, borderTopWidth: 1, borderBottomWidth: 1, borderColor: Colors.light.divider, marginBottom: 32 },
  stat: { flex: 1, alignItems: 'center' },
  statNum: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.textPrimary, fontWeight: '700' },
  statLbl: { fontSize: 12, color: Colors.light.textTertiary, marginTop: 2, fontFamily: Typography.fonts.label },
  statDivider: { width: 1, height: 30, backgroundColor: Colors.light.divider },
  sectionTitle: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.textPrimary, marginBottom: 16, fontWeight: '700' },
  about: { fontSize: 15, color: Colors.light.textSecondary, lineHeight: 24, marginBottom: 12, fontFamily: Typography.fonts.body },
  actionGrid: { flexDirection: 'row', gap: 16, marginBottom: 32 },
  actionItem: { flex: 1, borderRadius: Radius.xxl, overflow: 'hidden', borderWidth: 1, borderColor: Colors.light.divider, ...Shadow.card },
  actionGrad: { padding: 24, alignItems: 'center' },
  actionText: { fontSize: 16, fontFamily: Typography.fonts.headline, marginTop: 12, color: Colors.maroon, fontWeight: '700' },
  actionSub: { fontSize: 11, color: Colors.accent, marginTop: 4, fontFamily: Typography.fonts.label, fontWeight: '600' },
  panditList: { gap: 20, paddingRight: 24 },
  pCard: { width: 90, alignItems: 'center' },
  pImgContainer: { position: 'relative' },
  pImg: { width: 76, height: 76, borderRadius: 38, marginBottom: 8, borderWidth: 2, borderColor: '#FFF', ...Shadow.card },
  onlineDot: { position: 'absolute', bottom: 10, right: 4, width: 14, height: 14, borderRadius: 7, backgroundColor: '#22C55E', borderWidth: 2, borderColor: '#FFF' },
  pName: { fontSize: 13, fontFamily: Typography.fonts.headline, color: Colors.light.textPrimary, fontWeight: '600' },
  pRating: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  pRateText: { fontSize: 11, color: Colors.gold, fontFamily: Typography.fonts.body, fontWeight: '700' },
  chatFab: { position: 'absolute', bottom: 40, right: 24, width: 64, height: 64, borderRadius: 32, overflow: 'hidden', ...Shadow.card },
  fabGrad: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

