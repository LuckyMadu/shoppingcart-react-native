import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cartItem";

const initialState = {
  items: {},
  totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updateOrNewCartItem;

      if (state.items[addedProduct.id]) {
        //already have the product
        updateOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
      } else {
        updateOrNewCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateOrNewCartItem },
        totalAmount: state.totalAmount + productPrice
      };
  }

  return state;
};

export default cartReducer;
