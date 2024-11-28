import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StatusBar, Text, TouchableOpacity, Image } from "react-native";
import { themeColor } from "@/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export default function Delivery() {
  return (
    <View className="flex-1">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <MapView
        mapType="standard"
        initialRegion={{
          latitude: 31.12708,
          longitude: 435.473288,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          latitude: 31.12708,
          longitude: 435.473288,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        style={{ width: "100%", height: "78%" }}
      >
        <Marker
          coordinate={{
            latitude: 31.12708,
            longitude: 435.473288,
          }}
          title="Burgr Shrgr"
          description="Hot n Spicy"
          pinColor={themeColor.bgColor("1")}
        />
      </MapView>
      <View
        className="-mt-12  bg-white h-full w-full "
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
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
      </View>
    </View>
  );
}
