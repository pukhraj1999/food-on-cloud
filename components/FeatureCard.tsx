import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import useCustomTheme from "@/theme/useCustomTheme";

type FeatureCardProp = {
  id?: string;
  title?: string;
  category?: string;
  stars?: number;
  review?: string;
  pic?: string;
};

export default function FeatureCard({
  id,
  title,
  pic,
  category,
  stars,
  review,
}: FeatureCardProp) {
  const themeColor = useCustomTheme();
  return (
    <View className="mr-4">
      <TouchableOpacity
        style={{ boxShadow: themeColor.shadowB }}
        className="rounded-3xl"
        onPress={() => router.push(`/restaurent/${id}`)}
      >
        <Image className="rounded-t-3xl h-36 w-64" source={{uri:pic}} />
        <View className="p-4">
          <Text className="text-2xl">{title}</Text>
          <View className="flex-row items-center">
            <AntDesign name="star" size={15} color={themeColor.bgColor("1")} />
            <Text className="ml-1 text-md">
              {stars} {"("} {review} reviews {") . "}
            </Text>
            <Text
              className="ml-1 font-bold text-sm"
              style={{ color: themeColor.text }}
            >
              {category}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
