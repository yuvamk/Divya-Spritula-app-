import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

export default function BookingDetailScreen() {
  const { bookingId } = useLocalSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'accepted' | 'inProgress' | 'proof_uploaded' | 'completed'>('accepted');
  const [uploading, setUploading] = useState(false);
  const [proofs, setProofs] = useState<string[]>([]);

  const handleUploadProof = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setUploading(true);
      setTimeout(() => {
        setProofs(result.assets.map(a => a.uri));
        setUploading(false);
        setStatus('proof_uploaded');
      }, 2000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <MaterialCommunityIcons name="chevron-left" size={28} color={Colors.light.onSurface} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Order #{bookingId?.toString()?.toUpperCase()}</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          style={styles.statusBanner}
        >
          <Text style={styles.statusLabel}>CURRENT STATUS</Text>
          <View style={styles.statusRow}>
             <View style={styles.statusIndicator} />
             <Text style={styles.statusValue}>{status.toUpperCase()}</Text>
          </View>
        </LinearGradient>

        <View style={styles.card}>
          <View style={styles.cardHeader}>
             <MaterialCommunityIcons name="script-text-outline" size={20} color={Colors.primary} />
             <Text style={styles.sectionTitle}>Devotee Sankalp</Text>
          </View>
          <BlurView intensity={10} tint="light" style={styles.sankalpBox}>
             <Text style={styles.sankalpText}>
               "OM SRI VISHNAVE NAMAH. Main Suresh Kashyap, Kashi se, aaj is punit avsar par apne parivar ki sukh-shanti aur swasthya labh hetu yeh Rudrabhishek puja sampann karne ka sankalp leta hoon..."
             </Text>
          </BlurView>
          <View style={styles.infoGrid}>
             <InfoItem label="GOTRA" value="Bhardwaj" />
             <InfoItem label="RASHI" value="Mesh" />
             <InfoItem label="VILLAGE" value="Kashi" />
          </View>
        </View>

        <View style={styles.aiCard}>
           <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="auto-fix" size={20} color={Colors.primary} />
              <Text style={styles.aiTitle}>DIVYA AI PREP ASSIST</Text>
           </View>
           <Text style={styles.aiNote}>
              Yajman requested specific prayers for kids' education. Include Saraswati Beej Mantra during the final aarti for divine blessings.
           </Text>
        </View>

        <View style={styles.card}>
           <Text style={styles.sectionTitle}>Puja Proof & Verification</Text>
           {status === 'accepted' || status === 'inProgress' ? (
             <TouchableOpacity 
               activeOpacity={0.8}
               style={styles.uploadBox} 
               onPress={handleUploadProof} 
               disabled={uploading}
             >
                {uploading ? (
                  <ActivityIndicator color={Colors.primary} />
                ) : (
                  <>
                    <MaterialCommunityIcons name="camera-plus" size={32} color={Colors.primary} />
                    <Text style={styles.uploadTitle}>Upload Ritual Proof</Text>
                    <Text style={styles.uploadSub}>Photos or Video (Max 50MB)</Text>
                  </>
                )}
             </TouchableOpacity>
           ) : (
             <View style={styles.proofGrid}>
                {proofs.map((uri, i) => (
                   <Image key={i} source={{ uri }} style={styles.proofImg} />
                ))}
                <View style={styles.aiVerifyBadge}>
                   <MaterialCommunityIcons name="shield-check" size={14} color="#FFF" />
                   <Text style={styles.aiVerifyText}>AI Verified</Text>
                </View>
             </View>
           )}
        </View>

        {status === 'proof_uploaded' && (
          <TouchableOpacity 
            style={styles.primaryBtn}
            onPress={() => setStatus('completed')}
          >
             <LinearGradient
               colors={[Colors.primary, Colors.secondary]}
               style={styles.btnGradient}
             >
                <Text style={styles.btnText}>Mark Puja as Completed</Text>
             </LinearGradient>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

function InfoItem({ label, value }: { label: string, value: string }) {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoVal}>{value}</Text>
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
  backBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { fontSize: 16, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  headerRight: { width: 44 },
  scrollContent: { padding: Spacing.lg, paddingBottom: 60 },
  statusBanner: { 
    padding: Spacing.xl, 
    borderRadius: Radius.xxl, 
    marginBottom: Spacing.xl,
    ...Shadow.card,
  },
  statusLabel: { 
    fontSize: 10, 
    color: 'rgba(255,255,255,0.7)', 
    fontFamily: Typography.fonts.label, 
    letterSpacing: 1.5,
    fontWeight: '700',
    marginBottom: 8,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  statusIndicator: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#FFF' },
  statusValue: { fontSize: 20, fontFamily: Typography.fonts.headline, color: '#FFF' },
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: Radius.xxl, 
    padding: Spacing.xl, 
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
    ...Shadow.card,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: Spacing.lg },
  sectionTitle: { fontSize: 18, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  sankalpBox: { 
    padding: 16, 
    backgroundColor: Colors.light.surfaceLow, 
    borderRadius: Radius.lg, 
    marginBottom: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  sankalpText: { 
    fontSize: 14, 
    lineHeight: 22, 
    fontFamily: Typography.fonts.body, 
    color: Colors.light.onSurfaceVar, 
    fontStyle: 'italic' 
  },
  infoGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  infoItem: { flex: 1 },
  infoLabel: { fontSize: 10, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.label, marginBottom: 4, fontWeight: '700' },
  infoVal: { fontSize: 14, color: Colors.light.onSurface, fontFamily: Typography.fonts.headline },
  aiCard: { 
    backgroundColor: Colors.primary + '08', 
    borderRadius: Radius.xl, 
    padding: Spacing.xl, 
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: Colors.primary + '20',
  },
  aiTitle: { fontSize: 11, fontFamily: Typography.fonts.label, color: Colors.primary, letterSpacing: 1, fontWeight: '700' },
  aiNote: { fontSize: 13, color: Colors.primary, lineHeight: 20, fontFamily: Typography.fonts.body, marginTop: 4 },
  uploadBox: { 
    height: 140, 
    backgroundColor: Colors.light.surfaceLow, 
    borderRadius: Radius.xl, 
    borderWidth: 1, 
    borderStyle: 'dashed', 
    borderColor: Colors.primary + '40',
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 8,
  },
  uploadTitle: { fontSize: 15, fontFamily: Typography.fonts.headline, color: Colors.primary },
  uploadSub: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body },
  proofGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  proofImg: { width: (width - Spacing.lg * 2 - Spacing.xl * 2 - 24) / 3, height: 80, borderRadius: Radius.md },
  aiVerifyBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 4, 
    backgroundColor: Colors.accent, 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: Radius.sm,
    marginTop: 8,
  },
  aiVerifyText: { fontSize: 10, color: '#FFF', fontFamily: Typography.fonts.label, fontWeight: '700' },
  primaryBtn: { borderRadius: Radius.xl, overflow: 'hidden', marginTop: Spacing.md, ...Shadow.card },
  btnGradient: { height: 56, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#FFF', fontSize: 16, fontFamily: Typography.fonts.headline }
});

