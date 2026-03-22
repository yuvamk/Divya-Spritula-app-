import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { SaffronDivider } from '@/components/ui/SaffronDivider';

const { width, height } = Dimensions.get('window');

export default function LiveAartiScreen() {
  const [viewers, setViewers] = useState(124);
  const [reactions, setReactions] = useState<string[]>([]);

  const addReaction = (emoji: string) => {
    setReactions(prev => [...prev.slice(-10), emoji]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
         <Video
           source={{ uri: 'https://d23dyxeqlo5ps1.cloudfront.net/big_buck_bunny.mp4' }}
           rate={1.0}
           volume={1.0}
           isMuted={false}
           resizeMode={'cover' as any}
           shouldPlay
           isLooping
           style={styles.video}
         />
         <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.videoHeader}>
            <View style={styles.liveBadge}>
               <View style={styles.liveDot} />
               <Text style={styles.liveText}>LIVE</Text>
            </View>
            <View style={styles.viewerBadge}>
               <MaterialCommunityIcons name="eye" size={14} color="#FFF" />
               <Text style={styles.viewerText}>{viewers}</Text>
            </View>
            <TouchableOpacity style={styles.closeBtn}>
               <MaterialCommunityIcons name="close" size={24} color="#FFF" />
            </TouchableOpacity>
         </LinearGradient>

         <View style={styles.videoFooter}>
            <Text style={styles.templeName}>Kashi Vishwanath Mandir</Text>
            <Text style={styles.aartiTitle}>Sandhya Aarti • Live from Varanasi</Text>
            <SaffronDivider marginVertical={Spacing.sm} />
         </View>
      </View>

      <View style={styles.controls}>
         <View style={styles.reactionGrid}>
            {['🪔', '🔔', '🌸', '🙏'].map(emoji => (
              <TouchableOpacity key={emoji} style={styles.reactionBtn} onPress={() => addReaction(emoji)}>
                 <Text style={styles.emoji}>{emoji}</Text>
              </TouchableOpacity>
            ))}
         </View>
         
         <TouchableOpacity style={styles.donateBtn}>
            <LinearGradient colors={[Colors.accent, '#A06B00']} style={styles.donateGrad}>
               <MaterialCommunityIcons name="hand-heart" size={20} color="#FFF" />
               <Text style={styles.donateText}>Chadhawa Arpit Karein</Text>
            </LinearGradient>
         </TouchableOpacity>
      </View>

      <View style={styles.floatingArea} pointerEvents="none">
         {reactions.map((r, i) => (
            <Text key={i} style={[styles.floatingEmoji, { left: 40 + (i * 30) % (width - 80) }]}>{r}</Text>
         ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  videoContainer: { flex: 1, justifyContent: 'center' },
  video: { ...StyleSheet.absoluteFillObject },
  videoHeader: { position: 'absolute', top: 0, left: 0, right: 0, height: 140, paddingTop: 60, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', gap: 12 },
  liveBadge: { backgroundColor: Colors.error, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, gap: 4 },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#FFF' },
  liveText: { color: '#FFF', fontSize: 10, fontFamily: Typography.fonts.headline, fontWeight: '700' },
  viewerBadge: { backgroundColor: 'rgba(0,0,0,0.4)', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, gap: 4 },
  viewerText: { color: '#FFF', fontSize: 10, fontFamily: Typography.fonts.body },
  closeBtn: { marginLeft: 'auto', width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  videoFooter: { position: 'absolute', bottom: 120, left: 20, right: 20 },
  templeName: { color: '#FFF', fontSize: 26, fontFamily: Typography.fonts.display, textShadowColor: 'rgba(0,0,0,0.5)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 4 },
  aartiTitle: { color: 'rgba(255,255,255,0.8)', fontSize: 14, fontFamily: Typography.fonts.body, marginTop: 4 },
  controls: { height: 120, backgroundColor: '#1A0F0E', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingBottom: 30, gap: 16, borderTopLeftRadius: Radius.xxl, borderTopRightRadius: Radius.xxl },
  reactionGrid: { flexDirection: 'row', gap: 10 },
  reactionBtn: { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 22 },
  donateBtn: { flex: 1, borderRadius: Radius.xl, overflow: 'hidden', ...Shadow.card },
  donateGrad: { height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  donateText: { color: '#FFF', fontSize: 16, fontFamily: Typography.fonts.headline, fontWeight: '700' },
  floatingArea: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end', paddingBottom: 150 },
  floatingEmoji: { fontSize: 32, position: 'absolute', bottom: 100 }
});

