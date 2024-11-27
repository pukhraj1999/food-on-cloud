import { View, Text } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { themeColor } from "@/theme";

export default function LocationDetail() {
  return (
    <View className="my-1 flex-row items-center">
      <Feather name="map-pin" size={15} color={themeColor.text} />
      <Text className="ml-1 text-md text-center">Nakodar, Punjab | PB</Text>
    </View>
  );
}
