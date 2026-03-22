import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusChip } from '@/components/ui/StatusChip';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

const BOOKINGS = [
  { id: '1', name: 'Maha Rudrabhishek', devotee: 'Suresh Kashyap', status: 'pending', date: '22 Mar', time: '04:30 AM', type: 'Remote' },
  { id: '2', name: 'Satyanarayan Katha', devotee: 'Meena Gupta', status: 'accepted', date: '23 Mar', time: '06:15 PM', type: 'In-Person' },
  { id: '3', name: 'Mahamrityunjaya Jaap', devotee: 'Rahul Sharma', status: 'inProgress', date: 'Today', time: '08:00 AM', type: 'Remote' },
  { id: '4', name: 'Ganesh Puja', devotee: 'Priya Verma', status: 'completed', date: 'Yesterday', time: '10:00 AM', type: 'Remote' },
];

export default function BookingsScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All');

  const filteredBookings = activeTab === 'All' 
    ? BOOKINGS 
    : BOOKINGS.filter(b => b.status === activeTab.toLowerCase());

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <Text style={styles.title}>Puja Bookings</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
             {['All', 'Pending', 'Accepted', 'InProgress', 'Completed'].map(tab => (
               <TouchableOpacity 
                 key={tab} 
                 style={[styles.tab, activeTab === tab && styles.activeTab]}
                 onPress={() => setActiveTab(tab)}
               >
                  <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
               </TouchableOpacity>
             ))}
          </ScrollView>
        </SafeAreaView>
      </View>

      <FlatList
        data={filteredBookings}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.card}
            onPress={() => router.push(`/(pandit)/bookings/${item.id}`)}
          >
             <View style={styles.cardHeader}>
                <View style={styles.dateBox}>
                   <Text style={styles.dateDay}>{item.date.split(' ')[0]}</Text>
                   <Text style={styles.dateMonth}>{item.date.split(' ')[1] || 'OCT'}</Text>
                </View>
                <View style={styles.mainInfo}>
                   <Text style={styles.pujaName}>{item.name}</Text>
                   <Text style={styles.devoteeName}>Yajman: {item.devotee}</Text>
                </View>
                <StatusChip status={item.status as any} />
             </View>
             
             <View style={styles.cardDivider} />

             <View style={styles.cardFooter}>
                <View style={styles.infoRow}>
                   <MaterialCommunityIcons name="clock-outline" size={16} color={Colors.primary} />
                   <Text style={styles.infoText}>{item.time}</Text>
                </View>
                <View style={styles.infoRow}>
                   <MaterialCommunityIcons name="map-marker-outline" size={16} color={Colors.accent} />
                   <Text style={styles.infoText}>{item.type}</Text>
                </View>
                <View style={styles.goBtn}>
                   <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.light.onSurfaceVar} />
                </View>
             </View>
          </TouchableOpacity>
        )}
      />
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
  title: {
    fontSize: 28,
    fontFamily: Typography.fonts.display,
    color: Colors.primary,
    marginTop: Spacing.md,
    marginBottom: Spacing.lg,
  },
  tabs: {
    paddingRight: Spacing.lg,
    gap: 10,
    paddingBottom: 4,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    backgroundColor: Colors.light.surfaceLow,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  activeTab: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontSize: 13,
    fontFamily: Typography.fonts.headline,
    color: Colors.light.onSurfaceVar,
  },
  activeTabText: {
    color: '#FFF',
  },
  listContent: { padding: Spacing.lg, paddingBottom: 100 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: Radius.xxl,
    padding: 16,
    marginBottom: 16,
    ...Shadow.card,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateBox: {
    width: 52,
    height: 52,
    borderRadius: Radius.lg,
    backgroundColor: Colors.primary + '10',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  dateDay: {
    fontSize: 18,
    fontFamily: Typography.fonts.headline,
    color: Colors.primary,
    fontWeight: '700',
  },
  dateMonth: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    color: Colors.primary,
    textTransform: 'uppercase',
  },
  mainInfo: { flex: 1 },
  pujaName: {
    fontSize: 16,
    fontFamily: Typography.fonts.headline,
    color: Colors.light.onSurface,
  },
  devoteeName: {
    fontSize: 13,
    color: Colors.light.onSurfaceVar,
    fontFamily: Typography.fonts.body,
    marginTop: 2,
  },
  cardDivider: {
    height: 1,
    backgroundColor: Colors.light.surfaceHigh,
    marginVertical: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: Colors.light.onSurface,
    fontFamily: Typography.fonts.headline,
  },
  goBtn: { marginLeft: 'auto' }
});

