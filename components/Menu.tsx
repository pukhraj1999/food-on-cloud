import { View, Text } from "react-native";
import React from "react";
import MiniCard from "./MiniCard";
import { dishes } from "@/constants/FoodDishes";

export default function Menu() {
  return (
    <View className="my-2">
      <Text className="font-bold text-3xl">Menu</Text>
      {dishes.map((content, idx) => {
        return <MiniCard key={idx} pic={content.pic} />;
      })}
    </View>
  );
}
