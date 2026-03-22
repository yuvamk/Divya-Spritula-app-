import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Typography, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const IndianCalendar = () => {
  // Simple representation for now
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.month}>Chaitra 2081</Text>
        <View style={styles.headerIcons}>
          <MaterialCommunityIcons name="chevron-left" size={20} color={Colors.primary} />
          <MaterialCommunityIcons name="chevron-right" size={20} color={Colors.primary} />
        </View>
      </View>
      <View style={styles.daysRow}>
        {days.map(d => <Text key={d} style={styles.dayText}>{d}</Text>)}
      </View>
      <View style={styles.datesGrid}>
        {dates.map(date => (
          <TouchableOpacity 
            key={date} 
            style={[styles.dateBox, date === 15 && styles.selectedDate]}
          >
            <Text style={[styles.dateText, date === 15 && styles.selectedText]}>{date}</Text>
            {date === 15 && <View style={styles.dot} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFF', padding: 16, borderRadius: Radius.xl, ...Shadow.card },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  month: { fontSize: 16, fontFamily: Typography.fonts.headline, color: Colors.primary, fontWeight: '700' },
  headerIcons: { flexDirection: 'row', gap: 12 },
  daysRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  dayText: { fontSize: 12, color: Colors.light.onSurfaceVar, flex: 1, textAlign: 'center' },
  datesGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  dateBox: { width: '14.28%', height: 40, alignItems: 'center', justifyContent: 'center', position: 'relative' },
  dateText: { fontSize: 14, color: Colors.light.onSurface },
  selectedDate: { backgroundColor: Colors.primary + '15', borderRadius: Radius.sm },
  selectedText: { color: Colors.primary, fontWeight: '700' },
  dot: { position: 'absolute', bottom: 4, width: 4, height: 4, borderRadius: 2, backgroundColor: Colors.primary }
});
