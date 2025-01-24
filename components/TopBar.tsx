import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomModal from "./CustomModal";
import Preference from "./Preference";
import { BlurView } from "expo-blur";
import useCustomTheme from "@/theme/useCustomTheme";


export default function TopBar() {
  const themeColor = useCustomTheme();
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);
  return (
    <>
      <View className="mx-5">
        <View className="flex-row items-center">
          <View
            style={{ borderColor: themeColor.text }}
            className={"flex-grow border-2 rounded-lg flex-row items-center " + (Platform.OS === 'ios' ? 'p-2' : 'px-2')}
          >
            <FontAwesome name="search" size={30} color={themeColor.text} />
            <TextInput
              className="ml-2 text-2xl"
              placeholder="Search Your Food!!"
              placeholderTextColor={themeColor.text}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              setIsSettingsVisible(true);
            }}
            style={{ backgroundColor: themeColor.text }}
            className="rounded-lg p-1 ml-2"
          >
            <Ionicons name="options" size={40} color="white" />
          </TouchableOpacity>
        </View>

        <View className="my-2 flex-row justify-center items-center">
          <Feather name="map-pin" size={24} color={themeColor.text} />
          <Text className="ml-1 text-lg text-center">Nakodar, Punjab | PB</Text>
        </View>
      </View>
      {isSettingsVisible && (
        <BlurView intensity={50} tint="dark" style={styles.blurBackground} />
      )}
      <CustomModal title="Settings" isVisible={isSettingsVisible} onClose={() => { setIsSettingsVisible(false) }}>
        <Preference />
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  blurBackground: {
    ...StyleSheet.absoluteFillObject, // Fills the entire screen
    zIndex: 1, // Places it beneath the modal content
  },
});
