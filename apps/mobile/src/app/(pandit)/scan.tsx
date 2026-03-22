import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function PanditScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const router = useRouter();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    // In a real app, verify decimal/booking ID from data
    alert(`Verified Devotee QR: ${data}`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View style={styles.overlay}>
           <SafeAreaView edges={['top']} style={styles.header}>
              <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
                 <BlurView intensity={30} tint="light" style={styles.blurBack}>
                    <MaterialCommunityIcons name="close" size={24} color="#FFF" />
                 </BlurView>
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Verify Devotee</Text>
              <View style={{ width: 44 }} />
           </SafeAreaView>

           <View style={styles.scannerBox}>
              <View style={[styles.corner, styles.tl]} />
              <View style={[styles.corner, styles.tr]} />
              <View style={[styles.corner, styles.bl]} />
              <View style={[styles.corner, styles.br]} />
              
              <BlurView intensity={10} tint="light" style={styles.mask} />
           </View>

           <View style={styles.footer}>
              <Text style={styles.hint}>Align Devotee's QR code within the frame</Text>
              <View style={styles.aiBadge}>
                 <MaterialCommunityIcons name="auto-fix" size={16} color={Colors.primary} />
                 <Text style={styles.aiText}>AI Verification Active</Text>
              </View>
           </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  overlay: { flex: 1, justifyContent: 'space-between', paddingVertical: 40 },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  backBtn: { width: 44, height: 44, borderRadius: 22, overflow: 'hidden' },
  blurBack: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { 
    color: '#FFF', 
    fontSize: 18, 
    fontFamily: Typography.fonts.headline,
    fontWeight: '600',
  },
  scannerBox: {
    width: width * 0.7,
    height: width * 0.7,
    alignSelf: 'center',
    position: 'relative',
  },
  corner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 4,
    zIndex: 10,
  },
  tl: { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0, borderTopLeftRadius: 20 },
  tr: { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0, borderTopRightRadius: 20 },
  bl: { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0, borderBottomLeftRadius: 20 },
  br: { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0, borderBottomRightRadius: 20 },
  mask: { ...StyleSheet.absoluteFillObject, borderRadius: 20, opacity: 0.3 },
  footer: { alignItems: 'center', paddingHorizontal: 40 },
  hint: { 
    color: '#FFF', 
    fontSize: 14, 
    fontFamily: Typography.fonts.body, 
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.8,
  },
  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: Radius.pill,
    ...Shadow.card,
  },
  aiText: {
    fontSize: 12,
    color: Colors.primary,
    fontFamily: Typography.fonts.headline,
    fontWeight: '700',
  },
  message: { color: '#FFF', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: Colors.primary, padding: 16, borderRadius: 12 },
  buttonText: { color: '#FFF', fontWeight: 'bold' }
});
