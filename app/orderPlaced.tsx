import React, { useEffect } from "react";
import Loader from "@/components/Loader";
import { router } from "expo-router";

export default function OrderPlaced() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/delivery");
    }, 1000);
  });
  return <Loader />;
}
