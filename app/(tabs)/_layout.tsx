// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

// Track if splash has been shown to prevent showing it again on navigation
let splashShown = false;

export default function TabLayout() {
  const [showSplash, setShowSplash] = useState(!splashShown);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Only show splash on first app load, not on navigation
    if (splashShown) {
      // If splash was already shown, hide it immediately
      SplashScreen.hideAsync();
      setShowSplash(false);
      return;
    }

    // Mark as shown immediately to prevent showing on remount
    splashShown = true;

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(async () => {
      await SplashScreen.hideAsync();
      setShowSplash(false);
    });
  }, []);

  // ⭐ SPLASH SCREEN UI - Only show on first load
  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Animated.Image
          source={require('../../assets/images/logo.png')}
          style={[styles.logo, { opacity: fadeAnim }]}
          resizeMode="contain"
        />
      </View>
    );
  }

  // ⭐ NORMAL APP UI (tabs)
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E2E8F0',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'home' : 'home-outline'} 
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 220,
  },
});
