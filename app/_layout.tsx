import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { store } from "@/store/store";
import { Provider } from "react-redux";

// Tailwind Css
import "../global.css";
import React from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="restaurent/[restaurent]"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="orderPlaced" options={{ headerShown: false }} />
          <Stack.Screen name="delivery" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </>
  );
}
