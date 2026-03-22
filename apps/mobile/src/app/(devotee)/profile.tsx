import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronRight, CreditCard, History, MapPin, LogOut, Bell, Shield, Heart } from 'lucide-react-native';
import { Colors, Typography, Radius, Shadow } from '@/constants/theme';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mera Divya</Text>
        <TouchableOpacity>
          <Settings size={22} color={Colors.light.textPrimary} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.profileCard}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=rahul' }} style={styles.avatar} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Rahul Sharma</Text>
            <Text style={styles.gotra}>Kashyap Gotra • Varanasi</Text>
            <TouchableOpacity style={styles.editBtn}>
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>12</Text>
            <Text style={styles.statLabel}>Pujas Done</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>₹4.5K</Text>
            <Text style={styles.statLabel}>Total Seva</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>850</Text>
            <Text style={styles.statLabel}>Karma Points</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spiritual Activity</Text>
          <MenuItem 
            icon={<History size={20} color={Colors.saffron} />} 
            title="Puja History" 
            subtitle="Past bookings & receipts" 
            onPress={() => {}}
          />
          <MenuItem 
            icon={<Heart size={20} color={Colors.saffron} />} 
            title="My Contributions" 
            subtitle="Donation history & transparency wall" 
            onPress={() => {}}
          />
          <MenuItem 
            icon={<MapPin size={20} color={Colors.saffron} />} 
            title="Favorite Temples" 
            subtitle="Kashi Vishwanath, Somnath..." 
            onPress={() => {}}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.prefItem}>
            <View style={styles.prefInfo}>
              <Bell size={20} color={Colors.light.textSecondary} />
              <Text style={styles.prefText}>Push Notifications</Text>
            </View>
            <Switch value={true} trackColor={{ true: Colors.saffron }} />
          </View>
          <MenuItem 
            icon={<Shield size={20} color={Colors.light.textSecondary} />} 
            title="Security & Privacy" 
            onPress={() => {}}
          />
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <LogOut size={20} color="#FF5252" />
          <Text style={styles.logoutText}>Logout from Platform</Text>
        </TouchableOpacity>
        
        <Text style={styles.version}>DIVYA v1.0.4 • Made with ❤️ for Bharat</Text>
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const MenuItem = ({ icon, title, subtitle, onPress }: any) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuLeft}>
      <View style={styles.iconBox}>{icon}</View>
      <View>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
    </View>
    <ChevronRight size={18} color={Colors.light.textTertiary} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.bg },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  headerTitle: { fontSize: 22, fontFamily: Typography.fonts.serifBold },
  scroll: { padding: 20 },
  profileCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 24, ...Shadow.card, marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginRight: 20 },
  profileInfo: { flex: 1 },
  name: { fontSize: 20, fontFamily: Typography.fonts.serifBold, color: Colors.light.textPrimary },
  gotra: { fontSize: 13, color: Colors.light.textSecondary, marginTop: 4, fontFamily: Typography.fonts.sansRegular },
  editBtn: { marginTop: 10, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: Colors.light.surface2, borderRadius: 8, alignSelf: 'flex-start' },
  editBtnText: { fontSize: 11, fontFamily: Typography.fonts.sansSemiBold, color: Colors.light.textSecondary },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statBox: { flex: 1, alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 5, padding: 15, borderRadius: 16, ...Shadow.card },
  statVal: { fontSize: 18, fontFamily: Typography.fonts.mono, color: Colors.saffron, fontWeight: 'bold' },
  statLabel: { fontSize: 10, color: Colors.light.textTertiary, marginTop: 4, textTransform: 'uppercase' },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 16, fontFamily: Typography.fonts.serifBold, marginBottom: 15, color: Colors.light.textPrimary },
  menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: 16, borderRadius: 16, marginBottom: 12, ...Shadow.card },
  menuLeft: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#FFF9F2', justifyContent: 'center', alignItems: 'center' },
  menuTitle: { fontSize: 15, fontFamily: Typography.fonts.sansSemiBold, color: Colors.light.textPrimary },
  menuSubtitle: { fontSize: 11, color: Colors.light.textTertiary, marginTop: 2 },
  prefItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', padding: 16, borderRadius: 16, marginBottom: 12, ...Shadow.card },
  prefInfo: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  prefText: { fontSize: 15, fontFamily: Typography.fonts.sansSemiBold, color: Colors.light.textPrimary },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 20, padding: 16 },
  logoutText: { color: '#FF5252', fontSize: 15, fontFamily: Typography.fonts.sansSemiBold },
  version: { textAlign: 'center', fontSize: 10, color: Colors.light.textTertiary, marginTop: 10 }
});
