import { View, Text } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import useCustomTheme from "@/theme/useCustomTheme";

export default function LocationDetail() {
  const themeColor = useCustomTheme();
  return (
    <View className="my-1 flex-row items-center">
      <Feather name="map-pin" size={15} color={themeColor.text} />
      <Text className="ml-1 text-md text-center">Nakodar, Punjab | PB</Text>
    </View>
  );
}
