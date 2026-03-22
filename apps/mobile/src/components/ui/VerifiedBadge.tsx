import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

interface VerifiedBadgeProps {
  size?: number;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 16 }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name="check-decagram" 
        size={size} 
        color={Colors.accent} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
