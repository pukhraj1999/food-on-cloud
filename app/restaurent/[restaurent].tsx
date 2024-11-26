import { restaurents } from "@/constants/FoodRestaurents";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";
import { themeColor } from "@/theme";

type LocalParams = {
  restaurent: string;
};

export default function Restaurent() {
  const { restaurent }: LocalParams = useLocalSearchParams();
  const image = restaurents[0].pic;

  return (
    <View className="flex-1 bg-white">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Image className="w-full h-72" source={image} />
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            style={{ boxShadow: themeColor.shadowB }}
            className="absolute top-14 left-4 h-8 w-8 bg-white rounded-full flex justify-center items-center"
          >
            <Ionicons name="arrow-back" size={24} color={themeColor.text} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          className="bg-white -mt-12  pt-6"
        >
          <View className="mx-5">
            <Text className="text-2xl">Burgr Shrgr</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
