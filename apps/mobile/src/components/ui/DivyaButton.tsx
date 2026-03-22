import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Typography, Radius } from '@/constants/theme';
import { LottieView } from 'lottie-react-native';

interface DivyaButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'outlined' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const DivyaButton: React.FC<DivyaButtonProps> = ({ 
  title, 
  onPress, 
  type = 'primary', 
  loading = false, 
  disabled = false,
  style,
  textStyle
}) => {
  const isPrimary = type === 'primary';
  const isOutlined = type === 'outlined';

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        isPrimary && styles.primary,
        isOutlined && styles.outlined,
        disabled && styles.disabled,
        style
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#fff' : Colors.saffron} />
      ) : (
        <Text style={[
          styles.text,
          isPrimary && styles.textPrimary,
          isOutlined && styles.textOutlined,
          textStyle
        ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: Radius.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  primary: {
    backgroundColor: Colors.saffron,
    shadowColor: Colors.saffron,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.maroon,
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: '#ccc',
    borderColor: '#ccc',
  },
  text: {
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textOutlined: {
    color: Colors.maroon,
  }
});
