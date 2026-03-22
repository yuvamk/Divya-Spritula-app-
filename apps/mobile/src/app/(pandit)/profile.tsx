import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function PanditProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={styles.profileHeader}
        >
          <SafeAreaView edges={['top']}>
            <View style={styles.headerTop}>
               <TouchableOpacity style={styles.iconBtn}>
                  <MaterialCommunityIcons name="cog-outline" size={24} color="#FFF" />
               </TouchableOpacity>
               <TouchableOpacity style={styles.iconBtn}>
                  <MaterialCommunityIcons name="bell-outline" size={24} color="#FFF" />
               </TouchableOpacity>
            </View>

            <View style={styles.profileInfo}>
               <View style={styles.avatarContainer}>
                  <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500' }} 
                    style={styles.avatar} 
                  />
                  <View style={styles.editBadge}>
                     <MaterialCommunityIcons name="camera" size={12} color="#FFF" />
                  </View>
               </View>
               <Text style={styles.name}>Pandit Rajesh Sharma</Text>
               <Text style={styles.temple}>Kashi Vishwanath Temple, Varanasi</Text>
               
               <View style={styles.statsRow}>
                  <StatItem label="Dakshina" value="₹42.8k" />
                  <View style={styles.statDivider} />
                  <StatItem label="Pujas" value="128" />
                  <View style={styles.statDivider} />
                  <StatItem label="Anubhav" value="15yr" />
               </View>
            </View>
          </SafeAreaView>
        </LinearGradient>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Temple Management</Text>
          <MenuLink icon="calendar-clock" label="Schedule & Availability" />
          <MenuLink icon="hand-heart" label="Donation Drives" />
          <MenuLink icon="account-group" label="Community Registry" />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sacred Settings</Text>
          <MenuLink icon="translate" label="App Language" value="Hindi (Ind)" />
          <MenuLink icon="bell-ring-outline" label="Ritual Reminders" />
          <MenuLink icon="shield-check-outline" label="Privacy & Security" />
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
           <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Divya v1.0.4 • Digital Sanctum Edition</Text>
      </ScrollView>
    </View>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function MenuLink({ icon, label, value }: { icon: string, label: string, value?: string }) {
  return (
    <TouchableOpacity style={styles.menuLink}>
       <View style={styles.menuIconBox}>
          <MaterialCommunityIcons name={icon as any} size={22} color={Colors.primary} />
       </View>
       <Text style={styles.menuLabel}>{label}</Text>
       {value && <Text style={styles.menuValue}>{value}</Text>}
       <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.light.onSurfaceVar} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  scrollContent: { paddingBottom: 120 },
  profileHeader: {
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    ...Shadow.card,
  },
  headerTop: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    paddingHorizontal: 20, 
    gap: 16,
    paddingTop: 10,
  },
  iconBtn: { 
    width: 44, 
    height: 44, 
    borderRadius: 22, 
    backgroundColor: 'rgba(255,255,255,0.2)', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  profileInfo: { alignItems: 'center', marginTop: 10 },
  avatarContainer: { position: 'relative', marginBottom: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: 'rgba(255,255,255,0.3)' },
  editBadge: { position: 'absolute', bottom: 4, right: 4, width: 28, height: 28, borderRadius: 14, backgroundColor: Colors.primary, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#FFF' },
  name: { fontSize: 24, fontFamily: Typography.fonts.headline, color: '#FFF', fontWeight: '700' },
  temple: { fontSize: 13, color: 'rgba(255,255,255,0.8)', fontFamily: Typography.fonts.body, marginTop: 4 },
  statsRow: { flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 24, backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 24, paddingVertical: 12, borderRadius: Radius.xl },
  statItem: { alignItems: 'center' },
  statValue: { fontSize: 18, fontFamily: Typography.fonts.headline, color: '#FFF', fontWeight: '700' },
  statLabel: { fontSize: 10, color: 'rgba(255,255,255,0.6)', fontFamily: Typography.fonts.label, textTransform: 'uppercase', letterSpacing: 1 },
  statDivider: { width: 1, height: 24, backgroundColor: 'rgba(255,255,255,0.2)' },
  section: { marginTop: 32, paddingHorizontal: 24 },
  sectionTitle: { fontSize: 16, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface, marginBottom: 16, fontWeight: '700' },
  menuLink: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: Radius.xl, marginBottom: 12, ...Shadow.card, borderWidth: 1, borderColor: Colors.light.surfaceHigh },
  menuIconBox: { width: 40, height: 40, borderRadius: Radius.lg, backgroundColor: Colors.primary + '10', alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  menuLabel: { flex: 1, fontSize: 14, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  menuValue: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, marginRight: 8 },
  logoutBtn: { margin: 24, height: 56, borderRadius: Radius.xl, borderBottomWidth: 2, borderColor: Colors.error + '20', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.error + '05' },
  logoutText: { color: Colors.error, fontSize: 16, fontFamily: Typography.fonts.headline, fontWeight: '700' },
  version: { textAlign: 'center', fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body, opacity: 0.6 }
});
