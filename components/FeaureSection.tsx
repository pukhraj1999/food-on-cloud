import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColor } from "@/theme";
import FeatureCard from "./FeatureCard";
import { restaurents } from "@/constants/FoodRestaurents";
import { dishes } from "@/constants/FoodDishes";

export default function FeaureSection() {
  return (
    <View className="my-2">
      <View className="mr-2 flex-row justify-between items-center">
        <View>
          <Text className="font-bold text-2xl">New Mangeet </Text>
          <Text className="font-semibold text-md text-gray-600">
            Take some food, forget the world
          </Text>
        </View>

        <TouchableOpacity>
          <Text
            className="font-bold text-xl"
            style={{ color: themeColor.text }}
          >
            See More
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        className="overflow-visible my-2"
        showsHorizontalScrollIndicator={false}
      >
        {dishes
          .filter((_, idx) => idx <= 5)
          .map((content, idx) => {
            return (
              <FeatureCard
                key={idx}
                title="Dish Name"
                category="Fast Food"
                review="4K"
                stars={5}
                pic={content.pic}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}
