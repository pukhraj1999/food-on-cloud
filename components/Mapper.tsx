import React from "react";
import MapView, { Marker } from "react-native-maps";
import useCustomTheme from "@/theme/useCustomTheme";

export default function Mapper() {
  const themeColor = useCustomTheme();
  return (
    <MapView
      mapType="standard"
      initialRegion={{
        latitude: 31.12708,
        longitude: 435.473288,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        latitude: 31.12708,
        longitude: 435.473288,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      className="flex-1"
      style={{ width: "100%", height: "78%" }}
    >
      <Marker
        coordinate={{
          latitude: 31.12708,
          longitude: 435.473288,
        }}
        title="Burgr Shrgr"
        description="Hot n Spicy"
        pinColor={themeColor.bgColor("1")}
      />
    </MapView>
  );
}
