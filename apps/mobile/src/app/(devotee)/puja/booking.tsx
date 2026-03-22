import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { aiService } from '@/services/ai.service';

const { width } = Dimensions.get('window');

export default function PujaBookingScreen() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    gotra: '',
    nakshatra: '',
    rashi: '',
    purpose: '',
    sankalp: '',
    muhurat: '',
  });
  const [loading, setLoading] = useState(false);

  const handleAISankalp = async () => {
    if (!formData.purpose) return;
    setLoading(true);
    try {
      // Mocked for demonstration
      setTimeout(() => {
         setFormData(prev => ({ 
           ...prev, 
           sankalp: `OM SRI VISHNAVE NAMAH. Main ${formData.name}, Kashi se, aaj is punit avsar par apne parivar ki sukh-shanti aur ${formData.purpose} hetu yeh Rudrabhishek puja sampann karne ka sankalp leta hoon...` 
         }));
         setLoading(false);
      }, 1500);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleAIMuhurat = async () => {
    setLoading(true);
    try {
       setTimeout(() => {
          setFormData(prev => ({ 
            ...prev, 
            muhurat: "Shubh Muhurat: 22nd March, 06:15 AM (Brahma Muhurta)" 
          }));
          setLoading(false);
       }, 1500);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>DIVYA</Text>
        </View>
        <MaterialCommunityIcons name="bell-outline" size={24} color="#FFF" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.progressContainer}>
           <View style={styles.progressTextRow}>
             <Text style={styles.stepIndicator}>STEP {step} OF 3</Text>
             <Text style={styles.stepLabel}>Sankalp & Timing</Text>
           </View>
           <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${(step / 3) * 100}%` }]} />
           </View>
        </View>

        <View style={styles.heroContext}>
           <Text style={styles.templeName}>Kashi Vishwanath</Text>
           <Text style={styles.pujaType}>Rudrabhishek Puja</Text>
           <View style={styles.pricePill}>
             <MaterialCommunityIcons name="currency-inr" size={14} color={Colors.gold} />
             <Text style={styles.priceText}>2,500</Text>
           </View>
        </View>

        <View style={styles.formCard}>
           <Text style={styles.cardTitle}>Sankalp Bharo</Text>
           <Text style={styles.cardSubtitle}>Provide details of the devotee for whom the puja will be performed.</Text>

           <View style={styles.inputGroup}>
              <Text style={styles.label}>FULL NAME</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter full name" 
                value={formData.name}
                onChangeText={(t) => setFormData({...formData, name: t})}
                placeholderTextColor="rgba(0,0,0,0.2)"
              />
           </View>

           <View style={styles.gridInputs}>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>GOTRA</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="e.g. Bhardwaj" 
                  value={formData.gotra}
                  onChangeText={(t) => setFormData({...formData, gotra: t})}
                  placeholderTextColor="rgba(0,0,0,0.2)"
                />
              </View>
              <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.label}>RAHSI</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder="e.g. Mesh" 
                  value={formData.rashi}
                  onChangeText={(t) => setFormData({...formData, rashi: t})}
                  placeholderTextColor="rgba(0,0,0,0.2)"
                />
              </View>
           </View>

           <View style={styles.inputGroup}>
              <Text style={styles.label}>PUJA PURPOSE</Text>
              <TextInput 
                style={[styles.input, { height: 80, textAlignVertical: 'top', paddingTop: 12 }]} 
                placeholder="Health, Prosperity, or a specific wish..." 
                multiline
                value={formData.purpose}
                onChangeText={(t) => setFormData({...formData, purpose: t})}
                placeholderTextColor="rgba(0,0,0,0.2)"
              />
           </View>

           {/* AI Sankalp Tool */}
           <View style={styles.aiToolBox}>
              <View style={styles.aiToolHeader}>
                 <Text style={[styles.label, { color: Colors.gold }]}>AI SANKALP ASSIST</Text>
                 <TouchableOpacity onPress={handleAISankalp} disabled={loading}>
                    <LinearGradient colors={[Colors.gold, '#855000']} style={styles.aiButton}>
                      <MaterialCommunityIcons name="creation" size={14} color="#FFF" />
                      <Text style={styles.aiButtonText}>Generate</Text>
                    </LinearGradient>
                 </TouchableOpacity>
              </View>
              {formData.sankalp ? (
                <View style={styles.sankalpBubble}>
                   <Text style={styles.sankalpContent}>{formData.sankalp}</Text>
                </View>
              ) : (
                <Text style={styles.aiHint}>Enter purpose then click Generate to get a Vedic Sankalp draft.</Text>
              )}
           </View>

           {/* AI Muhurat Tool */}
           <View style={[styles.aiToolBox, { marginTop: 20 }]}>
              <View style={styles.aiToolHeader}>
                 <Text style={[styles.label, { color: Colors.primary }]}>AI MUHURAT CALC</Text>
                 <TouchableOpacity onPress={handleAIMuhurat} disabled={loading}>
                    <LinearGradient colors={[Colors.primary, Colors.primaryContainer]} style={styles.aiButton}>
                      <MaterialCommunityIcons name="calendar-star" size={14} color="#FFF" />
                      <Text style={styles.aiButtonText}>Find Timing</Text>
                    </LinearGradient>
                 </TouchableOpacity>
              </View>
              {formData.muhurat ? (
                <View style={styles.muhuratBubble}>
                   <Text style={styles.muhuratContent}>{formData.muhurat}</Text>
                </View>
              ) : (
                <Text style={styles.aiHint}>Click to find the most auspicious timing for this puja.</Text>
              )}
           </View>
        </View>

        <View style={styles.infoTip}>
          <MaterialCommunityIcons name="information-outline" size={16} color={Colors.light.textTertiary} />
          <Text style={styles.infoTipText}>In case Gotra is unknown, 'Kashyap' Gotra is traditionally used for Sankalp rituals.</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
         <View>
            <Text style={styles.payableLabel}>TOTAL PAYABLE</Text>
            <Text style={styles.payableAmount}>₹2,500</Text>
         </View>
         <TouchableOpacity style={styles.continueButton}>
            <LinearGradient colors={[Colors.primary, Colors.primaryContainer]} style={styles.continueGradient}>
               <Text style={styles.continueText}>Continue</Text>
               <MaterialCommunityIcons name="arrow-right" size={18} color="#FFF" />
            </LinearGradient>
         </TouchableOpacity>
      </View>
      
      {loading && (
        <View style={styles.loadingOverlay}>
           <ActivityIndicator size="large" color={Colors.primary} />
           <Text style={styles.loadingText}>Divya AI is consulting the Vedas...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.bg,
  },
  header: {
    height: 56,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontFamily: Typography.fonts.serifBold,
    fontSize: 20,
    color: '#FFF',
    letterSpacing: 2,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  progressContainer: {
    padding: 24,
    gap: 8,
  },
  progressTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  stepIndicator: {
    fontSize: 10,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.primary,
    letterSpacing: 1,
  },
  stepLabel: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    fontFamily: Typography.fonts.sansMedium,
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.light.surface2,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  heroContext: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  templeName: {
    fontFamily: Typography.fonts.serifBold,
    fontSize: 32,
    color: Colors.primary,
  },
  pujaType: {
    fontFamily: Typography.fonts.serifRegular,
    fontSize: 18,
    fontStyle: 'italic',
    color: Colors.light.textSecondary,
    marginTop: 4,
  },
  pricePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.surface2,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    marginTop: 16,
    gap: 4,
  },
  priceText: {
    fontFamily: Typography.fonts.mono,
    fontWeight: 'bold',
    color: Colors.gold,
    fontSize: 16,
  },
  formCard: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 24,
    ...Shadow.card,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
  },
  cardTitle: {
    fontFamily: Typography.fonts.serifBold,
    fontSize: 24,
    color: Colors.light.textPrimary,
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 13,
    color: Colors.light.textTertiary,
    lineHeight: 18,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  gridInputs: {
    flexDirection: 'row',
    gap: 16,
  },
  label: {
    fontSize: 10,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.gold,
    letterSpacing: 1,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: Colors.light.surface2,
    borderRadius: Radius.md,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 14,
    fontFamily: Typography.fonts.sansRegular,
    color: Colors.light.textPrimary,
  },
  aiToolBox: {
    backgroundColor: 'rgba(186, 117, 23, 0.05)',
    padding: 16,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: 'rgba(186, 117, 23, 0.1)',
  },
  aiToolHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  aiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    gap: 6,
  },
  aiButtonText: {
    color: '#FFF',
    fontSize: 11,
    fontFamily: Typography.fonts.sansSemiBold,
  },
  aiHint: {
    fontSize: 11,
    fontStyle: 'italic',
    color: Colors.light.textTertiary,
    opacity: 0.7,
  },
  sankalpBubble: {
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.gold,
  },
  sankalpContent: {
    fontSize: 12,
    lineHeight: 18,
    color: Colors.light.textSecondary,
    fontFamily: Typography.fonts.serifRegular,
  },
  muhuratBubble: {
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  muhuratContent: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  infoTip: {
    flexDirection: 'row',
    padding: 24,
    gap: 12,
    opacity: 0.6,
  },
  infoTipText: {
    flex: 1,
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.light.textTertiary,
  },
  footer: {
    height: 80,
    backgroundColor: 'rgba(250, 249, 246, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  payableLabel: {
    fontSize: 10,
    fontFamily: Typography.fonts.sansSemiBold,
    color: Colors.light.textTertiary,
    letterSpacing: 1,
  },
  payableAmount: {
    fontFamily: Typography.fonts.mono,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.gold,
  },
  continueButton: {
    borderRadius: Radius.md,
    overflow: 'hidden',
  },
  continueGradient: {
    paddingHorizontal: 32,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  continueText: {
    color: '#FFF',
    fontFamily: Typography.fonts.sansSemiBold,
    fontSize: 15,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 14,
    fontFamily: Typography.fonts.serifRegular,
    color: Colors.primary,
    fontStyle: 'italic',
  },
});
