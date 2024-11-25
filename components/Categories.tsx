import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "@/constants/FoodCategories";
import { themeColor } from "@/theme";

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<number>(1);
  return (
    <View className="my-2 mx-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
      >
        {categories.map((category, idx) => {
          let isActive = category.id === activeCategory;
          let color = isActive
            ? themeColor.bgColor("1")
            : themeColor.bgColor("0.4");
          return (
            <View key={idx} className="items-center">
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                style={{
                  borderColor: themeColor.bgColor("1"),
                  backgroundColor: color,
                  boxShadow: themeColor.shadowA,
                }}
                className="border-2 rounded-full p-2 ml-2"
              >
                <Image
                  style={{ width: 60, height: 60 }}
                  source={category.pic}
                ></Image>
              </TouchableOpacity>
              <Text className="font-bold" style={{ color: color }}>
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
