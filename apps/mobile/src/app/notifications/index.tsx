import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

const NOTIFICATIONS = [
  { id: '1', title: 'Puja Nishchit', body: 'Aapki Rudrabhishek puja kal subah 6:00 baje Mandir mein nishchit ho gayi hai.', time: '10:30 AM', category: 'Ritual', unread: true },
  { id: '2', title: 'Divine Insight', body: 'Gemini AI says: Your nakshatra is favorable for donation today. Consider feeding cows.', time: '8:45 AM', category: 'AI', unread: true },
  { id: '3', title: 'Seva Update', body: '1100 Deepotsav seva drive has reached 80% goal. Join the light!', time: 'Yesterday', category: 'Community', unread: false },
];

export default function NotificationScreen() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <Text style={styles.title}>Divine Updates</Text>
            <TouchableOpacity style={styles.readAllBtn}>
               <Text style={styles.readAllText}>Mark all as read</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
             {['All', 'Ritual', 'AI', 'Community'].map(filter => (
               <TouchableOpacity 
                 key={filter} 
                 style={[styles.filterTab, activeFilter === filter && styles.activeFilter]}
                 onPress={() => setActiveFilter(filter)}
               >
                  <Text style={[styles.filterText, activeFilter === filter && styles.activeFilterText]}>{filter}</Text>
               </TouchableOpacity>
             ))}
          </ScrollView>
        </SafeAreaView>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Shloka Hero */}
        <BlurView intensity={20} tint="light" style={styles.shlokaCard}>
          <LinearGradient
            colors={[Colors.primary + '10', 'transparent']}
            style={StyleSheet.absoluteFill}
          />
          <MaterialCommunityIcons name="om" size={120} color={Colors.primary} style={styles.shlokaBgIcon} />
          <View style={styles.quoteBadge}>
             <Text style={styles.quoteBadgeText}>Aaj ka Vichar</Text>
          </View>
          <Text style={styles.shloka}>"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।"</Text>
          <Text style={styles.translation}>
            Perform your duty, but do not be attached to the fruits of your actions.
          </Text>
        </BlurView>

        <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>Recent Notifications</Text>
        </View>

        {NOTIFICATIONS.filter(n => activeFilter === 'All' || n.category === activeFilter).map(item => (
          <TouchableOpacity 
            key={item.id} 
            activeOpacity={0.7}
            style={[styles.notifCard, item.unread && styles.unreadCard]}
          >
             <View style={[styles.iconBox, { backgroundColor: item.category === 'AI' ? Colors.primary + '15' : Colors.light.surfaceLow }]}>
                <MaterialCommunityIcons 
                  name={item.category === 'AI' ? "auto-fix" : "bell-outline"} 
                  size={20} 
                  color={item.category === 'AI' ? Colors.primary : Colors.light.onSurfaceVar} 
                />
             </View>
             
             <View style={styles.notifInfo}>
                <View style={styles.notifTop}>
                   <Text style={[styles.notifTitle, item.unread && styles.unreadTitle]}>{item.title}</Text>
                   <Text style={styles.notifTime}>{item.time}</Text>
                </View>
                <Text style={styles.notifBody}>{item.body}</Text>
                
                {item.unread && <View style={styles.unreadDot} />}
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
    backgroundColor: '#FFF',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceHigh,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  title: { fontSize: 24, fontFamily: Typography.fonts.display, color: Colors.primary },
  readAllBtn: { paddingVertical: 4 },
  readAllText: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.label },
  filters: { gap: 10, paddingBottom: 4 },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    backgroundColor: Colors.light.surfaceLow,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  activeFilter: { backgroundColor: Colors.primary, borderColor: Colors.primary },
  filterText: { fontSize: 13, fontFamily: Typography.fonts.headline, color: Colors.light.onSurfaceVar },
  activeFilterText: { color: '#FFF' },
  scrollContent: { padding: Spacing.lg, paddingBottom: 100 },
  shlokaCard: {
    padding: 24,
    borderRadius: Radius.xxl,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
    overflow: 'hidden',
  },
  shlokaBgIcon: { position: 'absolute', bottom: -20, right: -20, opacity: 0.08 },
  quoteBadge: { 
    alignSelf: 'flex-start', 
    backgroundColor: Colors.primary + '15', 
    paddingHorizontal: 12, 
    paddingVertical: 4, 
    borderRadius: Radius.pill,
    marginBottom: 16,
  },
  quoteBadgeText: { fontSize: 10, color: Colors.primary, fontFamily: Typography.fonts.label, fontWeight: '700', textTransform: 'uppercase' },
  shloka: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.primary, fontStyle: 'italic', marginBottom: 12 },
  translation: { fontSize: 14, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, lineHeight: 22 },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface, fontWeight: '700' },
  notifCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: Radius.xl,
    marginBottom: 12,
    ...Shadow.sm,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  unreadCard: { backgroundColor: Colors.primary + '03', borderColor: Colors.primary + '20' },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  notifInfo: { flex: 1, position: 'relative' },
  notifTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  notifTitle: { fontSize: 15, fontFamily: Typography.fonts.headline, color: Colors.light.onSurfaceVar },
  unreadTitle: { color: Colors.light.onSurface, fontWeight: '700' },
  notifTime: { fontSize: 10, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.label },
  notifBody: { fontSize: 13, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, lineHeight: 18 },
  unreadDot: { position: 'absolute', top: 2, right: -4, width: 8, height: 8, borderRadius: 4, backgroundColor: Colors.primary }
});

