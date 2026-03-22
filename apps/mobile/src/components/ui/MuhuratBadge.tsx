import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface MuhuratBadgeProps {
  type?: 'shubh' | 'ashubh' | 'neutral';
  time?: string;
  label: string;
}

export const MuhuratBadge: React.FC<MuhuratBadgeProps> = ({ 
  type = 'shubh', 
  time, 
  label 
}) => {
  const color = type === 'shubh' ? Colors.success : type === 'ashubh' ? Colors.error : Colors.accent;
  
  return (
    <View style={[styles.container, { backgroundColor: color + '15', borderColor: color + '30' }]}>
      <MaterialCommunityIcons 
        name={type === 'shubh' ? 'clock-check-outline' : 'clock-alert-outline'} 
        size={14} 
        color={color} 
      />
      <View style={styles.textContainer}>
        <Text style={[styles.label, { color }]}>{label}</Text>
        {time && <Text style={[styles.time, { color }]}>{time}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    borderWidth: 1,
  },
  textContainer: {
    marginLeft: Spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: Typography.fonts.title,
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  time: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    marginLeft: 4,
    opacity: 0.8,
  }
});
