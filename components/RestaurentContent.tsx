import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themeColor } from "@/theme";

export default function RestaurentContent() {
  return (
    <>
      <Text className="font-bold text-4xl">Burgr Shrgr</Text>
      <Text className="font-semibold text-md text-gray-600">
        Spicy and Crispy Chicken
      </Text>
      <View className="flex-row items-center">
        <AntDesign name="star" size={15} color={themeColor.bgColor("1")} />
        <Text className="ml-1 text-lg">
          4 {"("} {"4k"} reviews {") . "}
        </Text>
        <Text
          className="ml-1 font-bold text-lg"
          style={{ color: themeColor.text }}
        >
          Fast Food
        </Text>
      </View>
    </>
  );
}
