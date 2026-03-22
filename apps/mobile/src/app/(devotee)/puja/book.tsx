import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { DivyaButton } from '@/components/ui/DivyaButton';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AmountDisplay } from '@/components/ui/AmountDisplay';
import { DonationDriveCard } from '@/components/cards/DonationDriveCard';

const { width } = Dimensions.get('window');

export default function PujaBookingScreen() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [aiGenerating, setAiGenerating] = useState(false);
  const [sankalp, setSankalp] = useState("");

  const generateSankalp = async () => {
    setAiGenerating(true);
    // Mimic AI Call
    setTimeout(() => {
      setSankalp("अद्य श्री शुभ मुहूर्ते, काश्यप गोत्रोद्भवः राहुल शर्मा, मम परिवारस्य आरोग्य-सुख-समृद्धि सिद्धार्थं 'महारुद्राभिषेक' पूजनं करिष्ये...");
      setAiGenerating(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <MaterialCommunityIcons name="chevron-left" size={28} color={Colors.light.onSurface} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sankalp Flow</Text>
            <View style={{ width: 44 }} />
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.progressBar}>
        {[1, 2, 3, 4].map(i => (
          <View key={i} style={styles.progressStep}>
            <View style={[styles.stepIndicator, step >= i && styles.activeStepIndicator]}>
              {step > i ? (
                <MaterialCommunityIcons name="check" size={14} color="#FFF" />
              ) : (
                <Text style={[styles.stepNum, step >= i && styles.activeStepNum]}>{i}</Text>
              )}
            </View>
            {i < 4 && <View style={[styles.stepLine, step > i && styles.activeStepLine]} />}
          </View>
        ))}
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {step === 1 && (
          <View style={styles.stepContainer}>
            <Text style={styles.sectionTitle}>Chuna Hua Pandit</Text>
            <TouchableOpacity style={styles.panditCard}>
              <Image source={{ uri: 'https://i.pravatar.cc/150?u=1' }} style={styles.pImg} />
              <View style={styles.pInfo}>
                <Text style={styles.pName}>Pt. Ramesh Sharma</Text>
                <Text style={styles.pDetail}>Varanasi • 15+ Yrs Exp</Text>
              </View>
              <MaterialCommunityIcons name="certificate" size={24} color={Colors.primary} />
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Auspicious Muhurat</Text>
            <LinearGradient
              colors={[Colors.primary + '10', Colors.secondary + '10']}
              style={styles.aiMuhurat}
            >
              <View style={styles.muhuratHeader}>
                <MaterialCommunityIcons name="sparkles" size={16} color={Colors.primary} />
                <Text style={styles.aiTitle}>AI MUHURAT CALCULATOR</Text>
              </View>
              <Text style={styles.muhuratDetail}>Next Shubh Muhurat for Rudrabhishek:</Text>
              <Text style={styles.muhuratTime}>Tomorrow, 22 March • 06:15 AM</Text>
              <View style={styles.muhuratBadge}>
                <Text style={styles.muhuratBadgeText}>Brahma Muhurta (Highly Recommended)</Text>
              </View>
            </LinearGradient>
          </View>
        )}

        {step === 2 && (
          <View style={styles.stepContainer}>
            <View style={styles.aiSankalpBox}>
              <View style={styles.muhuratHeader}>
                <MaterialCommunityIcons name="auto-fix" size={18} color={Colors.primary} />
                <Text style={styles.aiTitle}>DIVINE SANKALP ASSIST</Text>
              </View>
              <Text style={styles.sankalpIntro}>Your personal AI Sanskritic assistant has woven a custom Sankalp from your Gotra and Intent.</Text>
              
              <View style={styles.sankalpTextContainer}>
                {aiGenerating ? (
                  <View style={styles.aiLoading}>
                    <MaterialCommunityIcons name="loading" size={32} color={Colors.primary} style={styles.spinner} />
                    <Text style={styles.generating}>Chanting... Aligning with stars...</Text>
                  </View>
                ) : (
                  <Text style={styles.sankalpText}>{sankalp || "Tap below to invoke your personalized Vedic Sankalp"}</Text>
                )}
              </View>

              {!sankalp && !aiGenerating && (
                <TouchableOpacity style={styles.genBtn} onPress={generateSankalp}>
                  <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.genBtnGradient}>
                    <Text style={styles.genBtnText}>Invoke AI Sankalp</Text>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {step === 3 && (
          <View style={styles.stepContainer}>
             <Text style={styles.sectionTitle}>Seva Summary</Text>
             <BlurView intensity={20} tint="light" style={styles.summaryCard}>
               <SummaryRow label="Puja Type" value="Maha Rudrabhishek" />
               <SummaryRow label="Pandit" value="Pt. Ramesh Sharma" />
               <SummaryRow label="Date" value="22nd Mar, 2026" />
               <SummaryRow label="Location" value="Varanasi, UP" />
               <View style={styles.divider} />
               <View style={styles.totalRow}>
                 <Text style={styles.totalLabel}>Total Dakshina</Text>
                 <AmountDisplay amount={5100} size="md" color={Colors.primary} />
               </View>
             </BlurView>

             <View style={styles.trustBadge}>
                <MaterialCommunityIcons name="shield-check" size={20} color={Colors.accent} />
                <Text style={styles.trustText}>Funds held in Secure Escrow until AI verification.</Text>
             </View>
          </View>
        )}

        {step === 4 && (
          <View style={styles.completionContainer}>
            <View style={styles.successCircle}>
              <MaterialCommunityIcons name="check-all" size={48} color={Colors.primary} />
            </View>
            <Text style={styles.successTitle}>Sankalp Siddha!</Text>
            <Text style={styles.successDesc}>Your Puja has been successfully scheduled. You can track the live alignment in your dashboard.</Text>
            <DonationDriveCard 
               title="Contribute to Temple Restoration"
               temple="Kashi Vishwanath"
               image="https://images.unsplash.com/photo-1544013587-4142a2ca5896?q=80&w=400&h=400&auto=format&fit=crop"
               raised={450000}
               target={1000000}
               daysLeft={12}
               onPress={() => {}}
            />
          </View>
        )}
      </ScrollView>

      {step < 4 && (
        <View style={styles.footer}>
          <DivyaButton 
            title={step === 3 ? "DAKSHINA DEIN" : "AGLE CHARAN"} 
            onPress={() => setStep(step + 1)} 
          />
        </View>
      )}
      {step === 4 && (
        <View style={styles.footer}>
          <DivyaButton 
            title="GO TO DASHBOARD" 
            onPress={() => router.push('/(devotee)/home')} 
          />
        </View>
      )}
    </View>
  );
}

function SummaryRow({ label, value }: { label: string, value: string }) {
  return (
    <View style={styles.sRow}>
      <Text style={styles.sLabel}>{label}</Text>
      <Text style={styles.sValue}>{value}</Text>
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
  backBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: { 
    fontSize: 18, 
    fontFamily: Typography.fonts.headline, 
    color: Colors.light.onSurface,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    backgroundColor: '#FFF',
  },
  progressStep: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepIndicator: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.light.surfaceHigh,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeStepIndicator: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  stepNum: {
    fontSize: 12,
    fontFamily: Typography.fonts.label,
    color: Colors.light.onSurfaceVar,
    fontWeight: '700',
  },
  activeStepNum: {
    color: '#FFF',
  },
  stepLine: {
    width: 40,
    height: 2,
    backgroundColor: Colors.light.surfaceHigh,
    marginHorizontal: 4,
  },
  activeStepLine: {
    backgroundColor: Colors.primary,
  },
  scrollContent: { 
    padding: Spacing.lg,
    paddingBottom: 40,
  },
  stepContainer: {
    gap: Spacing.lg,
  },
  sectionTitle: { 
    fontSize: Typography.sizes.h3, 
    fontFamily: Typography.fonts.headline, 
    color: Colors.light.onSurface,
  },
  panditCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: Spacing.lg, 
    backgroundColor: '#FFF', 
    borderRadius: Radius.xl, 
    ...Shadow.card,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  pImg: { width: 56, height: 56, borderRadius: Radius.pill, marginRight: Spacing.md },
  pInfo: { flex: 1 },
  pName: { fontSize: 16, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  pDetail: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.body },
  aiMuhurat: { 
    padding: Spacing.xl, 
    borderRadius: Radius.xxl, 
    borderWidth: 1, 
    borderColor: Colors.primary + '20',
  },
  muhuratHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 12 },
  aiTitle: { fontSize: 10, fontFamily: Typography.fonts.label, color: Colors.primary, letterSpacing: 1.5, fontWeight: '700' },
  muhuratDetail: { fontSize: 14, color: Colors.light.onSurfaceVar, marginBottom: 8, fontFamily: Typography.fonts.body },
  muhuratTime: { fontSize: 24, fontFamily: Typography.fonts.display, color: Colors.primary, marginBottom: 12 },
  muhuratBadge: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary + '15',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.sm,
  },
  muhuratBadgeText: { fontSize: 11, color: Colors.primary, fontFamily: Typography.fonts.label, fontWeight: '700' },
  aiSankalpBox: { 
    backgroundColor: '#FFF', 
    padding: Spacing.xl, 
    borderRadius: Radius.xxl, 
    borderWidth: 1, 
    borderColor: Colors.primary + '20',
    ...Shadow.card,
  },
  sankalpIntro: { fontSize: 14, color: Colors.light.onSurfaceVar, marginBottom: Spacing.xl, lineHeight: 22, fontFamily: Typography.fonts.body },
  sankalpTextContainer: { 
    minHeight: 180, 
    padding: Spacing.lg, 
    backgroundColor: Colors.light.surfaceLow, 
    borderRadius: Radius.xl, 
    borderWidth: 1, 
    borderColor: Colors.primary + '10', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  sankalpText: { 
    fontSize: 16, 
    fontFamily: Typography.fonts.display, 
    color: Colors.maroon, 
    textAlign: 'center', 
    lineHeight: 28 
  },
  aiLoading: { alignItems: 'center' },
  spinner: { marginBottom: 12 },
  generating: { fontSize: 12, color: Colors.primary, textAlign: 'center', fontStyle: 'italic', fontFamily: Typography.fonts.body },
  genBtn: { marginTop: Spacing.xl },
  genBtnGradient: {
    padding: 16,
    borderRadius: Radius.lg,
    alignItems: 'center',
  },
  genBtnText: { color: '#FFF', fontSize: 16, fontFamily: Typography.fonts.label, fontWeight: '700' },
  summaryCard: { 
    backgroundColor: 'rgba(255, 255, 255, 0.6)', 
    padding: Spacing.xl, 
    borderRadius: Radius.xxl,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
    overflow: 'hidden',
  },
  sRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  sLabel: { fontSize: 12, color: Colors.light.onSurfaceVar, fontFamily: Typography.fonts.label },
  sValue: { fontSize: 14, color: Colors.light.onSurface, fontFamily: Typography.fonts.headline },
  divider: { height: 1, backgroundColor: Colors.light.surfaceHigh, marginVertical: Spacing.lg },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  totalLabel: { fontSize: 14, fontFamily: Typography.fonts.headline, color: Colors.light.onSurface },
  trustBadge: { flexDirection: 'row', gap: 10, alignItems: 'center', padding: Spacing.lg, backgroundColor: Colors.accent + '10', borderRadius: Radius.lg },
  trustText: { flex: 1, fontSize: 12, color: Colors.accent, fontFamily: Typography.fonts.body, lineHeight: 18 },
  completionContainer: {
    alignItems: 'center',
    gap: Spacing.lg,
    paddingTop: 40,
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  successTitle: {
    fontSize: 32,
    fontFamily: Typography.fonts.display,
    color: Colors.primary,
  },
  successDesc: {
    fontSize: 14,
    fontFamily: Typography.fonts.body,
    color: Colors.light.onSurfaceVar,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: Spacing.xl,
  },
  footer: { 
    padding: Spacing.lg, 
    backgroundColor: '#FFF', 
    borderTopWidth: 1, 
    borderTopColor: Colors.light.surfaceHigh,
    paddingBottom: 34,
  }
});

