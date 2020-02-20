import { Platform, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductOverviewScreen from "../screens/shop/ProductsOverview";
import ProductDetailScreen from "../screens/shop/ProductDetail";
import CartScreen from "../screens/shop/Cart";
import Colors from "../constants/Colors";

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : ""
      },
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerBackTitle: {
        fontFamily: "open-sans"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
    }
  }
);

export default createAppContainer(ProductNavigator);
