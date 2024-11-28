import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { dishes } from "@/constants/FoodDishes";
import { themeColor } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CartCard() {
  const pic = dishes[0].pic;
  return (
    <View className="mx-5 my-2">
      <View
        style={{ boxShadow: themeColor.shadowB }}
        className="rounded-3xl p-2 px-4 flex-row items-center"
      >
        <View>
          <Text
            style={{ color: themeColor.text }}
            className="mx-2 text-2xl font-bold"
          >
            2 x{" "}
          </Text>
        </View>
        <Image
          className="rounded-full"
          style={{ width: 80, height: 80 }}
          source={pic}
        />
        <View className="flex-grow">
          <Text className="mx-2 text-2xl font-bold">Pizza</Text>
        </View>
        <View className="flex-row">
          <Text className="mx-2 text-2xl font-bold">₹ 250</Text>
          <TouchableOpacity
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mx-2 h-8 w-8 rounded-full flex-row justify-center items-center"
          >
            <Ionicons name="remove-sharp" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
