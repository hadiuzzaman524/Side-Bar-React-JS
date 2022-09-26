import React from "react";
import ItemContext from "./ItemContext";
import { useReducer } from "react";

const defaultState = {
    items: [],
    openDialog: false,
};
const ItemReducer = (prevState, currState) => {

    if (currState.type === 'Add') {
        const newItem = prevState.items.concat(currState.item);
        console.log("Add");
        return {
            items: newItem,
            openDialog: false,
        }
    }

    if (currState.type === 'Remove') {
        console.log("Remove");
        return {
            items: currState.items,
            openDialog: false,
        }
    }
    return defaultState;
}

const ItemContextProvider = (props) => {

    const [state, action] = useReducer(
        ItemReducer,
        defaultState,
    )

    const addItem = (item) => {
        action({ type: 'Add', item: item });

    };
    const removeItem = (item) => {
        action({ type: "Remove", item: item });
    };
    return (
        <ItemContext.Provider value={
            {
                items: state.items,
                addItem: addItem,
                removeItem: removeItem,
            }
        }>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider; 
