import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

SplashScreen.preventAutoHideAsync();
type AnimatedSplashProps = {
  onFinish: () => void;
}; 
const AnimatedSplash = ({ onFinish }: AnimatedSplashProps ) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(async () => {
      await SplashScreen.hideAsync();
      onFinish();
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[styles.logo, { opacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

export default AnimatedSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 220,
  },
});
