import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const EXPENSES = [
  { id: '1', category: 'Flowers & Garlands', amount: '2,500', desc: 'Fresh jasmine and marigold for deity', photo: 'https://images.unsplash.com/photo-1590766948511-9a997df0647c' },
  { id: '2', category: 'Prasad & Bhog', amount: '5,000', desc: '51kg Besan Ladoo for distributes', photo: 'https://images.unsplash.com/photo-1589135398352-3d4419f5a100' },
  { id: '3', category: 'Pandit Dakshina', amount: '3,100', desc: 'Dakshina for helper pandits', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2' },
];

export default function TransparencyWall() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
         <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={Colors.light.textPrimary} />
         </TouchableOpacity>
         <Text style={styles.headerTitle}>Donation Transparency</Text>
         <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
         <View style={styles.heroCard}>
            <LinearGradient colors={[Colors.teal, '#0c5240']} style={styles.heroGrad}>
               <Text style={styles.shaktiTitle}>Vishnu Sahasranam Drive</Text>
               <View style={styles.totalBox}>
                  <Text style={styles.totalLabel}>TOTAL RAISED</Text>
                  <Text style={styles.totalAmount}>₹1,24,500</Text>
               </View>
               <View style={styles.totalBox}>
                  <Text style={styles.totalLabel}>TOTAL SPENT</Text>
                  <Text style={styles.totalAmount}>₹1,18,200</Text>
               </View>
            </LinearGradient>
         </View>

         <View style={styles.disclaimer}>
            <MaterialCommunityIcons name="shield-check" size={18} color={Colors.teal} />
            <Text style={styles.disclaimerText}>Every rupee is tracked. Receipts are verified by Divya AI.</Text>
         </View>

         <Text style={styles.sectionTitle}>Expense Breakdown</Text>
         {EXPENSES.map(exp => (
           <View key={exp.id} style={styles.expenseCard}>
              <View style={styles.expHeader}>
                 <View>
                    <Text style={styles.expName}>{exp.category}</Text>
                    <Text style={styles.expDesc}>{exp.desc}</Text>
                 </View>
                 <Text style={styles.expAmount}>₹{exp.amount}</Text>
              </View>
              <TouchableOpacity style={styles.receiptBtn}>
                 <Image source={{ uri: exp.photo }} style={styles.receiptPreview} />
                 <View style={styles.receiptOverlay}>
                    <MaterialCommunityIcons name="eye" size={20} color="#FFF" />
                    <Text style={styles.receiptText}>View Receipt</Text>
                 </View>
              </TouchableOpacity>
           </View>
         ))}

         <View style={styles.thankYouBox}>
            <Text style={styles.thankYouText}>Aapka daan satphal mile 🙏</Text>
            <Text style={styles.memberCount}>Verified by 4 Pandit Committee</Text>
         </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.bg,
  },
  header: {
    height: 100,
    paddingTop: 50,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    ...Shadow.card,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textPrimary,
  },
  content: {
    padding: 20,
  },
  heroCard: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    ...Shadow.card,
  },
  heroGrad: {
    padding: 24,
  },
  shaktiTitle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: Typography.fonts.serifBold,
    marginBottom: 20,
  },
  totalBox: {
    marginBottom: 12,
  },
  totalLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    fontFamily: Typography.fonts.sansSemiBold,
    letterSpacing: 1,
  },
  totalAmount: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  disclaimer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.tealLight,
    padding: 12,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 12,
    color: Colors.teal,
    fontFamily: Typography.fonts.sansMedium,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Typography.fonts.serifBold,
    color: Colors.light.textPrimary,
    marginBottom: 16,
  },
  expenseCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    ...Shadow.card,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  expName: {
    fontSize: 15,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textPrimary,
  },
  expDesc: {
    fontSize: 12,
    color: Colors.light.textTertiary,
    marginTop: 2,
  },
  expAmount: {
    fontSize: 18,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.teal,
  },
  receiptBtn: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  receiptPreview: {
    width: '100%',
    height: '100%',
  },
  receiptOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  receiptText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  thankYouBox: {
    marginTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  thankYouText: {
    fontSize: 18,
    fontFamily: Typography.fonts.serifBold,
    color: Colors.primary,
  },
  memberCount: {
    fontSize: 12,
    color: Colors.light.textTertiary,
    marginTop: 4,
    fontStyle: 'italic',
  },
});
