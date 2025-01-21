import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { themeColor } from "@/theme";
import MenuModel from "@/models/MenuModel";

type RestaurentContentProp = {
  id?: string;
  title?: string;
  description?: string;
};

export default function RestaurentContent({id,title,description}:RestaurentContentProp) {
  return (
    <>
      <Text className="font-bold text-4xl">{title}</Text>
      <Text className="font-semibold text-md text-gray-600">
        {description}
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
