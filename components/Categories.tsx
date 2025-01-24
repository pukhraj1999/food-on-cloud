import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import CategoryModel from "@/models/CategoryModel";
import { BASE_URL } from "@/api/API";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { filterMenu, setSelectedCategory } from "@/store/features/restaurentSlice";
import useCustomTheme from "@/theme/useCustomTheme";

type CategoryProp ={
  categories?: CategoryModel[],
}

export default function Categories({categories=[]}:CategoryProp) {
  const themeColor = useCustomTheme();
  const dispatch = useDispatch();
  const selectedCategory=useSelector((state: RootState) => state.restaurentReducer.selectedCategory);
  return (
    <View className="my-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
      >
        {categories.map((category, idx) => {
          let isActive = selectedCategory?._id === category._id;
          let color = isActive
            ? themeColor.bgColor("1")
            : themeColor.bgColor("0.4");
          return (
            <View key={idx} className="items-center">
              <TouchableOpacity
                onPress={() => {
                  dispatch(setSelectedCategory({ id: category._id }));
                  dispatch(filterMenu());
                }}
                style={{
                  borderColor: themeColor.bgColor("1"),
                  backgroundColor: color,
                  boxShadow: themeColor.shadowA,
                }}
                className="border-2 rounded-full p-2 ml-2"
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{ uri: BASE_URL + "/" +category.pictures[0] }}
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
