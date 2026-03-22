import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AmountDisplay } from '@/components/ui/AmountDisplay';

const { width } = Dimensions.get('window');

export default function PanditDashboard() {
  const router = useRouter();
  const [isDutyActive, setIsDutyActive] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Namaste,</Text>
              <Text style={styles.name}>Pt. Ramesh Sharma</Text>
            </View>
            <TouchableOpacity style={styles.notifBtn}>
              <BlurView intensity={20} tint="light" style={styles.notifBlur}>
                <MaterialCommunityIcons name="bell-outline" size={24} color={Colors.light.onSurface} />
                <View style={styles.notifDot} />
              </BlurView>
            </TouchableOpacity>
          </View>

          <BlurView intensity={20} tint="light" style={styles.dutyBar}>
            <View style={styles.dutyInfo}>
              <MaterialCommunityIcons 
                name={isDutyActive ? "eye" : "eye-off"} 
                size={20} 
                color={isDutyActive ? Colors.primary : Colors.light.onSurfaceVar} 
              />
              <Text style={[styles.dutyText, !isDutyActive && styles.dutyTextInactive]}>
                {isDutyActive ? "Puja Duty: Active" : "Puja Duty: Offline"}
              </Text>
            </View>
            <Switch
              value={isDutyActive}
              onValueChange={setIsDutyActive}
              trackColor={{ false: Colors.light.surfaceHigh, true: Colors.primary + '30' }}
              thumbColor={isDutyActive ? Colors.primary : Colors.light.onSurfaceVar}
            />
          </BlurView>
        </SafeAreaView>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.statsCard}
        >
          <View style={styles.statsHeader}>
            <View>
              <Text style={styles.statsLabel}>TOTAL DAKSHINA</Text>
              <AmountDisplay amount={128500} size="lg" color="#FFF" />
            </View>
            <View style={styles.trendBadge}>
              <MaterialCommunityIcons name="trending-up" size={14} color="#FFF" />
              <Text style={styles.trendText}>+12%</Text>
            </View>
          </View>
          <View style={styles.statsFooter}>
             <StatMini icon="calendar-check" label="24 Pujas" />
             <StatMini icon="star" label="4.9 Rating" />
             <StatMini icon="account-group" label="150+ Parivar" />
          </View>
        </LinearGradient>

        <View style={styles.quickActions}>
          <ActionBtn 
            icon="qrcode-scan" 
            label="Scan QR" 
            onPress={() => router.push('/(pandit)/scan')} 
            color={Colors.primary}
          />
          <ActionBtn 
            icon="plus-circle" 
            label="New Drive" 
            onPress={() => {}} 
            color={Colors.accent}
          />
          <ActionBtn 
            icon="history" 
            label="History" 
            onPress={() => {}} 
            color={Colors.light.onSurfaceVar}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Seva</Text>
            <TouchableOpacity onPress={() => router.push('/(pandit)/bookings')}>
               <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <PujaActiveCard 
            title="Maha Rudrabhishek"
            devotee="Rahul Sharma"
            time="Starts in 15m"
            location="Kashi Vishwanath"
            image="https://images.unsplash.com/photo-1590050752117-23a9d97984ac?q=80&w=200&h=200&auto=format&fit=crop"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Insights</Text>
          <LinearGradient
            colors={[Colors.primary + '10', Colors.secondary + '10']}
            style={styles.aiInsight}
          >
             <MaterialCommunityIcons name="sparkles" size={20} color={Colors.primary} />
             <Text style={styles.aiText}>3 new Shubh Muhurats detected for tomorrow. High demand expected for Saturn Shanti.</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

function StatMini({ icon, label }: { icon: string, label: string }) {
  return (
    <View style={styles.statMini}>
      <MaterialCommunityIcons name={icon as any} size={14} color="rgba(255,255,255,0.8)" />
      <Text style={styles.statMiniText}>{label}</Text>
    </View>
  );
}

function ActionBtn({ icon, label, onPress, color }: { icon: string, label: string, onPress: () => void, color: string }) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      <View style={[styles.actionIconContainer, { backgroundColor: color + '10' }]}>
        <MaterialCommunityIcons name={icon as any} size={24} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

function PujaActiveCard({ title, devotee, time, location, image }: any) {
  return (
    <TouchableOpacity style={styles.activeCard}>
       <Image source={{ uri: image }} style={styles.cardImg} />
       <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSub}>{devotee} • {location}</Text>
          <View style={styles.cardFooter}>
             <MaterialCommunityIcons name="clock-outline" size={14} color={Colors.primary} />
             <Text style={styles.cardTime}>{time}</Text>
          </View>
       </View>
       <View style={styles.goBtn}>
          <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.light.onSurfaceVar} />
       </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { 
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceHigh,
  },
  headerTop: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingVertical: Spacing.md,
  },
  greeting: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body },
  name: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  notifBtn: { borderRadius: Radius.pill, overflow: 'hidden' },
  notifBlur: { padding: 10, alignItems: 'center', justifyContent: 'center' },
  notifDot: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.primary, borderWidth: 1.5, borderColor: '#FFF' },
  dutyBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Radius.lg,
    backgroundColor: Colors.light.surfaceLow,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
    marginTop: Spacing.sm,
  },
  dutyInfo: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  dutyText: { fontSize: 14, fontFamily: Typography.fonts.headline, color: Colors.primary },
  dutyTextInactive: { color: Colors.light.onSurfaceVar },
  scrollContent: { padding: Spacing.lg, paddingBottom: 100 },
  statsCard: { padding: Spacing.xl, borderRadius: Radius.xxl, ...Shadow.card, marginBottom: Spacing.xl },
  statsHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: Spacing.xl },
  statsLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 10, fontFamily: Typography.fonts.label, letterSpacing: 1, fontWeight: '700' },
  trendBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: Radius.pill },
  trendText: { color: '#FFF', fontSize: 12, fontFamily: Typography.fonts.label, fontWeight: '700' },
  statsFooter: { flexDirection: 'row', gap: Spacing.lg, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: Spacing.lg },
  statMini: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  statMiniText: { color: 'rgba(255,255,255,0.9)', fontSize: 12, fontFamily: Typography.fonts.body },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: Spacing.xl },
  actionBtn: { width: (width - Spacing.lg * 3) / 3, alignItems: 'center', gap: 8 },
  actionIconContainer: { width: 56, height: 56, borderRadius: Radius.xl, alignItems: 'center', justifyContent: 'center' },
  actionLabel: { fontSize: 12, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  section: { marginVertical: Spacing.md },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.lg },
  sectionTitle: { fontSize: 18, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  viewAll: { fontSize: 12, color: Colors.primary, fontFamily: Typography.fonts.label, fontWeight: '700' },
  activeCard: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: Radius.xl, padding: Spacing.md, ...Shadow.card, borderWidth: 1, borderColor: Colors.light.surfaceHigh },
  cardImg: { width: 64, height: 64, borderRadius: Radius.lg },
  cardContent: { flex: 1, marginLeft: Spacing.md, justifyContent: 'center' },
  cardTitle: { fontSize: 16, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  cardSub: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, marginTop: 2 },
  cardFooter: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6 },
  cardTime: { fontSize: 12, color: Colors.primary, fontFamily: Typography.fonts.headline },
  goBtn: { justifyContent: 'center', paddingLeft: 8 },
  aiInsight: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: Spacing.lg, borderRadius: Radius.xl, borderWidth: 1, borderColor: Colors.primary + '20' },
  aiText: { flex: 1, fontSize: 12, color: Colors.primary, fontFamily: Typography.fonts.body, lineHeight: 18 }
});

