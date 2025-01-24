import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import TopBar from "@/components/TopBar";

import Features from "@/components/Features";
import { getAllRestaurents } from "@/api/API";
import RestaurentModal from "@/models/RestaurentModel";
import { AxiosResponse } from "axios";
import ResponseModel from "@/models/ResponseModel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setRestaurents } from "@/store/features/restaurentSlice";

export default function Index() {
  const dispatch = useDispatch();
  const restaurents = useSelector((state: RootState) => state.restaurentReducer.restaurents);
  useEffect(() => {
    getAllRestaurents().then((res: AxiosResponse<ResponseModel>) => {
      if (res.data.success) {
        dispatch(setRestaurents({ restaurents: res.data.result }));
      } else {
        console.log(res.data.msg);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <TopBar />

      {restaurents && <Features restaurents={restaurents as RestaurentModal[]} />}
    </SafeAreaView>
  );
}
