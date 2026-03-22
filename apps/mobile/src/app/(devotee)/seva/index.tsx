import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { DonationDriveCard } from '@/components/cards/DonationDriveCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { ShieldCheck } from 'lucide-react-native';

const MOCK_DRIVES = [
  { id: '1', title: 'Kashi Vishwanath Annadanam', raised: 750000, target: 1000000, daysLeft: 5, image: 'https://images.unsplash.com/photo-1590050752117-23a9d97984ac' },
  { id: '2', title: 'Kedarnath Reconstruction', raised: 1200000, target: 5000000, daysLeft: 45, image: 'https://images.unsplash.com/photo-1590050752117-23a9d97984ac' },
];

export default function SevaListScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
           <Text style={styles.title}>Dhamarth Seva</Text>
           <Text style={styles.subtitle}>Sacred Giving & Transparency</Text>
        </View>
        <View style={styles.verifyBadge}>
           <ShieldCheck size={16} color={Colors.accent} />
           <Text style={styles.verifyText}>VIVA Verified</Text>
        </View>
      </View>

      <FlatList
        data={MOCK_DRIVES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.cardWrapper}
            onPress={() => router.push(`/(devotee)/seva/${item.id}`)}
          >
            <DonationDriveCard 
              title={item.title}
              raised={item.raised}
              target={item.target}
              daysLeft={item.daysLeft}
              image={item.image}
              temple="Divya Mandir"
              onPress={() => router.push(`/(devotee)/seva/${item.id}`)}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.bg },
  header: { padding: 24, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderBottomWidth: 1, borderBottomColor: Colors.light.divider },
  title: { fontSize: 28, fontFamily: Typography.fonts.display, color: Colors.maroon, fontWeight: '700' },
  subtitle: { fontSize: 14, color: Colors.accent, marginTop: 4, fontFamily: Typography.fonts.body, fontWeight: '600' },
  verifyBadge: { flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: Colors.accent + '15', paddingHorizontal: 12, paddingVertical: 6, borderRadius: Radius.full },
  verifyText: { fontSize: 10, fontFamily: Typography.fonts.headline, color: Colors.accent, fontWeight: '800' },
  list: { padding: 16, paddingBottom: 120 },
  cardWrapper: { marginBottom: 16, borderRadius: Radius.xl, overflow: 'hidden', ...Shadow.card }
});

