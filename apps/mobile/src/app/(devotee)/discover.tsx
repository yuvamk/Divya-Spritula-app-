import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const MOCK_PANDITS = [
  { id: '1', name: 'Pt. Ramesh Sharma', special: 'Satyanarayan Katha', rating: 4.9, price: 2100, image: 'https://i.pravatar.cc/150?u=1', location: 'Varanasi' },
  { id: '2', name: 'Pt. Someshwar Jha', special: 'Rudrabhishek', rating: 4.8, price: 5100, image: 'https://i.pravatar.cc/150?u=2', location: 'Haridwar' },
  { id: '3', name: 'Pt. Alok Nath', special: 'Ganesh Puja', rating: 4.7, price: 1100, image: 'https://i.pravatar.cc/150?u=3', location: 'Ujjain' },
];

export default function DiscoverScreen() {
  const [activeTab, setActiveTab] = useState('Pandits');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <Text style={styles.title}>Khojo</Text>
          <View style={styles.searchContainer}>
            <BlurView intensity={20} tint="light" style={styles.searchBar}>
              <MaterialCommunityIcons name="magnify" size={22} color={Colors.light.onSurfaceVar} />
              <TextInput 
                placeholder="Find Pandits, Temples or Seva..." 
                style={styles.searchInput}
                placeholderTextColor={Colors.light.onSurfaceVar}
              />
              <TouchableOpacity style={styles.filterBtn}>
                <MaterialCommunityIcons name="tune-variant" size={20} color={Colors.primary} />
              </TouchableOpacity>
            </BlurView>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.tabsContainer}>
        {['Pandits', 'Temples', 'Live'].map(tab => (
          <TouchableOpacity 
            key={tab} 
            onPress={() => setActiveTab(tab)}
            style={styles.tabItem}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            {activeTab === tab && <View style={styles.activeTabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={MOCK_PANDITS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={() => (
          <View style={styles.aiInsightWrapper}>
            <LinearGradient
              colors={[Colors.primary + '15', Colors.secondary + '15']}
              style={styles.aiInsight}
            >
              <MaterialCommunityIcons name="sparkles" size={20} color={Colors.primary} />
              <View style={styles.aiTextContent}>
                <Text style={styles.aiTitle}>Divine Insight</Text>
                <Text style={styles.aiDesc}>Matched for your Gotra (Kashyap) & current Nakshatra.</Text>
              </View>
            </LinearGradient>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.panditCard}>
            <Image source={{ uri: item.image }} style={styles.pImg} />
            <View style={styles.pContent}>
              <View style={styles.pHeader}>
                <View>
                  <Text style={styles.pName}>{item.name}</Text>
                  <Text style={styles.pSpecial}>{item.special}</Text>
                </View>
                <View style={styles.pRating}>
                  <MaterialCommunityIcons name="star" size={14} color={Colors.accent} />
                  <Text style={styles.pRatingText}>{item.rating}</Text>
                </View>
              </View>
              
              <View style={styles.pFooter}>
                <View style={styles.pLoc}>
                  <MaterialCommunityIcons name="map-marker-outline" size={14} color={Colors.light.onSurfaceVar} />
                  <Text style={styles.pLocText}>{item.location}</Text>
                </View>
                <View style={styles.pPriceBadge}>
                  <Text style={styles.pPriceLabel}>Shet</Text>
                  <Text style={styles.pPriceValue}>₹{item.price}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.md,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: Typography.sizes.displayMd,
    fontFamily: Typography.fonts.display,
    color: Colors.primary,
    marginBottom: Spacing.md,
  },
  searchContainer: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
    backgroundColor: Colors.light.surfaceLow,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    height: 52,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: Typography.sizes.body,
    fontFamily: Typography.fonts.body,
    color: Colors.light.onSurface,
  },
  filterBtn: {
    padding: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.lg,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceHigh,
  },
  tabItem: {
    marginRight: Spacing.xl,
    paddingVertical: Spacing.md,
    position: 'relative',
  },
  tabText: {
    fontSize: 16,
    fontFamily: Typography.fonts.headline,
    color: Colors.light.onSurfaceVar,
  },
  activeTabText: {
    color: Colors.primary,
  },
  activeTabUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: Colors.primary,
    borderRadius: Radius.pill,
  },
  aiInsightWrapper: {
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  aiInsight: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.primary + '30',
    gap: 12,
  },
  aiTextContent: {
    flex: 1,
  },
  aiTitle: {
    fontSize: 14,
    fontFamily: Typography.fonts.headline,
    color: Colors.primary,
    marginBottom: 2,
  },
  aiDesc: {
    fontSize: 12,
    fontFamily: Typography.fonts.body,
    color: Colors.light.onSurfaceVar,
  },
  list: {
    paddingHorizontal: Spacing.lg,
  },
  panditCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: Radius.xl,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    ...Shadow.card,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  pImg: {
    width: 64,
    height: 64,
    borderRadius: Radius.lg,
  },
  pContent: {
    flex: 1,
    marginLeft: Spacing.md,
    justifyContent: 'center',
  },
  pHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pName: {
    fontSize: 16,
    fontFamily: Typography.fonts.headline,
    color: Colors.light.onSurface,
  },
  pRating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent + '15',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: Radius.sm,
    gap: 4,
  },
  pRatingText: {
    fontSize: 12,
    fontFamily: Typography.fonts.label,
    color: Colors.accent,
    fontWeight: '700',
  },
  pSpecial: {
    fontSize: 12,
    color: Colors.light.onSurfaceVar,
    fontFamily: Typography.fonts.body,
    marginTop: 2,
  },
  pFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  pLoc: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pLocText: {
    fontSize: 12,
    color: Colors.light.onSurfaceVar,
    fontFamily: Typography.fonts.body,
  },
  pPriceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  pPriceLabel: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    color: Colors.light.onSurfaceVar,
    textTransform: 'uppercase',
  },
  pPriceValue: {
    fontSize: 14,
    fontFamily: Typography.fonts.headline,
    color: Colors.primary,
  }
});

