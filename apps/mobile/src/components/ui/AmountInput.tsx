import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography, Radius, spacing } from '@/constants/theme';

interface AmountInputProps {
  value: string;
  onChange: (val: string) => void;
  quickAmounts?: number[];
}

export const AmountInput: React.FC<AmountInputProps> = ({ value, onChange, quickAmounts = [101, 251, 501, 1001, 2100] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.currency}>₹</Text>
        <TextInput
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor={Colors.light.textTertiary}
          style={styles.input}
        />
      </View>
      
      <View style={styles.chips}>
        {quickAmounts.map(amt => (
          <TouchableOpacity 
            key={amt} 
            onPress={() => onChange(amt.toString())}
            style={[styles.chip, value === amt.toString() && styles.activeChip]}
          >
            <Text style={[styles.chipText, value === amt.toString() && styles.activeChipText]}>
              ₹{amt}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.hint}>Auspicious Hindu amounts often end in 1 (e.g. ₹501)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  currency: {
    fontSize: 32,
    fontFamily: Typography.fonts.serifBold,
    color: Colors.gold,
    marginRight: 8,
  },
  input: {
    fontSize: 48,
    fontFamily: Typography.fonts.mono,
    color: Colors.light.textPrimary,
    minWidth: 100,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Radius.md,
    backgroundColor: Colors.light.surface2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  activeChip: {
    backgroundColor: Colors.goldLight,
    borderColor: Colors.gold,
  },
  chipText: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textSecondary,
  },
  activeChipText: {
    color: Colors.gold,
  },
  hint: {
    textAlign: 'center',
    fontSize: 10,
    color: Colors.gold,
    marginTop: 12,
    fontStyle: 'italic',
    fontFamily: Typography.fonts.sansRegular,
  }
});
