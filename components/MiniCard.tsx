import { View, Text, Image, ImageProps, TouchableOpacity } from "react-native";
import React from "react";
import { themeColor } from "@/theme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/store/features/restaurentSlice";
import MenuModel from "@/models/MenuModel";

type MiniCardProp = {
  id?: string;
  title?: string;
  ingredients?: string;
  category?: string;
  currecy?: string;
  price?: number;
  pic?: string;
  menu?: MenuModel
};

export default function MiniCard({ menu, id, title, ingredients, category, currecy, price, pic }: MiniCardProp) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.restaurentReducer.cart);
  const cartExist = cart?.find((cartItem) => cartItem.menuItem!._id === id);
  return (
    <View className="my-2">
      <View
        style={{
          boxShadow: themeColor.shadowB,
        }}
        className="flex-row items-center rounded-3xl"
      >
        <View>
          <Image
            className="rounded-3xl"
            style={{ width: 110, height: 150 }}
            source={{ uri: pic }}
          />
        </View>
        <View className="px-2 flex-1 my-2">
          <View className="flex-grow">
            <Text className="text-2xl font-bold">{title}</Text>
            <Text className="font-semibold text-sm text-gray-600">
              {ingredients}
            </Text>
          </View>
          <View>
            <Text className="text-2xl font-bold">{currecy} {price}</Text>
          </View>
        </View>
        {cartExist && <View className="flex-row items-center">
          <TouchableOpacity
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mx-2 h-8 w-8 rounded-full flex-row justify-center items-center"
            onPress={() => {
              dispatch(removeFromCart(menu as MenuModel));
            }}
          >
            <Ionicons name="remove-sharp" size={20} color="white" />
          </TouchableOpacity>
          <Text className="mx-2 font-bold text-xl">{cartExist.quantity}</Text>
          <TouchableOpacity
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mx-2 h-8 w-8 rounded-full flex-row justify-center items-center"
            onPress={() => {
              dispatch(addToCart(menu as MenuModel));
            }}
          >
            <FontAwesome6 name="add" size={20} color="white" />
          </TouchableOpacity>
        </View>}
        {!cartExist && <View className="flex-row items-center">
          <TouchableOpacity
            style={{ backgroundColor: themeColor.bgColor("1") }}
            className="mr-1 p-2 rounded-md flex-row justify-center items-center"
            onPress={() => {
              dispatch(addToCart(menu as MenuModel));
            }}
          >
            <Text className="text-white font-bold text-xl">Add to Cart</Text>
          </TouchableOpacity>
        </View>}
      </View>
    </View>
  );
}
