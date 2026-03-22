import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<'devotee' | 'pandit'>('devotee');
  const router = useRouter();

  const handleLogin = () => {
    if (role === 'devotee') {
      router.replace('/(tabs)');
    } else {
      router.replace('/(pandit)/dashboard');
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <LinearGradient colors={['#FFF', Colors.goldLight]} style={styles.gradient}>
        <View style={styles.topSection}>
           <Image 
             source={{ uri: 'https://images.unsplash.com/photo-1590766948511-9a997df0647c' }} 
             style={styles.logo} 
           />
           <Text style={styles.title}>DIVYA</Text>
           <Text style={styles.subtitle}>Har Mandir. Har Dil.</Text>
        </View>

        <View style={styles.card}>
           <Text style={styles.loginTitle}>Swagat Hai 🙏</Text>
           <Text style={styles.loginDesc}>Apna mobile number darj karein</Text>

           <View style={styles.roleToggle}>
              <TouchableOpacity 
                style={[styles.roleBtn, role === 'devotee' && styles.roleBtnActive]}
                onPress={() => setRole('devotee')}
              >
                 <Text style={[styles.roleText, role === 'devotee' && styles.roleTextActive]}>Devotee</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.roleBtn, role === 'pandit' && styles.roleBtnActive]}
                onPress={() => setRole('pandit')}
              >
                 <Text style={[styles.roleText, role === 'pandit' && styles.roleTextActive]}>Pandit</Text>
              </TouchableOpacity>
           </View>

           <View style={styles.inputBox}>
              <View style={styles.countryCode}>
                 <Text style={styles.codeText}>+91</Text>
              </View>
              <TextInput 
                 style={styles.input}
                 placeholder="Mobile Number"
                 keyboardType="phone-pad"
                 maxLength={10}
                 value={phone}
                 onChangeText={setPhone}
              />
           </View>

           <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <LinearGradient colors={[Colors.primary, Colors.primaryContainer]} style={styles.btnGrad}>
                 <Text style={styles.btnText}>Pravesh Karein</Text>
                 <MaterialCommunityIcons name="arrow-right" size={20} color="#FFF" />
              </LinearGradient>
           </TouchableOpacity>

           <View style={styles.footer}>
              <Text style={styles.footerText}>Naya account? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
                 <Text style={styles.registerLink}>Register Karein</Text>
              </TouchableOpacity>
           </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: Typography.fonts.serifBold,
    color: Colors.primary,
    letterSpacing: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansMedium,
    color: Colors.light.textTertiary,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 32,
    ...Shadow.card,
  },
  loginTitle: {
    fontSize: 24,
    fontFamily: Typography.fonts.serifBold,
    color: Colors.light.textPrimary,
  },
  loginDesc: {
    fontSize: 14,
    color: Colors.light.textTertiary,
    marginTop: 8,
    marginBottom: 24,
  },
  roleToggle: {
    flexDirection: 'row',
    backgroundColor: Colors.light.surface2,
    borderRadius: 16,
    padding: 4,
    marginBottom: 24,
  },
  roleBtn: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  roleBtnActive: {
    backgroundColor: '#FFF',
    ...Shadow.card,
  },
  roleText: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textTertiary,
  },
  roleTextActive: {
    color: Colors.primary,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.light.divider,
    borderRadius: 16,
    height: 56,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  countryCode: {
    paddingRight: 12,
    borderRightWidth: 1,
    borderRightColor: Colors.light.divider,
    marginRight: 12,
  },
  codeText: {
    fontSize: 16,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textPrimary,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.textPrimary,
    fontFamily: Typography.fonts.sansMedium,
  },
  loginBtn: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Shadow.card,
  },
  btnGrad: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    color: Colors.light.textTertiary,
    fontSize: 14,
  },
  registerLink: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
  },
});
