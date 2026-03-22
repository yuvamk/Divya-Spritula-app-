import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { DriveProgressBar } from '@/components/ui/DriveProgressBar';

const { width } = Dimensions.get('window');

const DRIVES = [
  { id: '1', title: 'Mandir Jirnoddhar', target: 500000, raised: 320000, daysLeft: 12, donors: 142 },
  { id: '2', title: 'Anna Kshetra Seva', target: 100000, raised: 85000, daysLeft: 5, donors: 88 },
  { id: '3', title: 'Gaushala Chara', target: 50000, raised: 12000, daysLeft: 20, donors: 45 },
];

export default function DonationManagementScreen() {
  const [activeTab, setActiveTab] = useState('Active');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerTop}>
             <Text style={styles.title}>Seva Drives</Text>
             <TouchableOpacity style={styles.createBtn}>
                <LinearGradient
                  colors={[Colors.primary, Colors.secondary]}
                  style={styles.createGrad}
                >
                   <MaterialCommunityIcons name="plus" size={24} color="#FFF" />
                </LinearGradient>
             </TouchableOpacity>
          </View>
          <View style={styles.tabs}>
             {['Active', 'Past', 'Scheduled'].map(tab => (
               <TouchableOpacity 
                 key={tab} 
                 style={[styles.tab, activeTab === tab && styles.activeTab]}
                 onPress={() => setActiveTab(tab)}
               >
                  <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
               </TouchableOpacity>
             ))}
          </View>
        </SafeAreaView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {DRIVES.map(drive => (
          <TouchableOpacity 
            key={drive.id}
            activeOpacity={0.8}
            style={styles.driveCard}
          >
             <View style={styles.cardHeader}>
                <View style={styles.iconBox}>
                   <MaterialCommunityIcons name="hands-pray" size={24} color={Colors.primary} />
                </View>
                <View style={styles.titleInfo}>
                   <Text style={styles.driveTitle}>{drive.title}</Text>
                   <Text style={styles.donorsText}>{drive.donors} Punya Bhagis</Text>
                </View>
                <View style={styles.daysBadge}>
                   <Text style={styles.daysText}>{drive.daysLeft}d left</Text>
                </View>
             </View>

             <View style={styles.progressContainer}>
                <View style={styles.statsRow}>
                   <Text style={styles.raisedText}>₹{drive.raised.toLocaleString()}</Text>
                   <Text style={styles.targetText}>of ₹{drive.target.toLocaleString()}</Text>
                </View>
                <DriveProgressBar 
                  progress={drive.raised / drive.target} 
                  height={8}
                  color={Colors.primary}
                />
             </View>

             <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.actionBtn}>
                   <Text style={styles.actionText}>View Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtn}>
                   <Text style={styles.actionText}>Promote</Text>
                </TouchableOpacity>
             </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
  },
  title: {
    fontSize: 28,
    fontFamily: Typography.fonts.display,
    color: Colors.primary,
  },
  createBtn: { width: 44, height: 44, borderRadius: 22, overflow: 'hidden', ...Shadow.card },
  createGrad: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabs: { flexDirection: 'row', gap: 12, marginTop: 8 },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    backgroundColor: Colors.light.surfaceLow,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  activeTab: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  tabText: { fontSize: 13, fontFamily: Typography.fonts.headline, color: Colors.light.onSurfaceVar },
  activeTabText: { color: '#FFF' },
  scrollContent: { padding: Spacing.lg, paddingBottom: 100 },
  driveCard: {
    backgroundColor: '#FFF',
    borderRadius: Radius.xxl,
    padding: 20,
    marginBottom: 16,
    ...Shadow.card,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primary + '10',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  titleInfo: { flex: 1 },
  driveTitle: { fontSize: 18, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  donorsText: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, marginTop: 2 },
  daysBadge: { 
    backgroundColor: Colors.accent + '15',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.sm,
  },
  daysText: { fontSize: 10, color: Colors.accent, fontFamily: Typography.fonts.label, fontWeight: '700' },
  progressContainer: { marginBottom: 20 },
  statsRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 6, marginBottom: 8 },
  raisedText: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.primary, fontWeight: '700' },
  targetText: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, marginBottom: 2 },
  cardFooter: { 
    flexDirection: 'row', 
    gap: 12, 
    borderTopWidth: 1, 
    borderTopColor: Colors.light.surfaceHigh,
    paddingTop: 16,
  },
  actionBtn: {
    flex: 1,
    height: 36,
    borderRadius: Radius.md,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: { fontSize: 12, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
});
