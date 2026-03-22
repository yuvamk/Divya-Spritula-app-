import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Colors, Typography, Spacing, Radius, Shadow, Gradients } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { DivyaButton } from '@/components/ui/DivyaButton';
import { SaffronDivider } from '@/components/ui/SaffronDivider';

const schema = z.object({
  fullName: z.string().min(2, 'Name is too short'),
  mobile: z.string().length(10, 'Invalid mobile number'),
  gotra: z.string().optional(),
  occupation: z.string().optional(),
  locality: z.string().optional(),
});

export default function RegisterScreen() {
  const router = useRouter();
  const { templeId } = useLocalSearchParams();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { fullName: '', mobile: '', gotra: '', occupation: '', locality: '' }
  });

  const { useAuthStore } = require('@/stores/auth.store');

  const onSubmit = (data: any) => {
    console.log('Registering:', data, templeId);
    useAuthStore.setState({
      user: {
        id: 'usr_new',
        name: data.fullName,
      },
      role: 'devotee',
      templeId: templeId as string
    });
    router.replace('/(devotee)/home');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.topProgress}>
        <View style={[styles.progressIndicator, { width: '60%' }]} />
      </View>

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <MaterialCommunityIcons name="chevron-left" size={28} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>DIVYA</Text>
          <View style={{ width: 44 }} />
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.heroSection}>
            <Text style={styles.titleHindi}>पंजीकरण</Text>
            <Text style={styles.titleEnglish}>Registration</Text>
            <Text style={styles.subtitle}>
              Connect with your roots. Join the spiritual community of your chosen Mandir.
            </Text>
          </View>

          <View style={styles.templeCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1627894741916-d36166299318?q=80&w=200&h=200&auto=format&fit=crop' }} 
              style={[styles.templeAvatar, { 
                borderTopLeftRadius: Radius.arch.top,
                borderTopRightRadius: Radius.arch.top,
                borderBottomLeftRadius: Radius.arch.bottom,
                borderBottomRightRadius: Radius.arch.bottom,
              }]} 
            />
            <View style={styles.templeInfo}>
              <Text style={styles.templeName}>Shri Kashi Vishwanath</Text>
              <Text style={styles.templeTagline}>Pandit ji aapko pehchaan sakein</Text>
            </View>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name / पूरा नाम</Text>
              <Controller
                control={control}
                name="fullName"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                    placeholderTextColor={Colors.light.onSurfaceVar}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Mobile Number / मोबाइल नंबर</Text>
              <View style={styles.phoneRow}>
                <Text style={styles.countryCode}>+91</Text>
                <Controller
                  control={control}
                  name="mobile"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={[styles.input, { flex: 1 }]}
                      placeholder="00000 00000"
                      placeholderTextColor={Colors.light.onSurfaceVar}
                      keyboardType="phone-pad"
                      value={value}
                      onChangeText={onChange}
                    />
                  )}
                />
              </View>
              {errors.mobile && <Text style={styles.errorText}>{errors.mobile.message}</Text>}
            </View>

            <View style={styles.gridRow}>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.label}>Gotra / गोत्र</Text>
                <Controller
                  control={control}
                  name="gotra"
                  render={({ field: { onChange, value } }) => (
                    <TextInput 
                      style={styles.input} 
                      placeholder="e.g. Kashyap" 
                      placeholderTextColor={Colors.light.onSurfaceVar}
                      value={value} 
                      onChangeText={onChange} 
                    />
                  )}
                />
              </View>
              <View style={[styles.inputContainer, { flex: 1 }]}>
                <Text style={styles.label}>Occupation</Text>
                <Controller
                  control={control}
                  name="occupation"
                  render={({ field: { onChange, value } }) => (
                    <TextInput 
                      style={styles.input} 
                      placeholder="e.g. Seva" 
                      placeholderTextColor={Colors.light.onSurfaceVar}
                      value={value} 
                      onChangeText={onChange} 
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Village/Locality / स्थान</Text>
              <Controller
                control={control}
                name="locality"
                render={({ field: { onChange, value } }) => (
                  <View style={styles.locationInput}>
                    <MaterialCommunityIcons name="map-marker-outline" size={20} color={Colors.primary} />
                    <TextInput 
                      style={styles.inputInner} 
                      placeholder="Start typing your area..." 
                      placeholderTextColor={Colors.light.onSurfaceVar}
                      value={value} 
                      onChangeText={onChange} 
                    />
                  </View>
                )}
              />
            </View>

            <View style={styles.uploadSection}>
              <Text style={styles.label}>Family Photo (Optional)</Text>
              <TouchableOpacity style={styles.uploadBox}>
                <MaterialCommunityIcons name="camera-outline" size={32} color={Colors.primary} />
                <Text style={styles.uploadText}>Upload a moment of together-ness</Text>
              </TouchableOpacity>
            </View>

            <DivyaButton 
              title="मंदिर में रजिस्टर हों / Register" 
              onPress={handleSubmit(onSubmit)}
              style={styles.submitBtn}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  topProgress: {
    height: 4,
    backgroundColor: Colors.light.surfaceHigh,
    width: '100%',
  },
  progressIndicator: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    height: 56,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.h1,
    color: Colors.primary,
    letterSpacing: 4,
  },
  scrollContent: {
    paddingHorizontal: Spacing.editorial,
    paddingTop: Spacing.xl,
    paddingBottom: 60,
  },
  heroSection: {
    marginBottom: Spacing.xxl,
  },
  titleHindi: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.displayMd,
    color: Colors.primary,
  },
  titleEnglish: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.h1,
    color: Colors.secondary,
    opacity: 0.8,
    marginTop: 2,
  },
  subtitle: {
    fontFamily: Typography.fonts.body,
    fontSize: Typography.sizes.body,
    color: Colors.light.onSurfaceVar,
    marginTop: Spacing.md,
    lineHeight: 22,
  },
  templeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceLow,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    marginBottom: Spacing.xxl,
    gap: Spacing.md,
  },
  templeAvatar: {
    width: 60,
    height: 60,
    backgroundColor: Colors.light.surfaceHigh,
  },
  templeName: {
    fontFamily: Typography.fonts.headline,
    fontSize: Typography.sizes.body,
    color: Colors.light.onSurface,
  },
  templeInfo: {
    flex: 1,
  },
  templeTagline: {
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.tiny,
    color: Colors.primary,
    fontStyle: 'italic',
    marginTop: 2,
  },
  form: {
    gap: Spacing.xl,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '700',
  },
  input: {
    backgroundColor: Colors.light.surfaceLow,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    fontSize: 16,
    fontFamily: Typography.fonts.body,
    color: Colors.light.onSurface,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceLow,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
  },
  countryCode: {
    fontFamily: Typography.fonts.headline,
    fontSize: 16,
    color: Colors.light.onSurfaceVar,
    marginRight: 10,
  },
  gridRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceLow,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    gap: 8,
  },
  inputInner: {
    flex: 1,
    paddingVertical: Spacing.md,
    fontSize: 16,
    fontFamily: Typography.fonts.body,
    color: Colors.light.onSurface,
  },
  uploadSection: {
    gap: 12,
  },
  uploadBox: {
    height: 120,
    backgroundColor: Colors.light.surfaceLow,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.light.surfaceHighest,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  uploadText: {
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.caption,
    color: Colors.light.onSurfaceVar,
  },
  submitBtn: {
    marginTop: Spacing.md,
  },
  errorText: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.error,
    marginTop: 2,
  }
});
