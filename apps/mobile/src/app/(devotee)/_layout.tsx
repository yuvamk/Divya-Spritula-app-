import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Radius, Shadow, Spacing } from '@/constants/theme';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';

function TabBarIcon({ name, color, size, focused }: { name: any, color: string, size?: number, focused?: boolean }) {
  return (
    <View style={focused ? styles.activeIconBg : null}>
      <MaterialCommunityIcons name={name} size={size || 24} color={color} />
    </View>
  );
}

export default function DevoteeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.light.onSurfaceVar,
        tabBarLabelStyle: styles.label,
        tabBarBackground: () => (
          <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "home" : "home-outline"} color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "compass" : "compass-outline"} color={color} focused={focused} />,
        }}
      />
      
      <Tabs.Screen
        name="chatbot"
        options={{
          title: "",
          tabBarIcon: () => (
            <View style={styles.omButtonContainer}>
              <LinearGradient
                colors={[Colors.primary, Colors.secondary]}
                style={styles.omButton}
              >
                <Text style={styles.omText}>ॐ</Text>
              </LinearGradient>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="seva/index"
        options={{
          title: "Seva",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "heart" : "heart-outline"} color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Mera",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "account" : "account-outline"} color={color} focused={focused} />,
        }}
      />

      {/* Hide detail screens from tabs */}
      <Tabs.Screen name="seva/[driveId]" options={{ href: null }} />
      <Tabs.Screen name="puja/index" options={{ href: null }} />
      <Tabs.Screen name="puja/book" options={{ href: null }} />
      <Tabs.Screen name="puja/[orderId]" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 85,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderTopWidth: 0,
    paddingBottom: 25,
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
  },
  label: {
    fontSize: 10,
    fontFamily: Typography.fonts.label,
    marginTop: 4,
    fontWeight: '600',
  },
  activeIconBg: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: Radius.pill,
    backgroundColor: Colors.light.surfaceHigh,
  },
  omButtonContainer: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 12,
  },
  omButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFF',
  },
  omText: {
    fontSize: 28,
    color: '#FFF',
    fontFamily: Typography.fonts.display,
    lineHeight: 34,
  }
});

