import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CartCard from "./CartCard";
import CartModel from "@/models/CartModel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { calculateTotalAmount } from "@/store/features/restaurentSlice";
import useCustomTheme from "@/theme/useCustomTheme";

type PropCartContent = {
  cart?:CartModel[];
  placeOrder?: () => void;
};

export default function CartContent({ cart=[], placeOrder }: PropCartContent) {
  const themeColor = useCustomTheme();
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.restaurentReducer.order);
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [order]);
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
        {cart.map((cartItem, idx) => {
          return <CartCard key={idx} cartItem={cartItem} />;
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
            <Text className="text-xl">₹ {order?.subTotal}</Text>
          </View>
          <View className="my-2 flex-row justify-between items-center mx-5">
            <Text className="text-xl">Delivery Fee</Text>
            <Text className="text-xl">₹ {order?.deliveryFee}</Text>
          </View>
          <View className="my-2 flex-row justify-between items-center mx-5">
            <Text className="text-xl font-bold">Total Amount</Text>
            <Text className="text-xl font-bold">₹ {order?.totalAmount}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={placeOrder}
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
