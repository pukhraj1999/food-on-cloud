import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeaureSection from "./FeaureSection";

export default function Features() {
  return (
    <ScrollView className="ml-5 my-2" showsVerticalScrollIndicator={false}>
      {[1, 2, 3].map((feature, idx) => {
        return <FeaureSection key={idx} />;
      })}
    </ScrollView>
  );
}
