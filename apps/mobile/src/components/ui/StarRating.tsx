import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

export const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => {
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((s) => (
        <MaterialCommunityIcons
          key={s}
          name={s <= Math.floor(rating) ? 'star' : s - rating < 1 ? 'star-half-full' : 'star-outline'}
          size={size}
          color={Colors.accent}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 2 }
});
