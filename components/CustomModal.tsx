import {
  View,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
  DimensionValue,
} from "react-native";
import React, { PropsWithChildren } from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { themeColor } from "@/theme";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  height?: DimensionValue;
  isVisible: boolean;
  closeButtonVissible?: boolean;
  onClose: () => void;
}>;

export default function CustomModal({
  isVisible,
  title,
  description,
  closeButtonVissible = true,
  height = "80%",
  children,
  onClose,
}: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View
        className="bg-white"
        style={[{ height: height }, styles.modalContent]}
      >
        <View className=" m-5 flex-row items-center">
          <View className="flex-grow">
            <Text className="text-center text-3xl font-bold">{title}</Text>
            {description && (
              <Text className="text-gray-600 text-center text-md font-bold">
                {description}
              </Text>
            )}
          </View>
          {closeButtonVissible && (
            <TouchableOpacity
              className="h-10 w-10 flex-row justify-center items-center rounded-full"
              style={{ backgroundColor: themeColor.bgColor("1") }}
              onPress={onClose}
            >
              <MaterialIcons
                className="text-center font-bold"
                name="close"
                color="#fff"
                size={26}
              />
            </TouchableOpacity>
          )}
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
  },
});
