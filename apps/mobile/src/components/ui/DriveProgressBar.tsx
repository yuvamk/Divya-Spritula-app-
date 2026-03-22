import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

interface DriveProgressBarProps {
  progress: number;
  height?: number;
  color?: string;
  showText?: boolean;
}

export const DriveProgressBar = ({ 
  progress, 
  height = 10, 
  color = Colors.primary,
  showText = false 
}: DriveProgressBarProps) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  
  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { height, borderRadius: height / 2 }]}>
        <LinearGradient
          colors={[color, color + 'CC']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.progress, { width: `${clampedProgress * 100}%`, borderRadius: height / 2 }]}
        />
      </View>
      {showText && (
        <Text style={styles.percentage}>{Math.round(clampedProgress * 100)}%</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  container: { flex: 1, backgroundColor: Colors.light.surfaceHigh, overflow: 'hidden' },
  progress: { height: '100%' },
  percentage: { fontSize: 12, fontFamily: Typography.fonts.label, color: Colors.primary, fontWeight: '700' }
});
