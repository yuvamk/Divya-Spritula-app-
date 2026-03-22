import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Share } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Share2, ShieldCheck, MapPin, Users } from 'lucide-react-native';
import { Colors, Typography, Radius, Shadow, spacing } from '@/constants/theme';
import { DivyaButton } from '@/components/ui/DivyaButton';
import { AmountInput } from '@/components/ui/AmountInput';
import { useRazorpayPayment } from '@/hooks/useRazorpayPayment';
import * as Progress from 'react-native-progress';

export default function SevaDetailScreen() {
  const { driveId } = useLocalSearchParams();
  const router = useRouter();
  const [amount, setAmount] = useState('1001');
  const [loading, setLoading] = useState(false);
  const { initiatePayment } = useRazorpayPayment();

  const handleDonate = async () => {
    setLoading(true);
    try {
      await initiatePayment({
        type: 'donation',
        amount: parseInt(amount),
        drive_id: driveId as string,
        description: 'Contribution to Temple Restoration'
      });
      router.push(`/(shared)/transparency/${driveId}`);
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Image */}
        <View style={styles.headerImgWrapper}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1544013587-4142a2ca5896' }} 
            style={styles.headerImg} 
          />
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <ChevronLeft color="#fff" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn} onPress={() => Share.share({ message: 'Join me in this Seva!' })}>
              <Share2 color="#fff" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.templeTag}>
            <MapPin size={12} color={Colors.saffron} />
            <Text style={styles.templeName}>Kashi Vishwanath, Varanasi</Text>
          </View>

          <Text style={styles.title}>Grand Temple Restoration Fund</Text>
          
          <View style={styles.statGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statVal}>4.5L</Text>
              <Text style={styles.statLabel}>Raised</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statVal}>10L</Text>
              <Text style={styles.statLabel}>Target</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statVal}>12</Text>
              <Text style={styles.statLabel}>Days Left</Text>
            </View>
          </View>

          <Progress.Bar 
            progress={0.45} 
            width={null} 
            color={Colors.saffron} 
            unfilledColor={Colors.saffronLight}
            height={8}
            borderRadius={4}
            borderWidth={0}
            style={styles.progressBar}
          />

          <View style={styles.verifiedBox}>
            <ShieldCheck size={20} color="#4CAF50" />
            <Text style={styles.verifiedText}>Transaction secured by Divya Escrow System. Donors will be etched on the Digital Transparency Wall.</Text>
          </View>

          <View style={styles.donationSection}>
            <Text style={styles.sectionTitle}>Choose Seva Amount</Text>
            <AmountInput value={amount} onChange={setAmount} />
          </View>

          <DivyaButton 
            title={`CONTRIBUTE ₹${amount}`} 
            onPress={handleDonate}
            loading={loading}
            style={styles.donateBtn}
          />

          <TouchableOpacity 
            style={styles.transparencyLink}
            onPress={() => router.push(`/(shared)/transparency/${driveId}`)}
          >
            <Users size={18} color={Colors.gold} />
            <Text style={styles.transparencyText}>View Transparency Wall (450+ donors)</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImgWrapper: {
    height: 300,
  },
  headerImg: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 24,
    marginTop: -30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  templeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  templeName: {
    fontSize: 12,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.saffron,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontFamily: Typography.fonts.serifBold,
    color: Colors.light.textPrimary,
    marginBottom: 24,
  },
  statGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statVal: {
    fontSize: 22,
    fontFamily: Typography.fonts.mono,
    color: Colors.light.textPrimary,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: Colors.light.textTertiary,
    fontFamily: Typography.fonts.sansRegular,
  },
  progressBar: {
    marginBottom: 32,
  },
  verifiedBox: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
    marginBottom: 32,
  },
  verifiedText: {
    flex: 1,
    fontSize: 12,
    color: '#33691E',
    lineHeight: 18,
    fontFamily: Typography.fonts.sansRegular,
  },
  donationSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textPrimary,
    textAlign: 'center',
    marginBottom: 10,
  },
  donateBtn: {
    height: 60,
  },
  transparencyLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    paddingBottom: 40,
  },
  transparencyText: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.gold,
  }
});
