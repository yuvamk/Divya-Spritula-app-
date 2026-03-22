import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StarRating } from '@/components/ui/StarRating';
import { SaffronDivider } from '@/components/ui/SaffronDivider';

export default function SharedPanditProfile() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
           <Image 
             source={{ uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' }} 
             style={styles.heroImg} 
           />
           <LinearGradient 
              colors={['transparent', 'rgba(0,0,0,0.9)']} 
              style={styles.heroOverlay}
           />
           <TouchableOpacity style={styles.backBtn}>
              <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
           </TouchableOpacity>
           
           <View style={styles.heroText}>
              <Text style={styles.name}>Pt. Ramesh Sharma</Text>
              <View style={styles.locationRow}>
                 <MaterialCommunityIcons name="map-marker" size={14} color="rgba(255,255,255,0.7)" />
                 <Text style={styles.location}>Kashi Vishwanath, Varanasi</Text>
              </View>
           </View>
        </View>

        <View style={styles.statsBar}>
           <View style={styles.statItem}>
              <StarRating rating={4.9} size={14} />
              <Text style={styles.statLabel}>4.9/5 Rating</Text>
           </View>
           <View style={styles.divider} />
           <View style={styles.statItem}>
              <Text style={styles.statVal}>15 yrs</Text>
              <Text style={styles.statLabel}>Experience</Text>
           </View>
           <View style={styles.divider} />
           <View style={styles.statItem}>
              <Text style={styles.statVal}>1.2k+</Text>
              <Text style={styles.statLabel}>Total Pujas</Text>
           </View>
        </View>

        <View style={styles.content}>
           <View style={styles.aiSummaryCard}>
              <View style={styles.aiHeader}>
                 <MaterialCommunityIcons name="creation" size={18} color={Colors.accent} />
                 <Text style={styles.aiTitle}>DIVYA AI INSIGHT</Text>
              </View>
              <Text style={styles.aiText}>
                 Pt. Ramesh is highly recommended for **Satyanarayan Katha** and **Rudrabhishek**. Devotees consistently appreciate his deep knowledge of shlokas and his calm, explanatory approach during rituals.
              </Text>
           </View>

           <Text style={styles.sectionTitle}>Sacred Specialisations</Text>
           <View style={styles.chipGrid}>
              {['Rudrabhishek', 'Satyanarayan Katha', 'Mahamrityunjaya', 'Ganesh Puja'].map((chip, i) => (
                <View key={i} style={styles.chip}>
                   <Text style={styles.chipText}>{chip}</Text>
                </View>
              ))}
           </View>

           <SaffronDivider marginVertical={Spacing.lg} />

           <Text style={styles.sectionTitle}>About the Pandit</Text>
           <Text style={styles.bio}>
              Deeply rooted in the Vedic traditions of Kashi, I have been serving devotees for over 15 years. My mission is to bridge the gap between ancient rituals and modern convenience through DIVYA.
           </Text>

           <View style={styles.availCard}>
              <LinearGradient colors={[Colors.primary, '#800000']} style={styles.availGrad}>
                 <View style={styles.availLeft}>
                    <Text style={styles.availTitle}>Next Availability</Text>
                    <Text style={styles.availSub}>Tomorrow, 04:30 AM Slot</Text>
                 </View>
                 <TouchableOpacity style={styles.availBtn}>
                    <Text style={styles.availBtnText}>Book Now</Text>
                 </TouchableOpacity>
              </LinearGradient>
           </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
         <View style={styles.priceCol}>
            <Text style={styles.priceLabel}>PUJA STARTING FROM</Text>
            <Text style={styles.priceVal}>₹1,100</Text>
         </View>
         <TouchableOpacity style={styles.contactBtn}>
            <LinearGradient colors={[Colors.maroon, Colors.maroonDeep]} style={styles.contactGrad}>
               <MaterialCommunityIcons name="message-text-outline" size={24} color="#FFF" />
               <Text style={styles.contactText}>Consult AI Chat</Text>
            </LinearGradient>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.bg },
  hero: { height: 380 },
  heroImg: { width: '100%', height: '100%' },
  heroOverlay: { ...StyleSheet.absoluteFillObject },
  backBtn: { position: 'absolute', top: 60, left: 20, width: 44, height: 44, borderRadius: 22, backgroundColor: 'rgba(0,0,0,0.3)', alignItems: 'center', justifyContent: 'center' },
  heroText: { position: 'absolute', bottom: 40, left: 24 },
  name: { fontSize: 32, fontFamily: Typography.fonts.display, color: '#FFF' },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 4 },
  location: { fontSize: 14, color: 'rgba(255,255,255,0.7)', fontFamily: Typography.fonts.body },
  statsBar: { flexDirection: 'row', backgroundColor: '#FFF', marginHorizontal: 16, marginTop: -40, borderRadius: Radius.xl, height: 90, alignItems: 'center', ...Shadow.card },
  statItem: { flex: 1, alignItems: 'center', gap: 4 },
  statVal: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.textPrimary, fontWeight: '700' },
  statLabel: { fontSize: 11, color: Colors.light.textTertiary, fontFamily: Typography.fonts.label },
  divider: { width: 1, height: 40, backgroundColor: Colors.light.divider },
  content: { padding: 24, paddingBottom: 140 },
  aiSummaryCard: { backgroundColor: Colors.accent + '10', padding: 20, borderRadius: Radius.xxl, borderWidth: 1, borderColor: Colors.accent + '20', marginBottom: 32 },
  aiHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  aiTitle: { fontSize: 11, fontFamily: Typography.fonts.headline, color: Colors.accent, letterSpacing: 1.5, fontWeight: '700' },
  aiText: { fontSize: 15, color: Colors.light.textSecondary, lineHeight: 24, fontFamily: Typography.fonts.body },
  sectionTitle: { fontSize: 20, fontFamily: Typography.fonts.headline, color: Colors.light.textPrimary, marginBottom: 16, fontWeight: '700' },
  chipGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 8 },
  chip: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: Radius.full, backgroundColor: Colors.light.surfaceHigh },
  chipText: { fontSize: 13, color: Colors.light.textSecondary, fontFamily: Typography.fonts.body, fontWeight: '500' },
  bio: { fontSize: 16, color: Colors.light.textSecondary, lineHeight: 26, fontFamily: Typography.fonts.body, marginBottom: 32 },
  availCard: { borderRadius: Radius.xxl, overflow: 'hidden', ...Shadow.card },
  availGrad: { flexDirection: 'row', padding: 24, alignItems: 'center', justifyContent: 'space-between' },
  availLeft: { flex: 1 },
  availTitle: { color: '#FFF', fontSize: 18, fontFamily: Typography.fonts.headline, fontWeight: '700' },
  availSub: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 2 },
  availBtn: { backgroundColor: '#FFF', paddingHorizontal: 20, paddingVertical: 12, borderRadius: Radius.lg },
  availBtnText: { color: Colors.primary, fontSize: 14, fontFamily: Typography.fonts.headline, fontWeight: '700' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 110, backgroundColor: 'rgba(255,255,255,0.98)', borderTopWidth: 1, borderTopColor: Colors.light.divider, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingBottom: 25 },
  priceCol: { flex: 1 },
  priceLabel: { fontSize: 10, fontFamily: Typography.fonts.label, color: Colors.light.textTertiary, letterSpacing: 1 },
  priceVal: { fontSize: 24, fontFamily: Typography.fonts.headline, color: Colors.accent, fontWeight: '800' },
  contactBtn: { height: 56, borderRadius: Radius.xl, overflow: 'hidden', ...Shadow.card },
  contactGrad: { flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, gap: 10 },
  contactText: { color: '#FFF', fontSize: 16, fontFamily: Typography.fonts.headline, fontWeight: '700' },
});

