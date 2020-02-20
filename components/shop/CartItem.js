import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>QTY</Text>
        <Text style={styles.title}>TITLE</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.amount}>AMOUNT</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.removeButton}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {},
  itemData: {},
  quantity: {},
  title: {},
  amount: {},
  removeButton: {
    marginLeft: 20
  }
});

export default CartItem;
