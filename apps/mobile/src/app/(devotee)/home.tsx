import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow, Gradients } from '@/constants/theme';
import { TempleHeaderCard } from '@/components/cards/TempleHeaderCard';
import { DonationDriveCard } from '@/components/cards/DonationDriveCard';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const FEATURED_DRIVES = [
  { 
    id: '1', 
    title: 'Grand Temple Restoration Fund', 
    temple: 'Kashi Vishwanath', 
    image: 'https://images.unsplash.com/photo-1544013587-4142a2ca5896?q=80&w=600&h=400&auto=format&fit=crop', 
    raised: 450000, 
    target: 1000000, 
    daysLeft: 12 
  },
  { 
    id: '2', 
    title: 'Akshaya Patra - Feed 5000 Devotees', 
    temple: 'Iskcon Dwarka', 
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600&h=400&auto=format&fit=crop', 
    raised: 25000, 
    target: 50000, 
    daysLeft: 5 
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SafeAreaView edges={['top']}>
          <View style={styles.header}>
            <View>
              <Text style={styles.greetingHindi}>जय श्री राम</Text>
              <Text style={styles.greetingEnglish}>Jai Shri Ram, Rahul</Text>
            </View>
            <TouchableOpacity style={styles.headerIconButton}>
              <BlurView intensity={30} tint="light" style={styles.blurCircle}>
                <MaterialCommunityIcons name="bell-outline" size={24} color={Colors.primary} />
                <View style={styles.notifDot} />
              </BlurView>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <View style={styles.section}>
          <TempleHeaderCard 
            name="Kashi Vishwanath"
            location="Varanasi, Uttar Pradesh"
            image="https://images.unsplash.com/photo-1590050752117-23a9d97984ac?q=80&w=800&h=600&auto=format&fit=crop"
            tithi="Shukla Paksha Ekadashi"
          />
        </View>

        <View style={styles.section}>
          <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.liveBanner}
            onPress={() => router.push('/(shared)/live/1')}
          >
            <LinearGradient
              colors={[Colors.maroon, '#800000']}
              style={styles.liveGradient}
            >
              <View style={styles.liveBadge}>
                <View style={styles.liveDot} />
                <Text style={styles.liveText}>LIVE</Text>
              </View>
              <View style={styles.liveInfo}>
                <Text style={styles.liveTitle}>Sandhya Aarti</Text>
                <Text style={styles.liveTemple}>Prem Mandir, Vrindavan</Text>
              </View>
              <BlurView intensity={20} tint="light" style={styles.playBtn}>
                <MaterialCommunityIcons name="play" size={24} color="#FFF" />
              </BlurView>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActions}>
          <ActionItem 
            icon="lightning-bolt" 
            label="Fast Puja" 
            color="#FF9800" 
            bgColor={Colors.light.surfaceLow} 
          />
          <ActionItem 
            icon="hands-pray" 
            label="Darshan" 
            color={Colors.primary} 
            bgColor={Colors.light.surfaceLow} 
          />
          <ActionItem 
            icon="heart-circle-outline" 
            label="Auto-Seva" 
            color="#E91E63" 
            bgColor={Colors.light.surfaceLow}
            onPress={() => router.push('/(devotee)/seva')}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Donation Drives</Text>
            <TouchableOpacity onPress={() => router.push('/(devotee)/seva')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            horizontal
            data={FEATURED_DRIVES}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.driveList}
            renderItem={({ item }) => (
              <DonationDriveCard 
                {...item}
                onPress={() => router.push(`/(devotee)/seva/${item.id}`)}
              />
            )}
          />
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

function ActionItem({ icon, label, color, bgColor, onPress }: any) {
  return (
    <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
      <View style={[styles.actionIconContainer, { backgroundColor: bgColor }]}>
        <MaterialCommunityIcons name={icon} size={28} color={color} />
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  greetingHindi: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.displayMd,
    color: Colors.primary,
  },
  greetingEnglish: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.body,
    color: Colors.light.onSurfaceVar,
    marginTop: -4,
  },
  headerIconButton: {
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  blurCircle: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifDot: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
    borderWidth: 1.5,
    borderColor: '#FFF',
  },
  section: {
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  liveBanner: {
    height: 90,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    ...Shadow.card,
  },
  liveGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radius.sm,
    gap: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF3B30',
  },
  liveText: {
    color: '#FFF',
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    fontWeight: '700',
  },
  liveInfo: {
    flex: 1,
    marginLeft: Spacing.lg,
  },
  liveTitle: {
    color: '#FFF',
    fontFamily: Typography.fonts.headline,
    fontSize: 18,
  },
  liveTemple: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: Typography.fonts.body,
    fontSize: 12,
  },
  playBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    marginBottom: Spacing.xxl,
  },
  actionBtn: {
    alignItems: 'center',
    width: (width - Spacing.lg * 2) / 3.5,
  },
  actionIconContainer: {
    width: 64,
    height: 84, // Taller for editorial feel
    borderRadius: Radius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  actionLabel: {
    fontFamily: Typography.fonts.label,
    fontSize: 12,
    color: Colors.light.onSurface,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontFamily: Typography.fonts.headline,
    fontSize: 20,
    color: Colors.light.onSurface,
  },
  seeAll: {
    fontFamily: Typography.fonts.label,
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '700',
  },
  driveList: {
    paddingRight: Spacing.lg,
  }
});

