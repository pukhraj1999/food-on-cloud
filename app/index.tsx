import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import TopBar from "@/components/TopBar";

import { themeColor } from "@/theme";
import Categories from "@/components/Categories";
import { categories } from "@/constants/FoodCategories";
import Features from "@/components/Features";

function index() {
  

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/** Top Bar */}
      <TopBar />

      {/** Main */}
      <Categories />

      <Features />

    </SafeAreaView>
  );
}

export default index;
