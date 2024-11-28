import React from "react";
import { View, StatusBar } from "react-native";
import Mapper from "@/components/Mapper";
import DeliveryContent from "@/components/DeliveryContent";

export default function Delivery() {
  return (
    <View className="flex-1">
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Mapper />
      <View
        className="-mt-12  bg-white h-full w-full "
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <DeliveryContent />
      </View>
    </View>
  );
}
