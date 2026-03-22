import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DriveProgressBar } from '@/components/ui/DriveProgressBar';
import { AmountDisplay } from '@/components/ui/AmountDisplay';

interface DonationDriveCardProps {
  title: string;
  temple: string;
  image: string;
  raised: number;
  target: number;
  daysLeft: number;
  onPress: () => void;
}

export const DonationDriveCard: React.FC<DonationDriveCardProps> = ({ 
  title, temple, image, raised, target, daysLeft, onPress 
}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.daysBadge}>
          <Text style={styles.daysText}>{daysLeft} days left</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.temple}>{temple}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        
        <View style={styles.statsRow}>
          <View>
            <Text style={styles.raisedLabel}>Collected</Text>
            <AmountDisplay amount={raised} size="sm" color={Colors.primary} />
          </View>
          <View style={styles.targetCol}>
            <Text style={styles.targetLabel}>Goal</Text>
            <Text style={styles.targetValue}>₹{target.toLocaleString('en-IN')}</Text>
          </View>
        </View>

        <DriveProgressBar progress={raised / target} showText={false} />

        <View style={styles.footer}>
          <View style={styles.contributors}>
            <MaterialCommunityIcons name="account-group-outline" size={14} color={Colors.light.onSurfaceVar} />
            <Text style={styles.contributorsText}>1.2k Seva-kaari</Text>
          </View>
          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionText}>Seva karein</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.background,
    borderRadius: Radius.xl,
    width: 280,
    marginRight: Spacing.lg,
    ...Shadow.card,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.light.surfaceHigh,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  daysBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Radius.sm,
  },
  daysText: {
    color: '#FFF',
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    fontWeight: '700',
  },
  content: {
    padding: Spacing.md,
  },
  temple: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontFamily: Typography.fonts.headline,
    fontSize: 16,
    color: Colors.light.onSurface,
    lineHeight: 20,
    height: 40,
    marginBottom: Spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  raisedLabel: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.light.onSurfaceVar,
    marginBottom: 2,
  },
  targetCol: {
    alignItems: 'flex-end',
  },
  targetLabel: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.light.onSurfaceVar,
    marginBottom: 2,
  },
  targetValue: {
    fontFamily: Typography.fonts.headline,
    fontSize: 14,
    color: Colors.light.onSurfaceVar,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.md,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
    borderTopColor: Colors.light.surfaceHigh,
  },
  contributors: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contributorsText: {
    fontFamily: Typography.fonts.body,
    fontSize: 10,
    color: Colors.light.onSurfaceVar,
  },
  actionBtn: {
    backgroundColor: Colors.primary + '10',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.pill,
  },
  actionText: {
    fontFamily: Typography.fonts.label,
    fontSize: 10,
    color: Colors.primary,
    fontWeight: '700',
  }
});

