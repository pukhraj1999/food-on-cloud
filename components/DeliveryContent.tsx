import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import useCustomTheme from "@/theme/useCustomTheme";

export default function DeliveryContent() {
  const themeColor = useCustomTheme();
  return (
    <View className="p-5">
      <View className="mx-3 flex-row items-center">
        <View>
          <Text className="text-2xl font-semibold">Estimated Arrival</Text>
          <Text className="text-3xl font-bold">20-30 Minutes</Text>
          <Text className="text-xl text-gray-600">
            Your Order is own it's way
          </Text>
        </View>
        <View className="ml-5">
          <Image
            className="h-32 w-32"
            source={require("../assets/loading/delivery.jpg")}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: themeColor.bgColor("1"),
          boxShadow: themeColor.shadowA,
        }}
        className="rounded-lg flex-row items-center"
      >
        <Image
          className="h-16 w-16 rounded-full m-2"
          source={require("../assets/profile/profile.jpg")}
        ></Image>
        <View className="flex-grow">
          <Text className="text-bold text-xl text-white font-bold">
            Ramnit Singh
          </Text>
          <Text className="text-bold text-md text-white font-semibold">
            Your Rider
          </Text>
        </View>
        <TouchableOpacity
          className="mr-5"
          onPress={() => {
            router.back();
          }}
        >
          <AntDesign name="close" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
