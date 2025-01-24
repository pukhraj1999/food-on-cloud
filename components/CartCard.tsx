import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColor } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import CartModel from "@/models/CartModel";
import { BASE_URL } from "@/api/API";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/store/features/restaurentSlice";

type CartCardProps = {
  cartItem?: CartModel;
}

export default function CartCard({ cartItem }: CartCardProps) {
  const dispatch = useDispatch();
  return (
    <View className="mx-5 my-2">
      <View
        style={{ boxShadow: themeColor.shadowB }}
        className="rounded-3xl p-2 px-4 flex-row items-center"
      >
        <View>
          <Text
            style={{ color: themeColor.text }}
            className="mx-2 text-2xl font-bold"
          >
            {cartItem?.quantity} x{" "}
          </Text>
        </View>
        <Image
          className="rounded-full"
          style={{ width: 80, height: 80 }}
          source={{ uri: BASE_URL + "/" + cartItem?.menuItem?.pictures[0] }}
        />
        <View className="flex-grow">
          <Text className="mx-2 text-xl font-bold w-20">{cartItem?.menuItem?.name}</Text>
        </View>
        <View className="flex-row">
          <Text className="mx-2 text-2xl font-bold">{cartItem?.menuItem?.currency} {cartItem?.menuItem?.price}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeFromCart(cartItem?.menuItem!));
            }}
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mx-2 h-8 w-8 rounded-full flex-row justify-center items-center"
          >
            <Ionicons name="remove-sharp" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
