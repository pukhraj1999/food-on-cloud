import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { PropsWithChildren } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { themeColor } from "@/theme";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function CustomModal({ isVisible, children, onClose }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="bg-white" style={styles.modalContent}>
        <View className="flex-row justify-end items-end">
          <TouchableOpacity
            className="h-10 w-10 m-5 flex-row justify-center items-center rounded-full"
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
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "80%",
    width: "100%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: "absolute",
    bottom: 0,
  },
});
