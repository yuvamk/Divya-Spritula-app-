import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const PUJAS = [
  { id: '1', name: 'Maha Rudrabhishek', price: 5100, temple: 'Kashi Vishwanath', image: 'https://images.unsplash.com/photo-1590050752117-23a9d97984ac?q=80&w=400&h=400&auto=format&fit=crop', category: 'Mahadev Special' },
  { id: '2', name: 'Satyanarayan Katha', price: 2100, temple: 'Iskcon Dwarka', image: 'https://images.unsplash.com/photo-1544013587-4142a2ca5896?q=80&w=400&h=400&auto=format&fit=crop', category: 'Prosperity' },
  { id: '3', name: 'Ganesh Chaturthi Puja', price: 3100, temple: 'Siddhivinayak', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&h=400&auto=format&fit=crop', category: 'New Beginnings' },
];

export default function PujaBrowseScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <Text style={styles.title}>Remote Puja</Text>
          <View style={styles.searchContainer}>
            <BlurView intensity={20} tint="light" style={styles.searchBar}>
              <MaterialCommunityIcons name="magnify" size={22} color={Colors.light.onSurfaceVar} />
              <Text style={styles.searchText}>Find an Auspicious Puja...</Text>
              <TouchableOpacity style={styles.filterBtn}>
                <MaterialCommunityIcons name="filter-variant" size={20} color={Colors.primary} />
              </TouchableOpacity>
            </BlurView>
          </View>
        </SafeAreaView>
      </View>

      <FlatList
        data={PUJAS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.card} 
            onPress={() => router.push(`/(devotee)/puja/book`)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.templeRow}>
                <MaterialCommunityIcons name="castle" size={12} color={Colors.light.onSurfaceVar} />
                <Text style={styles.temple}>{item.temple}</Text>
              </View>
              <View style={styles.footerRow}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceLabel}>Dakshina</Text>
                  <Text style={styles.price}>₹{item.price.toLocaleString('en-IN')}</Text>
                </View>
                <View style={styles.bookBtn}>
                  <Text style={styles.bookText}>Sankalp Karein</Text>
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
    backgroundColor: Colors.light.background 
  },
  header: { 
    paddingHorizontal: Spacing.lg, 
    paddingBottom: Spacing.md,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceHigh,
  },
  title: { 
    fontSize: Typography.sizes.displayMd, 
    fontFamily: Typography.fonts.display, 
    color: Colors.primary, 
    marginBottom: Spacing.md 
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
    gap: 10 
  },
  searchText: { 
    flex: 1, 
    color: Colors.light.onSurfaceVar,
    fontFamily: Typography.fonts.body,
    fontSize: 14,
  },
  filterBtn: {
    padding: 4,
  },
  list: { 
    padding: Spacing.lg, 
  },
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: Radius.xl, 
    marginBottom: Spacing.lg, 
    overflow: 'hidden', 
    ...Shadow.card,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  image: { 
    width: '100%', 
    height: 160 
  },
  info: { 
    padding: Spacing.lg, 
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radius.sm,
    backgroundColor: Colors.primary + '10',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    color: Colors.primary,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  name: { 
    fontSize: 20, 
    fontFamily: Typography.fonts.headline, 
    color: Colors.light.onSurface,
    marginBottom: 4,
  },
  templeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: Spacing.lg,
  },
  temple: { 
    fontSize: 14, 
    color: Colors.light.onSurfaceVar, 
    fontFamily: Typography.fonts.body 
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: Spacing.lg,
    borderTopWidth: 1,
    borderTopColor: Colors.light.surfaceHigh,
  },
  priceContainer: {
    gap: 2,
  },
  priceLabel: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    color: Colors.light.onSurfaceVar,
    textTransform: 'uppercase',
  },
  price: { 
    fontSize: 20, 
    color: Colors.primary, 
    fontFamily: Typography.fonts.headline 
  },
  bookBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: Radius.pill,
  },
  bookText: {
    color: '#FFF',
    fontFamily: Typography.fonts.label,
    fontSize: 12,
    fontWeight: '700',
  }
});

