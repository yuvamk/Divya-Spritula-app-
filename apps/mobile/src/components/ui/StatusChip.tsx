import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Typography } from '@/constants/theme';

interface StatusChipProps {
  status: 'pending' | 'confirmed' | 'inProgress' | 'completed' | 'cancelled';
  label?: string;
}

export const StatusChip: React.FC<StatusChipProps> = ({ status, label }) => {
  const config = Colors.status[status];
  
  return (
    <View style={[styles.container, { backgroundColor: config.bg }]}>
      <Text style={[styles.text, { color: config.text }]}>
        {(label || status).toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.pill,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 10,
    fontFamily: Typography.fonts.mono,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  }
});
