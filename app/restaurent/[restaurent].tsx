import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, ScrollView } from "react-native";

import { themeColor } from "@/theme";
import Banner from "@/components/Banner";
import LocationDetail from "@/components/LocationDetail";
import RestaurentContent from "@/components/RestaurentContent";
import Menu from "@/components/Menu";
import Cart from "@/components/Cart";
import Categories from "@/components/Categories";

type LocalParams = {
  restaurent: string;
};

export default function Restaurent() {
  const { restaurent }: LocalParams = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="overflow-visible"
        showsVerticalScrollIndicator={false}
      >
        <Banner />
        <View
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          className="bg-white -mt-12  pt-6"
        >
          <View className="px-5">
            <RestaurentContent />
            <LocationDetail />
            <Categories />
            <Menu />
          </View>
        </View>
      </ScrollView>
      <Cart />
    </View>
  );
}
