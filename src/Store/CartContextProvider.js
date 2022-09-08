import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";
import { type } from "@testing-library/user-event/dist/type";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (prevState, newState) => {
    if(newState.type == 'ADD'){
        const updateItem= prevState.items.concat(newState.item);
        const updateAmount= prevState.totalAmount + newState.totalAmount* newState.item.price;

        console.log(updateItem.length);
        return {
            items: updateItem, 
            totalAmount: updateAmount,
          };
    }
    if(newState.type== "REMOVE"){

    }
 return defaultCartState;
};

const CartProvider = (props) => {
  //pass reducer name & initial state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemtoCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: dispatchCartAction.items,
    totalAmount: dispatchCartAction.totalAmount,
    addItem: addItemtoCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
