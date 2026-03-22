import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  withDelay, 
  withSequence,
  runOnJS
} from 'react-native-reanimated';
import { Colors, Radius, Spacing, Typography, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ToastMessageProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onHide?: () => void;
  visible: boolean;
}

export const ToastMessage: React.FC<ToastMessageProps> = ({ 
  message, 
  type = 'info', 
  visible,
  onHide 
}) => {
  const translateY = useSharedValue(-100);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(Spacing.xxl);
      opacity.value = withSpring(1);
    } else {
      translateY.value = withSpring(-100);
      opacity.value = withSpring(0);
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'information';
  const color = type === 'success' ? Colors.success : type === 'error' ? Colors.error : Colors.primary;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={[styles.content, { borderLeftColor: color }]}>
        <MaterialCommunityIcons name={iconName} size={20} color={color} />
        <Text style={styles.text}>{message}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: Spacing.md,
    right: Spacing.md,
    zIndex: 9999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceLowest,
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderLeftWidth: 4,
    ...Shadow.ambient,
  },
  text: {
    marginLeft: Spacing.sm,
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.body,
    color: Colors.light.onSurface,
  }
});
