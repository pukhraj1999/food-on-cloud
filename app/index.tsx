import React,{useEffect} from "react";
import { SafeAreaView, StatusBar } from "react-native";
import TopBar from "@/components/TopBar";

import Features from "@/components/Features";
import { getAllRestaurents } from "@/api/API";
import RestaurentModal from "@/models/RestaurentModel";
import { Axios, AxiosResponse } from "axios";
import ResponseModel from "@/models/ResponseModel";

export default function Index() {
  const [restaurents, setRestaurents] = React.useState<RestaurentModal[]>([]);
  useEffect(() => {
    getAllRestaurents().then((res:AxiosResponse<ResponseModel>) => {
      if(res.data.success){
        setRestaurents(res.data.result);
        console.log(res.data.result);
      }else{
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

       <Features restaurents={restaurents}/> 
    </SafeAreaView>
  );
}
