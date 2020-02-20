import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <TouchableCmp onPress={props.onViewDetail} useForeground>
        <View>
          <Image style={styles.image} source={{ uri: props.item.imageUrl }} />
          <View style={styles.details}>
            <Text style={styles.title}> {props.item.title}</Text>
            <Text style={styles.price}> {props.item.price}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              color={Colors.primary}
              title="View Details"
              onPress={props.onViewDetail}
            />
            <Button
              color={Colors.primary}
              title="To Cart"
              onPress={props.onAddToCart}
            />
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888"
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 10
  }
});

export default ProductItem;
