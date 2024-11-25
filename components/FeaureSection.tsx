import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColor } from "@/theme";
import FeatureCard from "./FeatureCard";
import { restaurents } from "@/constants/FoodRestaurents";

export default function FeaureSection() {
  return (
    <View className="my-2">
      <View className="mr-2 flex-row justify-between items-center">
        <View>
          <Text className="font-bold text-2xl">Hot nd Spicy </Text>
          <Text className="font-semibold text-md text-gray-600">
            Spicy and Crispy Chicken
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
        {restaurents.map((content, idx) => {
          return (
            <FeatureCard
              key={idx}
              title="Burgur Shrgr"
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
