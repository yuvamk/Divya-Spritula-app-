import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const SUGGESTIONS = [
  "Shubh Muhurat for Grah Pravesh?",
  "How to perform Rudrabhishek?",
  "Nearest Hanuman Mandir?",
  "Meaning of Gayatri Mantra?"
];

export default function ChatbotScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Namaste! I am your Divine AI Assistant. How may I guide your spiritual journey today?', sender: 'ai' }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<ScrollView>(null);

  const handleSend = (text?: string) => {
    const msgText = text || input;
    if (!msgText.trim()) return;

    const userMsg = { id: Date.now().toString(), text: msgText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    if (!text) setInput("");
    
    // Simulate AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        text: "According to the Vedic scriptures, the current Tithi is favorable for Sankalp. Would you like me to guide you through the process?", 
        sender: 'ai' 
      }]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.header}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <MaterialCommunityIcons name="chevron-left" size={28} color="#FFF" />
            </TouchableOpacity>
            <View style={styles.headerInfo}>
              <MaterialCommunityIcons name="auto-fix" size={20} color={Colors.accent} />
              <Text style={styles.headerTitle}>Divine AI Assistant</Text>
            </View>
            <TouchableOpacity style={styles.clearBtn}>
              <MaterialCommunityIcons name="refresh" size={22} color="#FFF" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView 
        ref={scrollRef}
        contentContainerStyle={styles.messageList}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(msg => (
          <View key={msg.id} style={[styles.messageWrapper, msg.sender === 'user' ? styles.userWrapper : styles.aiWrapper]}>
            <View style={[styles.bubble, msg.sender === 'user' ? styles.userBubble : styles.aiBubble]}>
              {msg.sender === 'ai' && (
                <LinearGradient colors={[Colors.primary + '10', 'transparent']} style={StyleSheet.absoluteFill} />
              )}
              <Text style={[styles.msgText, msg.sender === 'user' ? styles.userText : styles.aiText]}>{msg.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.suggestions}>
          {SUGGESTIONS.map((s, i) => (
            <TouchableOpacity key={i} style={styles.suggestBtn} onPress={() => handleSend(s)}>
              <Text style={styles.suggestText}>{s}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={20}>
          <BlurView intensity={80} tint="light" style={styles.inputArea}>
            <TextInput 
              value={input}
              onChangeText={setInput}
              placeholder="Ask anything spiritual..."
              placeholderTextColor={Colors.light.onSurfaceVar}
              style={styles.input}
              multiline
            />
            <TouchableOpacity style={styles.sendBtn} onPress={() => handleSend()}>
              <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.sendGrad}>
                <MaterialCommunityIcons name="send" size={18} color="#FFF" />
              </LinearGradient>
            </TouchableOpacity>
          </BlurView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  header: { borderBottomLeftRadius: Radius.xxl, borderBottomRightRadius: Radius.xxl, ...Shadow.card },
  headerContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12 },
  backBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  headerInfo: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  headerTitle: { fontSize: 18, fontFamily: Typography.fonts.headline, color: '#FFF', fontWeight: '700' },
  clearBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  messageList: { padding: 20, paddingBottom: 40 },
  messageWrapper: { marginBottom: 16, maxWidth: '85%' },
  userWrapper: { alignSelf: 'flex-end' },
  aiWrapper: { alignSelf: 'flex-start' },
  bubble: { padding: 16, borderRadius: Radius.xl, overflow: 'hidden' },
  userBubble: { backgroundColor: Colors.primary, borderBottomRightRadius: 4 },
  aiBubble: { backgroundColor: '#FFF', borderBottomLeftRadius: 4, ...Shadow.sm, borderWidth: 1, borderColor: Colors.light.surfaceHigh },
  msgText: { fontSize: 15, lineHeight: 22, fontFamily: Typography.fonts.body },
  userText: { color: '#FFF' },
  aiText: { color: Colors.light.onSurface },
  footer: { paddingBottom: 30 },
  suggestions: { paddingHorizontal: 20, gap: 10, marginBottom: 16 },
  suggestBtn: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: Radius.pill, backgroundColor: '#FFF', borderWidth: 1, borderColor: Colors.light.surfaceHigh, ...Shadow.sm },
  suggestText: { fontSize: 13, color: Colors.primary, fontFamily: Typography.fonts.headline },
  inputArea: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, padding: 8, borderRadius: Radius.pill, borderWidth: 1, borderColor: 'rgba(0,0,0,0.05)', overflow: 'hidden' },
  input: { flex: 1, maxHeight: 100, fontSize: 15, paddingHorizontal: 16, color: Colors.light.onSurface },
  sendBtn: { width: 44, height: 44, borderRadius: 22, overflow: 'hidden' },
  sendGrad: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

