import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeaureSection from "./FeaureSection";
import RestaurentModal from "@/models/RestaurentModel";

type FeatureProp = {
  restaurents: RestaurentModal[],
};

export default function Features({ restaurents }: FeatureProp) {
  return (
    <ScrollView className="pl-5" showsVerticalScrollIndicator={false}>
      {restaurents.map((feature, idx) => {
        return <FeaureSection key={idx} restaurent_id={feature._id} title={feature.title} description={feature.description} menu={feature.menu} />;
      })}
    </ScrollView>
  );
}
