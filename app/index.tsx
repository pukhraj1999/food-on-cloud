import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import TopBar from "@/components/TopBar";

import Categories from "@/components/Categories";
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
