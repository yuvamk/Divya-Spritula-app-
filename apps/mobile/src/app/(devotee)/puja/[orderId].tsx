import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { StatusChip } from '@/components/ui/StatusChip';
import * as Progress from 'react-native-progress';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function PujaTrackingScreen() {
  const { orderId } = useLocalSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'pending' | 'inProgress' | 'confirming' | 'completed'>('inProgress');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <MaterialCommunityIcons name="chevron-left" size={28} color={Colors.light.onSurface} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Order #{orderId?.toString()?.slice(-6).toUpperCase()}</Text>
            <StatusChip status={status === 'inProgress' ? 'inProgress' : 'completed'} />
          </View>
        </SafeAreaView>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LinearGradient
          colors={['#FFF', Colors.primary + '05']}
          style={styles.mainCard}
        >
          <Text style={styles.pujaName}>Maha Rudrabhishek</Text>
          <Text style={styles.panditName}>Performing by Pt. Ramesh Sharma</Text>
          
          <View style={styles.timerRow}>
            <BlurView intensity={20} tint="light" style={styles.timerBox}>
              <MaterialCommunityIcons name="clock-outline" size={18} color={Colors.primary} />
              <Text style={styles.timeLeft}>45:12 Remaining</Text>
            </BlurView>
          </View>

          <Progress.Bar 
            progress={0.65} 
            width={null} 
            color={Colors.primary} 
            unfilledColor={Colors.primary + '15'}
            height={8}
            borderRadius={Radius.pill}
            borderWidth={0}
            style={styles.mainProgress}
          />
          <View style={styles.milestones}>
            <Milestone label="Sankalp" active={true} done={true} />
            <Milestone label="Aarti" active={true} done={false} />
            <Milestone label="Shanti" active={false} done={false} />
          </View>
        </LinearGradient>

        <TouchableOpacity 
          activeOpacity={0.9}
          style={styles.liveButton}
          onPress={() => router.push('/(shared)/live/1')}
        >
          <LinearGradient
            colors={[Colors.primary, Colors.secondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.liveGradient}
          >
            <MaterialCommunityIcons name="play-circle" size={24} color="#FFF" />
            <Text style={styles.liveBtnText}>Watch Live Darshan</Text>
            <View style={styles.liveIndicator} />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.aiProofBox}>
          <View style={styles.aiHeader}>
            <MaterialCommunityIcons name="auto-fix" size={20} color={Colors.primary} />
            <Text style={styles.aiTitle}>DIVYA AI PROOF ENGINE</Text>
          </View>
          
          <View style={styles.proofContent}>
            <View style={styles.proofImgContainer}>
               <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1590050752117-23a9d97984ac?q=80&w=300&h=300&auto=format&fit=crop' }} 
                style={styles.proofImg} 
               />
               <BlurView intensity={30} style={styles.analysisOverlay}>
                  <MaterialCommunityIcons name="scan-helper" size={40} color="#FFF" />
               </BlurView>
            </View>
            <View style={styles.proofInfo}>
              <ProofItem icon="fingerprint" text="Pandit Identity Verified" />
              <ProofItem icon="flame" text="Havan Geometry Valid" />
              <Text style={styles.aiNote}>Our AI is performing real-time spectral analysis of the fire for ritualistic precision.</Text>
            </View>
          </View>
        </View>

        <View style={styles.timelineContainer}>
          <Text style={styles.sectionTitle}>Spiritual Timeline</Text>
          <TimelineItem 
            time="10:15 AM" 
            event="Vedic Invocation Started" 
            status="done" 
          />
          <TimelineItem 
            time="10:25 AM" 
            event="Personalized Sankalp Recited" 
            status="done" 
            isAiWork={true}
          />
          <TimelineItem 
            time="10:45 AM" 
            event="Maha Aarti in Progress" 
            status="active" 
          />
          <TimelineItem 
            time="11:15 AM" 
            event="Visarjan & Shanti Path" 
            status="pending" 
            isLast={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function Milestone({ label, active, done }: { label: string, active: boolean, done: boolean }) {
  return (
    <View style={styles.mItem}>
      <View style={[styles.mDot, active && styles.mDotActive, done && styles.mDotDone]} />
      <Text style={[styles.mText, active && styles.mTextActive]}>{label}</Text>
    </View>
  );
}

function ProofItem({ icon, text }: { icon: string, text: string }) {
  return (
    <View style={styles.proofRow}>
      <MaterialCommunityIcons name={icon as any} size={16} color={Colors.accent} />
      <Text style={styles.proofText}>{text}</Text>
    </View>
  );
}

function TimelineItem({ time, event, status, isAiWork, isLast }: { time: string, event: string, status: 'done' | 'active' | 'pending', isAiWork?: boolean, isLast?: boolean }) {
  return (
    <View style={styles.tItem}>
      <View style={styles.tLeft}>
        <View style={[styles.tDot, status === 'done' && styles.tDotDone, status === 'active' && styles.tDotActive]} />
        {!isLast && <View style={[styles.tLine, status === 'done' && styles.tLineDone]} />}
      </View>
      <View style={styles.tRight}>
        <Text style={styles.tTime}>{time}</Text>
        <View style={styles.tEventRow}>
          <Text style={[styles.tEvent, status === 'active' && styles.tEventActive]}>{event}</Text>
          {isAiWork && (
            <View style={styles.aiBadge}>
              <MaterialCommunityIcons name="auto-fix" size={10} color={Colors.primary} />
              <Text style={styles.aiBadgeText}>AI</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { 
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceHigh,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    height: 56,
  },
  backBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { 
    fontSize: 16, 
    fontFamily: Typography.fonts.headline,
    color: Colors.light.onSurface,
  },
  scrollContent: { padding: Spacing.lg, paddingBottom: 40 },
  mainCard: { 
    backgroundColor: '#FFF', 
    padding: Spacing.xl, 
    borderRadius: Radius.xxl, 
    ...Shadow.card, 
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  pujaName: { 
    fontSize: 24, 
    fontFamily: Typography.fonts.display, 
    color: Colors.primary 
  },
  panditName: { 
    fontSize: 14, 
    color: Colors.light.onSurfaceVar, 
    marginTop: 4, 
    marginBottom: Spacing.xl,
    fontFamily: Typography.fonts.body,
  },
  timerRow: {
    marginBottom: Spacing.xl,
  },
  timerBox: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    backgroundColor: Colors.primary + '10', 
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Radius.lg, 
    alignSelf: 'flex-start',
  },
  timeLeft: { 
    fontSize: 14, 
    fontFamily: Typography.fonts.label, 
    color: Colors.primary, 
    fontWeight: '700' 
  },
  mainProgress: { marginBottom: 12 },
  milestones: { flexDirection: 'row', justifyContent: 'space-between' },
  mItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  mDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: Colors.light.surfaceHigh },
  mDotActive: { backgroundColor: Colors.primary },
  mDotDone: { backgroundColor: Colors.accent },
  mText: { fontSize: 11, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.label },
  mTextActive: { color: Colors.primary, fontWeight: '700' },
  liveButton: { 
    borderRadius: Radius.xl, 
    marginBottom: Spacing.xl, 
    overflow: 'hidden',
    ...Shadow.card,
  },
  liveGradient: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 12, 
    padding: 16, 
  },
  liveBtnText: { color: '#FFF', fontSize: 16, fontFamily: Typography.fonts.label, fontWeight: '700' },
  liveIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginLeft: 4,
  },
  aiProofBox: { 
    backgroundColor: '#FFF', 
    borderRadius: Radius.xxl, 
    padding: Spacing.xl, 
    borderWidth: 1, 
    borderColor: Colors.primary + '15',
    ...Shadow.card,
  },
  aiHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: Spacing.lg },
  aiTitle: { fontSize: 11, fontFamily: Typography.fonts.label, color: Colors.primary, letterSpacing: 1.5, fontWeight: '700' },
  proofContent: { flexDirection: 'row', gap: 16 },
  proofImgContainer: {
    width: 100, 
    height: 100, 
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  proofImg: { width: '100%', height: '100%' },
  analysisOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  proofInfo: { flex: 1, gap: 8 },
  proofRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  proofText: { fontSize: 13, color: Colors.accent, fontFamily: Typography.fonts.headline },
  aiNote: { fontSize: 11, color: Colors.light.onSurfaceVar, marginTop: 4, lineHeight: 16, fontStyle: 'italic', fontFamily: Typography.fonts.body },
  timelineContainer: { marginTop: Spacing.xl },
  sectionTitle: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface, marginBottom: Spacing.xl },
  tItem: { flexDirection: 'row', gap: 16 },
  tLeft: { alignItems: 'center', width: 20 },
  tDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: Colors.light.surfaceHigh, marginTop: 4 },
  tDotDone: { backgroundColor: Colors.accent },
  tDotActive: { backgroundColor: Colors.primary, borderWidth: 3, borderColor: Colors.primary + '30' },
  tLine: { width: 2, flex: 1, backgroundColor: Colors.light.surfaceHigh, marginVertical: 4 },
  tLineDone: { backgroundColor: Colors.accent + '40' },
  tRight: { flex: 1, paddingBottom: 24 },
  tTime: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.label },
  tEventRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  tEvent: { fontSize: 15, color: Colors.light.onSurface, fontFamily: Typography.fonts.body },
  tEventActive: { fontFamily: Typography.fonts.headline, color: Colors.primary },
  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: Colors.primary + '10',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  aiBadgeText: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    fontWeight: '700',
    color: Colors.primary,
  }
});

