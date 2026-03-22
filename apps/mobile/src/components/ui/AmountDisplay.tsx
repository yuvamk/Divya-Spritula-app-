import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { Typography, Colors } from '@/constants/theme';

interface AmountDisplayProps {
  amount: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  style?: TextStyle;
}

export const AmountDisplay: React.FC<AmountDisplayProps> = ({ 
  amount, 
  size = 'md', 
  color, 
  style 
}) => {
  const formatIndianCurrency = (num: number) => {
    const x = num.toString();
    let lastThree = x.substring(x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
    }
    const res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return `₹${res}`;
  };

  const fontSize = size === 'lg' ? Typography.sizes.displayMd : size === 'md' ? Typography.sizes.h1 : Typography.sizes.body;

  return (
    <Text style={[
      styles.text, 
      { fontSize, color: color || Colors.tertiary },
      style
    ]}>
      {formatIndianCurrency(amount)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Typography.fonts.amount,
  }
});
