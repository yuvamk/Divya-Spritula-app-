import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TempleHeaderCardProps {
  name: string;
  location: string;
  image: string;
  tithi: string;
}

export const TempleHeaderCard: React.FC<TempleHeaderCardProps> = ({ name, location, image, tithi }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: image }} style={styles.bg} imageStyle={styles.imgStyle}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        >
          <View style={styles.topRow}>
            <BlurView intensity={30} tint="dark" style={styles.tithiBadge}>
              <MaterialCommunityIcons name="calendar-month-outline" size={14} color="#FFF" />
              <Text style={styles.tithiText}>{tithi}</Text>
            </BlurView>
          </View>
          
          <View style={styles.bottomContent}>
            <View style={styles.titleRow}>
              <Text style={styles.name}>{name}</Text>
              <MaterialCommunityIcons name="check-decagram" size={18} color={Colors.accent} />
            </View>
            <View style={styles.locationRow}>
              <MaterialCommunityIcons name="map-marker-outline" size={14} color="#rgba(255,255,255,0.7)" />
              <Text style={styles.location}>{location}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: '100%',
    borderRadius: Radius.xxl,
    overflow: 'hidden',
    marginBottom: Spacing.xl,
    ...Shadow.card,
  },
  bg: {
    flex: 1,
  },
  imgStyle: {
    borderRadius: Radius.xxl,
  },
  gradient: {
    flex: 1,
    padding: Spacing.lg,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tithiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.pill,
    gap: 6,
    overflow: 'hidden',
  },
  tithiText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  bottomContent: {
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    color: '#FFF',
    fontSize: Typography.sizes.h2,
    fontFamily: Typography.fonts.headline,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: Typography.sizes.caption,
    fontFamily: Typography.fonts.body,
  }
});

