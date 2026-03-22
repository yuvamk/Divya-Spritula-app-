import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function PujaTrackingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>DIVYA</Text>
        </View>
        <MaterialCommunityIcons name="bell-outline" size={24} color="#FFF" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Booking Ref */}
        <View style={styles.refCard}>
           <View style={styles.refHeader}>
              <View>
                <Text style={styles.refLabel}>BOOKING REFERENCE</Text>
                <Text style={styles.refId}>#DV-8829-X1</Text>
              </View>
              <View style={styles.priorityBadge}>
                <Text style={styles.priorityText}>Priority Seva</Text>
              </View>
           </View>
           <View style={styles.refDetails}>
              <View style={styles.detailItem}>
                <MaterialCommunityIcons name="fireplace" size={20} color={Colors.primary} />
                <View>
                  <Text style={styles.detailTitle}>Maha Mrityunjaya Puja</Text>
                  <Text style={styles.detailSub}>Vedic Chanting & Hawan</Text>
                </View>
              </View>
              <View style={styles.detailItem}>
                <MaterialCommunityIcons name="account-circle" size={20} color={Colors.gold} />
                <View>
                  <Text style={styles.detailTitle}>Pandit Ravishankar Shastri</Text>
                  <Text style={styles.detailSub}>Kashi Vishwanath Mandir, Varanasi</Text>
                </View>
              </View>
           </View>
        </View>

        {/* Live Darshan */}
        <View style={styles.liveSection}>
          <View style={styles.liveHeader}>
            <View style={styles.liveIndicator}>
               <View style={styles.pulseDot} />
               <Text style={styles.liveText}>LIVE DARSHAN</Text>
            </View>
            <View style={styles.viewerBadge}>
              <Text style={styles.viewerText}>108 VIEWERS</Text>
            </View>
          </View>
          <View style={styles.videoWrapper}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ4iu4KyNGgUL2S4GPjHQG17obuf6Tr0sKVijnlrzIS_xoI4rvBa8Lv4sR5yj-Wjtjon7R40ajjDDBryfltqB2Oew9rsBiErEGITIF--Mq8XVvpzzPbUoRfvkl-WcMdtmwuwuw4eFIwAIJ3qQMJBWUNDIf5gLSHd7t2g2y5TW_YFOU1NIfWuxsWOa4Nw_i6Kwz4EGRpYRqTaMeYWESz7f_eKBOlBrsctJnXIBbspPjN7Mkjycyhol0EgxEhAeKiD0zMRfXsCqVS0kZ' }} 
              style={styles.videoPlaceholder} 
            />
            <View style={styles.videoOverlay}>
              <View style={styles.playButton}>
                <MaterialCommunityIcons name="play" size={40} color="#FFF" />
              </View>
              <View style={styles.locationTag}>
                <MaterialCommunityIcons name="map-marker" size={14} color="#FFF" />
                <Text style={styles.locationTagText}>Ganga Ghat, Varanasi</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Timeline */}
        <View style={styles.timelineSection}>
          <Text style={styles.sectionTitle}>Sankalp Progress</Text>
          <View style={styles.timeline}>
            {[
              { title: 'Booking Confirmed', sub: 'Varanasi Desk, 08:30 AM', status: 'done' },
              { title: 'Pandit accepted', sub: 'Acharya Ravishankar assigned', status: 'done' },
              { title: 'Puja shuru', sub: 'Mantra Jaap in progress...', status: 'active' },
              { title: 'Puja ho rahi', sub: 'Aarti & Pushpanjali', status: 'pending' },
            ].map((step, i) => (
              <View key={i} style={styles.timelineItem}>
                <View style={styles.timelineLeading}>
                  <View style={[
                    styles.timelineDot,
                    step.status === 'done' && styles.dotDone,
                    step.status === 'active' && styles.dotActive,
                  ]}>
                    {step.status === 'done' && <MaterialCommunityIcons name="check" size={12} color="#FFF" />}
                    {step.status === 'active' && <View style={styles.dotPulse} />}
                  </View>
                  {i < 3 && <View style={[styles.timelineLine, step.status === 'done' && styles.lineDone]} />}
                </View>
                <View style={styles.timelineContent}>
                  <Text style={[styles.stepTitle, step.status === 'active' && { color: Colors.primary }]}>{step.title}</Text>
                  <Text style={styles.stepSub}>{step.sub}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Proofs */}
        <View style={styles.proofsSection}>
          <Text style={styles.sectionTitle}>Punya Proofs</Text>
          <View style={styles.proofGrid}>
             <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Ummu0twcbzOPUn6PQYLyPjcjwlzaOoydSt7p63HdWhYj4lIGy_Woe-GuRD_6IfyN-iJYfZCFBAC9M1N_aj-6moSLStCgIaHbQ_hNAz-WS_GwzEuzZx9F6RV0oJtqKG4Ij-n42_Yua8c3ixad52YzLPQpvi1Dj3JWT8Pez-vH-YyXFLxPtLlQOoQ7YF2SLD3ow0o4P29fOnfQufWTs84H3Pyo2IPGI41jO6aMtaHji5FlABO-MDILcv5H50KaG8XbyFCBBlafKdQW' }} style={styles.proofImage} />
             <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqct-NfZrYJxsOk49WWNJuYda8Ds9TuKoZDnaySGgbxIkyrPIuLEPSgCdm3_zYchKzvoa25ZJ3O9az04DLRTlBIrTvDzZALFCHaDRPJxI8csGMAHlBQU-5I3W0PqtnV5ZBI4_ol5T1yXuO7zU0IXF49C_vxaGcPKa-Vj8dIk0fUaZrvfLhpyqxR2pQAOWyaS-sg-bF2-giyGr4-4-QgJEgoJwa4KSyPgWGexP1e4vlmQsv7XqR7mwQBnvZgnRNZHS9Bm6NkOzFWctJ' }} style={styles.proofImage} />
             <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7-Hk6fgJ9PTtg7z_Su1JRjHmxNjd0LqoJ0HeRm1x-nExzUgMlTn-6W4uTki5p_GgCFDaxRyxq_lx19QYwsKja4g4s1ehRxZIL6Ajm3eBxFknQXs1E9-u1lQh35MWCnYHVTJ4ugkvcsCfNCFwH21XiG-jcMZLk7KVb8sXp3i6F-tSlc0d-pLbi26hAyPh-xDkRjvvev5qGlXQjlo3RjIwCXdCykOsCyl-CH4H2tzz01dkMdFoBij54At-Xy3Kid3v30tYZSPgMUM3q' }} style={styles.proofImage} />
             <TouchableOpacity style={styles.proofMore}>
                <MaterialCommunityIcons name="dots-horizontal" size={24} color={Colors.light.textTertiary} />
             </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.videoButton}>
            <MaterialCommunityIcons name="video-library" size={20} color={Colors.primary} />
            <Text style={styles.videoButtonText}>PUJA VIDEO DEKHO</Text>
          </TouchableOpacity>
        </View>

        {/* Prasad */}
        <View style={styles.prasadSection}>
           <View style={styles.prasadHeader}>
             <Text style={styles.sectionTitle}>Prasad Tracking</Text>
             <View style={styles.prasadBadge}>
               <Text style={styles.prasadBadgeText}>SHIPMENT #PR-001</Text>
             </View>
           </View>
           <View style={styles.mapMock}>
             <View style={styles.mapPath}>
               <View style={styles.mapPoint}><MaterialCommunityIcons name="temple-hindu" size={16} color={Colors.primary} /></View>
               <View style={styles.mapDash} />
               <View style={[styles.mapPoint, { opacity: 0.4 }]}><MaterialCommunityIcons name="home" size={16} color={Colors.gold} /></View>
             </View>
           </View>
           <View style={styles.prasadStatus}>
             <MaterialCommunityIcons name="truck-delivery" size={24} color={Colors.primary} />
             <View>
               <Text style={styles.statusTitle}>En Route to Hub</Text>
               <Text style={styles.statusSub}>Estimated arrival: Wednesday, 4 PM</Text>
             </View>
           </View>
           <TouchableOpacity style={styles.confirmButton}>
              <LinearGradient colors={[Colors.primary, Colors.primaryContainer]} style={styles.confirmGradient}>
                <Text style={styles.confirmText}>CONFIRM DELIVERY</Text>
              </LinearGradient>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.bg,
  },
  header: {
    height: 56,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontFamily: Typography.fonts.serifBold,
    fontSize: 20,
    color: '#FFF',
    letterSpacing: 2,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
    gap: 32,
  },
  refCard: {
    backgroundColor: '#FFF',
    borderRadius: Radius.lg,
    overflow: 'hidden',
    borderTopWidth: 4,
    borderTopColor: Colors.primary,
    ...Shadow.card,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  refHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: 'rgba(171, 46, 21, 0.02)',
  },
  refLabel: {
    fontSize: 10,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textTertiary,
    letterSpacing: 1,
  },
  refId: {
    fontFamily: Typography.fonts.mono,
    fontSize: 20,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  priorityBadge: {
    backgroundColor: Colors.saffronLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 100,
  },
  priorityText: {
    fontSize: 10,
    color: Colors.gold,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  refDetails: {
    padding: 24,
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailTitle: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textPrimary,
  },
  detailSub: {
    fontSize: 12,
    color: Colors.light.textTertiary,
    fontFamily: Typography.fonts.sansRegular,
  },
  liveSection: {
    gap: 16,
  },
  liveHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pulseDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.error,
  },
  liveText: {
    fontFamily: Typography.fonts.serifBold,
    fontSize: 18,
    color: Colors.light.textPrimary,
  },
  viewerBadge: {
    backgroundColor: Colors.light.surface2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  viewerText: {
    fontSize: 10,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textSecondary,
  },
  videoWrapper: {
    height: width * 0.56,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#000',
    ...Shadow.lg,
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  videoOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  locationTag: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationTagText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  timelineSection: {
    backgroundColor: Colors.light.surface2,
    borderRadius: Radius.lg,
    padding: 24,
  },
  sectionTitle: {
    fontFamily: Typography.fonts.serifBold,
    fontSize: 20,
    color: Colors.light.textPrimary,
    marginBottom: 24,
  },
  timeline: {
    paddingLeft: 8,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: 16,
  },
  timelineLeading: {
    alignItems: 'center',
    width: 24,
  },
  timelineDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.light.border,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  dotDone: {
    backgroundColor: Colors.primary,
  },
  dotActive: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  dotPulse: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  timelineLine: {
    width: 2,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: -2,
  },
  lineDone: {
    backgroundColor: Colors.primary,
  },
  timelineContent: {
    paddingBottom: 24,
  },
  stepTitle: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textSecondary,
  },
  stepSub: {
    fontSize: 12,
    color: Colors.light.textTertiary,
  },
  proofsSection: {
    gap: 16,
  },
  proofGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  proofImage: {
    width: (width - 68) / 2,
    height: (width - 68) / 2,
    borderRadius: 16,
  },
  proofMore: {
    width: (width - 68) / 2,
    height: (width - 68) / 2,
    borderRadius: 16,
    backgroundColor: Colors.light.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoButton: {
    width: '100%',
    height: 56,
    borderRadius: Radius.md,
    backgroundColor: Colors.light.surface2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  videoButtonText: {
    fontSize: 12,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textPrimary,
    letterSpacing: 1,
  },
  prasadSection: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 24,
    ...Shadow.card,
    gap: 24,
  },
  prasadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prasadBadge: {
    backgroundColor: Colors.saffronLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  prasadBadgeText: {
    fontSize: 10,
    color: Colors.gold,
    fontFamily: Typography.fonts.mono,
    fontWeight: 'bold',
  },
  mapMock: {
    height: 96,
    backgroundColor: Colors.light.surface2,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mapPath: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
  },
  mapPoint: {
    backgroundColor: '#FFF',
    padding: 4,
    borderRadius: 100,
    ...Shadow.sm,
  },
  mapDash: {
    flex: 1,
    height: 2,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderStyle: 'dashed',
    marginHorizontal: 8,
    opacity: 0.3,
  },
  prasadStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: Colors.light.surface2,
    padding: 16,
    borderRadius: 16,
  },
  statusTitle: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  statusSub: {
    fontSize: 12,
    color: Colors.light.textTertiary,
  },
  confirmButton: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  confirmGradient: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: '#FFF',
    fontFamily: Typography.fonts.sansSemiBold,
    letterSpacing: 1,
  },
});
