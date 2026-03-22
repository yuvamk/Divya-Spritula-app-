import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors, Typography, Radius, Spacing } from '@/constants/theme';

interface OutlinedButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  textStyle,
  disabled 
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      disabled={disabled}
      style={[
        styles.button, 
        { borderColor: Colors.light.outline },
        disabled && styles.disabled,
        style
      ]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: Typography.fonts.title,
    fontSize: Typography.sizes.body,
    color: Colors.primary,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  }
});
