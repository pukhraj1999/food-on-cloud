import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import { restaurents } from "@/constants/FoodRestaurents";
import { router } from "expo-router";

import { themeColor } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

type BannerProp = {
  pic?: string;
}

export default function Banner({ pic }: BannerProp) {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View className="relative">
        <Image className="w-full h-72" source={{ uri: pic }} />
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{ boxShadow: themeColor.shadowB }}
          className="absolute top-14 left-4 h-8 w-8 bg-white rounded-full flex justify-center items-center"
        >
          <Ionicons name="arrow-back" size={24} color={themeColor.text} />
        </TouchableOpacity>
      </View>
    </>
  );
}
