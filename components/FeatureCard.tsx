import { View, Text, Image, ImageProps, TouchableOpacity } from "react-native";
import React from "react";
import { router } from 'expo-router';

import AntDesign from "@expo/vector-icons/AntDesign";
import { themeColor } from "@/theme";
import Feather from "@expo/vector-icons/Feather";

type FeatureCardProp = {
  title?: string;
  category?: string;
  stars?: number;
  review?: string;
  pic?: ImageProps;
};

export default function FeatureCard({
  title,
  pic,
  category,
  stars,
  review,
}: FeatureCardProp) {

  return (
    <View className="mr-4">
      <TouchableOpacity
        style={{ boxShadow: themeColor.shadowB }}
        className="rounded-3xl"
        onPress={()=>router.push(`/restaurent/${title}`)}
      >
        <Image className="rounded-t-3xl h-36 w-64" source={pic} />
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
          <View className="my-1 flex-row items-center">
            <Feather name="map-pin" size={15} color={themeColor.text} />
            <Text className="ml-1 text-md text-center">
              Nakodar, Punjab | PB
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
