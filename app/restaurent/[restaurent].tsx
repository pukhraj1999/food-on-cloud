import { useLocalSearchParams} from "expo-router";
import React from "react";
import {SafeAreaView,View,Text} from "react-native";


type LocalParams={
  restaurent:string,
};

export default function Restaurent() {
  const local:LocalParams = useLocalSearchParams();

  console.log(local.restaurent);
  
  return (
    <SafeAreaView className="flex-1 ">
     <View>
        <Text className="text-2xl">Welcome to Restaurent Screen</Text>
     </View>
    </SafeAreaView>
  );
}

