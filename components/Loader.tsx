import { View, StyleSheet, Image, Animated, StatusBar } from "react-native";
import React, { useEffect, useRef } from "react";
import { BlurView } from "expo-blur";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import useCustomTheme from "@/theme/useCustomTheme";

export default function Loader() {
  const translateX = useRef(new Animated.Value(-300)).current;
  const themeColor = useCustomTheme();
  useEffect(() => {
    const animate = () => {
      Animated.timing(translateX, {
        toValue: 350, // Move to off-screen to the right
        duration: 1000, // Duration of the animation
        useNativeDriver: true,
      }).start(() => {
        // Reset back to the left and repeat
        translateX.setValue(-300);
        animate(); // Call the function recursively
      });
    };

    animate(); // Start the animation
  }, [translateX]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <BlurView intensity={50} tint="dark" style={styles.blurBackground} />
      <View className="relative">
        <Image
          className="h-full w-full"
          source={require("@/assets/loading/food.jpg")}
        />
        <View className="absolute top-1/3 left-0 z-20">
          <Animated.View style={{ transform: [{ translateX }] }}>
            <FontAwesome6
              name="motorcycle"
              size={250}
              color={themeColor.text}
            />
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blurBackground: {
    ...StyleSheet.absoluteFillObject, // Fills the entire screen
    zIndex: 1, // Places it beneath the modal content
  },
});
