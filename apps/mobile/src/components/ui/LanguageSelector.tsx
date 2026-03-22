import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '@/constants/theme';
import { useUIStore } from '@/stores/ui.store';

const LANGUAGES = [
  { code: 'hi', label: 'हिन्दी', name: 'Hindi' },
  { code: 'en', label: 'English', name: 'English' },
  { code: 'ta', label: 'தமிழ்', name: 'Tamil' },
  { code: 'te', label: 'తెలుగు', name: 'Telugu' },
  { code: 'kn', label: 'ಕನ್ನಡ', name: 'Kannada' },
  { code: 'mr', label: 'मराठी', name: 'Marathi' },
  { code: 'bn', label: 'বাংলা', name: 'Bengali' },
  { code: 'gu', label: 'ગુજરાતી', name: 'Gujarati' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useUIStore();

  const renderItem = ({ item }: { item: typeof LANGUAGES[0] }) => (
    <TouchableOpacity 
      style={[
        styles.item, 
        language === item.code && styles.activeItem
      ]}
      onPress={() => setLanguage(item.code as any)}
    >
      <Text style={[
        styles.label,
        language === item.code && styles.activeLabel
      ]}>
        {item.label}
      </Text>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={LANGUAGES}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  list: {
    paddingBottom: Spacing.lg,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: Spacing.md,
  },
  item: {
    width: '48%',
    padding: Spacing.lg,
    borderRadius: Radius.lg,
    backgroundColor: Colors.light.surfaceLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeItem: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primaryContainer,
  },
  label: {
    fontFamily: Typography.fonts.display,
    fontSize: Typography.sizes.h2,
    color: Colors.light.onSurface,
  },
  activeLabel: {
    color: '#FFFFFF',
  },
  name: {
    fontFamily: Typography.fonts.label,
    fontSize: Typography.sizes.caption,
    color: Colors.light.onSurfaceVar,
    marginTop: 4,
  }
});
