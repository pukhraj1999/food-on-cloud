import { View, Text } from "react-native";
import React from "react";
import MiniCard from "./MiniCard";
import MenuModel from "@/models/MenuModel";
import { BASE_URL } from "@/api/API";

type MenuProp = {
  menus?: MenuModel[]
};

export default function Menu({ menus = [] }: MenuProp) {
  return (
    <View className="my-2">
      <Text className="font-bold text-3xl">Menu</Text>
      {menus.map((menu, idx) => {
        return <MiniCard key={idx} title={menu.name} ingredients={menu.ingredients} currecy={menu.currency} category={menu.category_id.name}  pic={BASE_URL + "/" + menu.pictures[0]} price={menu.price} />;
      })}
    </View>
  );
}
