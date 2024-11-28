import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import { themeColor } from "@/theme";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CartCard from "./CartCard";

export default function CartContent() {
  return (
    <View className="flex-1">
      <View
        style={{ backgroundColor: themeColor.bgColor("0.3") }}
        className="p-5 flex-row justify-between items-center"
      >
        <FontAwesome6 name="motorcycle" size={30} color={themeColor.text} />
        <Text className="text-lg font-bold">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text
            style={{ color: themeColor.text }}
            className="text-lg font-bold"
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6].map((content, idx) => {
          return <CartCard key={idx} />;
        })}
      </ScrollView>
      <View
        style={{
          backgroundColor: themeColor.bgColor("0.3"),
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View className="mx-5 py-4 p-2">
          <View className="my-2 flex-row justify-between items-center mx-5">
            <Text className="text-xl">Sub Total</Text>
            <Text className="text-xl">₹ 250</Text>
          </View>
          <View className="my-2 flex-row justify-between items-center mx-5">
            <Text className="text-xl">Delivery Fee</Text>
            <Text className="text-xl">₹ 2</Text>
          </View>
          <View className="my-2 flex-row justify-between items-center mx-5">
            <Text className="text-xl font-bold">Order Total</Text>
            <Text className="text-xl font-bold">₹ 252</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: themeColor.bgColor("1"),
                boxShadow: themeColor.shadowA,
              }}
              className="p-2 rounded-lg"
            >
              <Text className="text-2xl text-center text-white font-bold">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
