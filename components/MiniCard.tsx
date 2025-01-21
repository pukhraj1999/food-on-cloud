import { View, Text, Image, ImageProps, TouchableOpacity } from "react-native";
import React from "react";
import { themeColor } from "@/theme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";

type MiniCardProp = {
  id?: string;
  title?: string;
  ingredients?: string;
  category?: string;
  currecy?: string;
  price?: number;
  pic?: string;
};

export default function MiniCard({ id, title, ingredients, category, currecy, price, pic }: MiniCardProp) {
  return (
    <View className="my-2">
      <View
        style={{
          boxShadow: themeColor.shadowB,
        }}
        className="flex-row items-center rounded-3xl"
      >
        <View>
          <Image
            className="rounded-3xl"
            style={{ width: 110, height: 150 }}
            source={{ uri: pic }}
          />
        </View>
        <View className="px-2 flex-1 my-2">
          <View className="flex-grow">
            <Text className="text-2xl font-bold">{title}</Text>
            <Text className="font-semibold text-sm text-gray-600">
              {ingredients}
            </Text>
          </View>
          <View>
            <Text className="text-2xl font-bold">{currecy} {price}</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mx-2 h-8 w-8 rounded-full flex-row justify-center items-center"
          >
            <Ionicons name="remove-sharp" size={20} color="white" />
          </TouchableOpacity>
          <Text className="mx-2 font-bold text-xl">2</Text>
          <TouchableOpacity
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mx-2 h-8 w-8 rounded-full flex-row justify-center items-center"
          >
            <FontAwesome6 name="add" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
