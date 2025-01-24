import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { themeColor } from "@/theme";
import CustomModal from "./CustomModal";
import CartContent from "./CartContent";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { calculateTotalAmount } from "@/store/features/restaurentSlice";

export default function Cart() {
  const [isViewCartVisible, setIsViewCartVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.restaurentReducer.cart);
  const order = useSelector((state: RootState) => state.restaurentReducer.order);
  return (
    <>
      <View className="absolute bottom-10 left-0 w-full z-50">
        {cart!.length > 0 && <TouchableOpacity
          onPress={() => {
            setIsViewCartVisible(true);
            dispatch(calculateTotalAmount());
          }}
          activeOpacity={0.4}
          style={{
            boxShadow: themeColor.shadowA,
            backgroundColor: themeColor.bgColor("1"),
          }}
          className="px-5 flex-row justify-between items-center mx-5 rounded-full p-4 py-3"
        >
          <View
            className="p-2 rounded-full flex-row justify-center items-center"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <Text className="px-2 text-xl text-center text-white font-bold">
              {order?.totalQuantity}
            </Text>
          </View>
          <Text className="text-xl text-white font-bold">View Cart</Text>
          <Text className="text-xl text-white font-bold">₹ {order?.subTotal}</Text>
        </TouchableOpacity>}
      </View>
      {isViewCartVisible && (
        <BlurView intensity={50} tint="dark" style={styles.blurBackground} />
      )}
      <CustomModal
        isVisible={isViewCartVisible}
        onClose={() => setIsViewCartVisible(false)}
        title="Your Cart"
      >
        <CartContent
          cart={cart}
          placeOrder={() => {
            router.replace("/orderPlaced");
          }}
        />
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
