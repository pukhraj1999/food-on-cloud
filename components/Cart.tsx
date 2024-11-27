import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { themeColor } from "@/theme";
import { router } from "expo-router";
import CustomModal from "./CustomModal";
import CartContent from "./CartContent";

export default function Cart() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <>
      <View className="absolute bottom-10 left-0 w-full z-50">
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(true);
          }}
          activeOpacity={0.6}
          style={{
            boxShadow: themeColor.shadowA,
            backgroundColor: themeColor.bgColor("1"),
          }}
          className="px-5 flex-row justify-between items-center mx-5 rounded-full p-4 py-3"
        >
          <View
            className="p-2 rounded-full flex-row justify-center items-center"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <Text className="px-2 text-xl text-center text-white font-bold">
              3
            </Text>
          </View>
          <Text className="text-xl text-white font-bold">View Cart</Text>
          <Text className="text-xl text-white font-bold">₹250</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <CartContent />
      </CustomModal>
    </>
  );
}
