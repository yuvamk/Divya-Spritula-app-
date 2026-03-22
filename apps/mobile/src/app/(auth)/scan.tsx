import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Dimensions, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Typography, Spacing, Radius, Shadow, Gradients } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { BlurView } from 'expo-blur';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { VerifiedBadge } from '@/components/ui/VerifiedBadge';
import { DivyaButton } from '@/components/ui/DivyaButton';
import { SaffronDivider } from '@/components/ui/SaffronDivider';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function ScanScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [temple, setTemple] = useState<any>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!permission) requestPermission();
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: 240,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (scanned) return;
    setScanned(true);
    // Mocking temple discovery
    const mockTemple = {
      id: 'T1',
      name: 'Shri Kashi Vishwanath',
      subtitle: 'श्री काशी विश्वनाथ',
      location: 'Varanasi, Uttar Pradesh',
      devotees: '12,450',
      pandit: 'Acharya Brajesh Shastri',
      image: 'https://images.unsplash.com/photo-1627894741916-d36166299318?q=80&w=600&h=400&auto=format&fit=crop',
      panditAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop'
    };
    setTemple(mockTemple);
    bottomSheetRef.current?.expand();
  };

  if (!permission?.granted) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={styles.permissionText}>Access to camera is needed to scan Mandir QR</Text>
        <DivyaButton title="Grant Permission" onPress={requestPermission} style={{ width: '80%', marginBottom: 16 }} />
        <DivyaButton 
          title="Developer Bypass (Skip Scan)" 
          onPress={() => handleBarCodeScanned({ data: 'mock' })} 
          style={{ width: '80%', backgroundColor: Colors.secondary }} 
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
      />
      
      <SafeAreaView style={styles.overlay}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerIconButton}>
            <BlurView intensity={30} tint="dark" style={styles.blurCircle}>
              <MaterialCommunityIcons name="chevron-left" size={28} color="#FFF" />
            </BlurView>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>DIVYA</Text>
          <View style={{ width: 44 }} />
        </View>

        <View style={styles.scanTarget}>
          <Text style={styles.instructionTextHindi}>मंदिर का QR स्कैन करें</Text>
          <Text style={styles.instructionTextEnglish}>Scan Temple QR Code</Text>
          
          <View style={styles.qrFrame}>
            <View style={styles.cornerTL} />
            <View style={styles.cornerTR} />
            <View style={styles.cornerBL} />
            <View style={styles.cornerBR} />
            <Animated.View style={[styles.scanLine, { transform: [{ translateY: scanLineAnim }] }]} />
          </View>

          <TouchableOpacity onPress={() => handleBarCodeScanned({ data: 'mock' })} style={styles.manualAction}>
            <Text style={styles.manualText}>Or search temple by name (Bypass)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerActions}>
          <BlurView intensity={20} tint="dark" style={styles.controlBadge}>
            <MaterialCommunityIcons name="flashlight" size={20} color="#FFF" />
          </BlurView>
          <BlurView intensity={20} tint="dark" style={styles.controlBadge}>
            <MaterialCommunityIcons name="help-circle-outline" size={20} color="#FFF" />
            <Text style={styles.badgeText}>Help</Text>
          </BlurView>
        </View>
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={['55%']}
        enablePanDownToClose
        onClose={() => setScanned(false)}
        handleIndicatorStyle={{ backgroundColor: Colors.light.surfaceHighest, width: 40 }}
        backgroundStyle={{ backgroundColor: Colors.light.background, borderRadius: Radius.xxl }}
      >
        <BottomSheetView style={styles.sheetContent}>
          {temple && (
            <View style={styles.templePreview}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: temple.image }} style={styles.templeImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.6)']}
                  style={styles.imageOverlay}
                />
                <View style={styles.devoteeTag}>
                  <MaterialCommunityIcons name="account-group" size={14} color="#FFF" />
                  <Text style={styles.tagText}>{temple.devotees} Devotees</Text>
                </View>
              </View>
              
              <View style={styles.detailsContainer}>
                <View style={styles.titleRow}>
                  <View style={{ flex: 1 }}>
                    <View style={styles.nameRow}>
                      <Text style={styles.templeName}>{temple.name}</Text>
                      <VerifiedBadge size={18} />
                    </View>
                    <Text style={styles.templeSubtitle}>{temple.subtitle}</Text>
                    <View style={styles.locationRow}>
                      <MaterialCommunityIcons name="map-marker-outline" size={12} color={Colors.light.onSurfaceVar} />
                      <Text style={styles.locationText}>{temple.location}</Text>
                    </View>
                  </View>
                </View>

                <SaffronDivider marginVertical={Spacing.md} />

                <View style={styles.panditCard}>
                  <Image source={{ uri: temple.panditAvatar }} style={styles.panditAvatar} />
                  <View>
                    <Text style={styles.panditLabel}>Main Pandit</Text>
                    <Text style={styles.panditName}>{temple.pandit}</Text>
                  </View>
                </View>

                <View style={styles.sheetActions}>
                  <DivyaButton 
                    title="Community जॉइन करें" 
                    onPress={() => router.push({ pathname: '/(auth)/register', params: { templeId: temple.id } })}
                    style={{ flex: 1.5 }}
                  />
                  <TouchableOpacity style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  permissionText: {
    color: '#FFF',
    fontFamily: Typography.fonts.body,
    fontSize: Typography.sizes.body,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    paddingHorizontal: 40,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: 10,
  },
  headerIconButton: {
    borderRadius: 22,
    overflow: 'hidden',
  },
  blurCircle: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.h1,
    color: '#FFF',
    letterSpacing: 4,
  },
  scanTarget: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionTextHindi: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.h2,
    color: '#FFF',
    textAlign: 'center',
  },
  instructionTextEnglish: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.body,
    color: '#FFF',
    opacity: 0.8,
    marginTop: 4,
    marginBottom: 40,
  },
  qrFrame: {
    width: 260,
    height: 260,
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  cornerTL: { position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderTopWidth: 4, borderLeftWidth: 4, borderColor: Colors.accent },
  cornerTR: { position: 'absolute', top: 0, right: 0, width: 30, height: 30, borderTopWidth: 4, borderRightWidth: 4, borderColor: Colors.accent },
  cornerBL: { position: 'absolute', bottom: 0, left: 0, width: 30, height: 30, borderBottomWidth: 4, borderLeftWidth: 4, borderColor: Colors.accent },
  cornerBR: { position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderBottomWidth: 4, borderRightWidth: 4, borderColor: Colors.accent },
  scanLine: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.accent,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  manualAction: {
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: Radius.pill,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  manualText: {
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.caption,
    color: '#FFF',
  },
  footerActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.lg,
    paddingBottom: 40,
  },
  controlBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.pill,
    gap: 8,
    overflow: 'hidden',
  },
  badgeText: {
    color: '#FFF',
    fontFamily: Typography.fonts.label,
    fontSize: 12,
  },
  sheetContent: {
    flex: 1,
  },
  templePreview: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: 160,
    overflow: 'hidden',
  },
  templeImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  devoteeTag: {
    position: 'absolute',
    bottom: 12,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radius.sm,
    gap: 4,
  },
  tagText: {
    color: '#FFF',
    fontFamily: Typography.fonts.label,
    fontSize: 10,
  },
  detailsContainer: {
    padding: Spacing.lg,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  templeName: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.h2,
    color: Colors.light.onSurface,
  },
  templeSubtitle: {
    fontFamily: Typography.fonts.title,
    fontSize: Typography.sizes.body,
    color: Colors.primary,
    marginTop: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  locationText: {
    fontFamily: Typography.fonts.body,
    fontSize: Typography.sizes.caption,
    color: Colors.light.onSurfaceVar,
  },
  panditCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceLow,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  panditAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  panditLabel: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.light.onSurfaceVar,
    textTransform: 'uppercase',
  },
  panditName: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.body,
    color: Colors.secondary,
  },
  sheetActions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: Colors.light.surfaceHigh,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.body,
    color: Colors.light.onSurface,
  }
});

