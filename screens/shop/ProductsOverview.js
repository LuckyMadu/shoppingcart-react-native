import React from "react";
import { View, Text, FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ProductItem from "../../components/shop/ProductItem";
import * as cartactions from "../../store/actions/cart";
import HeaderButton from "../../components/UI/HeaderButton";

const ProductsOverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={products}
        renderItem={itemData => (
          <ProductItem
            item={itemData.item}
            onViewDetail={() => {
              props.navigation.navigate("ProductDetail", {
                productId: itemData.item.id,
                productTitle: itemData.item.title
              });
            }}
            onAddToCart={() => {
              dispatch(cartactions.addToCart(itemData.item));
            }}
          />
        )}
      />
    </View>
  );
};

ProductsOverview.navigationOptions = navData => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navData.navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    )
  };
};

export default ProductsOverview;
