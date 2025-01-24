import { View, Text, TouchableOpacity, ScrollView, ImageProps } from "react-native";
import React from "react";
import FeatureCard from "./FeatureCard";
import MenuModel from "@/models/MenuModel";
import { BASE_URL } from "@/api/API";
import { router } from "expo-router";
import useCustomTheme from "@/theme/useCustomTheme";

type FeatureProp = {
  restaurent_id?: string
  title?: string
  description?: string
  menu?: MenuModel[]
}

export default function FeaureSection({ restaurent_id, title, description, menu = [] }: FeatureProp) {
  const themeColor = useCustomTheme();
  return (
    <View className="my-2">
      <View className="mr-2 flex-row justify-between items-center">
        <View>
          <Text className="font-bold text-2xl">{title}</Text>
          <Text className="font-semibold text-md text-gray-600">
            {description}
          </Text>
        </View>

        <TouchableOpacity onPress={() => router.push(`/restaurent/${restaurent_id}`)}>
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
        {menu
          .map((menuItem, idx) => {
            return (
              <FeatureCard
                key={idx}
                id={restaurent_id}
                title={menuItem.name}
                category={menuItem.category_id.name}
                review="4K"
                stars={5}
                pic={BASE_URL + "/" + menuItem.pictures[0]}
              />
            );
          })}
      </ScrollView>
    </View>
  );
}
