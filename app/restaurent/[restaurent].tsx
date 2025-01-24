import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import Banner from "@/components/Banner";
import LocationDetail from "@/components/LocationDetail";
import RestaurentContent from "@/components/RestaurentContent";
import Menu from "@/components/Menu";
import Cart from "@/components/Cart";
import Categories from "@/components/Categories";
import { setCategories, setSelectedRestaurent } from "@/store/features/restaurentSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { BASE_URL, getAllCategories } from "@/api/API";

import { AxiosResponse } from "axios";
import ResponseModel from "@/models/ResponseModel";
import useCustomTheme from "@/theme/useCustomTheme";

type LocalParams = {
  restaurent: string;
};

export default function Restaurent() {
  const { restaurent }: LocalParams = useLocalSearchParams();
  const themeColor = useCustomTheme();
  const dispatch = useDispatch();
  const selectedRestaurent = useSelector((state: RootState) => state.restaurentReducer.selectedRestaurent);
  // categories
  const categories = useSelector((state: RootState) => state.restaurentReducer.categories);
  useEffect(() => {
    dispatch(setSelectedRestaurent({ id: restaurent }));
    // categories
    getAllCategories().then((res: AxiosResponse<ResponseModel>) => {
      if (res.data.success) {
        dispatch(setCategories({ categories: res.data.result }));
      } else {
        console.log(res.data.msg);
      }
    }).catch((err) => { console.log(err); });
  }, [restaurent]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="overflow-visible"
        showsVerticalScrollIndicator={false}
      >
        {selectedRestaurent?.pictures && <Banner pic={BASE_URL + "/" + selectedRestaurent?.pictures[0]} />}

        <View
          style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          className="bg-white -mt-12  pt-6"
        >
          <View className="px-5">
            {selectedRestaurent && <RestaurentContent title={selectedRestaurent?.title} description={selectedRestaurent?.description} />}
            <LocationDetail />
            {categories && <Categories categories={categories} />}
            {selectedRestaurent?.menu && <Menu menus={selectedRestaurent?.menu} />}
          </View>
        </View>
      </ScrollView>
      <Cart />
    </View>
  );
}
