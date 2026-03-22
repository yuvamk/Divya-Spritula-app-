import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Spacing } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

export const SaffronDivider = ({ marginVertical = Spacing.md }: { marginVertical?: number }) => (
  <View style={[styles.container, { marginVertical }]}>
    <LinearGradient
      colors={['transparent', Colors.primary, 'transparent']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradient}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { height: 1.5, width: '100%', opacity: 0.3 },
  gradient: { flex: 1 }
});
