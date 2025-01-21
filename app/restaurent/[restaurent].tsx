import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import { themeColor } from "@/theme";
import Banner from "@/components/Banner";
import LocationDetail from "@/components/LocationDetail";
import RestaurentContent from "@/components/RestaurentContent";
import Menu from "@/components/Menu";
import Cart from "@/components/Cart";
import Categories from "@/components/Categories";
import { setSelectedRestaurent } from "@/store/features/restaurentSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASE_URL } from "@/api/API";

type LocalParams = {
  restaurent: string;
};

export default function Restaurent() {
  const { restaurent }: LocalParams = useLocalSearchParams();
  const dispatch = useDispatch();
  const selectedRestaurent = useSelector((state: RootState) => state.restaurentReducer.selectedRestaurent);

  useEffect(() => {
    dispatch(setSelectedRestaurent({ id: restaurent }));
  }, [restaurent]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="overflow-visible"
        showsVerticalScrollIndicator={false}
      >
        <Banner pic={BASE_URL+"/"+selectedRestaurent?.pictures[0]}/>
        <View
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          className="bg-white -mt-12  pt-6"
        >
          <View className="px-5">
            <RestaurentContent title={selectedRestaurent?.title} description={selectedRestaurent?.description}/>
            <LocationDetail />
            <Categories />
            <Menu  menus={selectedRestaurent?.menu}/>
          </View>
        </View>
      </ScrollView>
      <Cart />
    </View>
  );
}
