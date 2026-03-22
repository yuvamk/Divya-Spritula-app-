import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const DEVOTEES = [
  { id: '1', name: 'Suresh Kashyap', village: 'Kashi', family: 4, joined: '2 days ago', badge: 'Regular Yajman', color: Colors.primary },
  { id: '2', name: 'Meena Gupta', village: 'Assi', family: 2, joined: '5 days ago', badge: 'Most Devout', color: Colors.accent },
  { id: '3', name: 'Rahul Sharma', village: 'Godowlia', family: 5, joined: '1 week ago', badge: 'Daan Veer', color: Colors.secondary },
  { id: '4', name: 'Priya Verma', village: 'Kashi', family: 3, joined: '1 week ago', badge: 'Nitya Bhakti', color: Colors.primary },
];

export default function CommunityScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <Text style={styles.title}>Mandir Parivar</Text>
          <Text style={styles.subtitle}>List of all registered devotees in your temple.</Text>
          
          <BlurView intensity={20} tint="light" style={styles.searchContainer}>
            <MaterialCommunityIcons name="magnify" size={20} color={Colors.light.onSurfaceVar} />
            <TextInput 
              placeholder="Search by name or village..." 
              style={styles.searchInput}
              placeholderTextColor={Colors.light.onSurfaceVar}
              value={search}
              onChangeText={setSearch}
            />
          </BlurView>
        </SafeAreaView>
      </View>

      <FlatList
        data={DEVOTEES}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity 
            activeOpacity={0.7}
            style={styles.devoteeCard}
          >
             <LinearGradient
               colors={[item.color + '20', '#FFF']}
               start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 1 }}
               style={styles.cardGradient}
             >
               <View style={styles.avatarContainer}>
                  <View style={[styles.avatar, { backgroundColor: item.color + '30' }]}>
                    <Text style={[styles.avatarText, { color: item.color }]}>{item.name[0]}</Text>
                  </View>
                  {item.badge && (
                    <View style={[styles.badge, { backgroundColor: item.color }]}>
                       <MaterialCommunityIcons name="sparkles" size={10} color="#FFF" />
                    </View>
                  )}
               </View>

               <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.village}>{item.village} • {item.family} Members</Text>
                  <View style={styles.badgeRow}>
                     <View style={[styles.aiBadge, { backgroundColor: item.color + '15' }]}>
                        <Text style={[styles.aiBadgeText, { color: item.color }]}>{item.badge}</Text>
                     </View>
                  </View>
               </View>

               <View style={styles.meta}>
                  <Text style={styles.joined}>{item.joined}</Text>
                  <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.light.onSurfaceVar} />
               </View>
             </LinearGradient>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.fab}>
        <LinearGradient
           colors={[Colors.primary, Colors.secondary]}
           style={styles.fabGradient}
        >
          <MaterialCommunityIcons name="plus" size={28} color="#FFF" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.surfaceHigh,
  },
  title: {
    fontSize: 28,
    fontFamily: Typography.fonts.display,
    color: Colors.primary,
    marginTop: Spacing.md,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.light.onSurfaceVar,
    marginTop: 4,
    marginBottom: Spacing.lg,
    fontFamily: Typography.fonts.body,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surfaceLow,
    borderRadius: Radius.lg,
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: Colors.light.onSurface,
    fontFamily: Typography.fonts.body,
  },
  listContent: { padding: Spacing.lg, paddingBottom: 150 },
  devoteeCard: {
    backgroundColor: '#FFF',
    borderRadius: Radius.xl,
    marginBottom: Spacing.md,
    ...Shadow.card,
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: { position: 'relative' },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontFamily: Typography.fonts.headline,
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  info: { flex: 1, marginLeft: 16 },
  name: {
    fontSize: 16,
    fontFamily: Typography.fonts.headline,
    color: Colors.light.onSurface,
  },
  village: {
    fontSize: 12,
    color: Colors.light.onSurfaceVar,
    fontFamily: Typography.fonts.body,
    marginTop: 2,
  },
  badgeRow: { flexDirection: 'row', marginTop: 8 },
  aiBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  aiBadgeText: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  meta: { alignItems: 'flex-end' },
  joined: {
    fontSize: 10,
    color: Colors.light.onSurfaceVar,
    marginBottom: 4,
    fontFamily: Typography.fonts.label,
  },
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 24,
    ...Shadow.card,
  },
  fabGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

