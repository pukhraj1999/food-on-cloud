import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import TopBar from "@/components/TopBar";

import Categories from "@/components/Categories";
import Features from "@/components/Features";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <TopBar />

      <Features />
    </SafeAreaView>
  );
}
