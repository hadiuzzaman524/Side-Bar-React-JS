import React, { useReducer } from "react";

const ItemContext = React.createContext(
    {
        items: [],
        addItem: (item) => { }
    }
);
const dummyList = [
    {
        id: 1,
        title: "Need to walk 30 mins",
    },
    {
        id: 2,
        title: "Lorem Ipsum is simply dummy text",
    },
    {
        id: 3,
        title: "Need to walk 30 mins",
    },
    {
        id: 4,
        title: "Lorem Ipsum is simply dummy text",
    },
    {
        id: 5,
        title: "Need to walk 30 mins",
    },
    {
        id: 6,
        title: "Lorem Ipsum is simply dummy text",
    },
    {
        id: 7,
        title: "Need to walk 30 mins",
    },
    {
        id: 8,
        title: "Lorem Ipsum is simply dummy text",
    },

];
const defaultState={
    items: dummyList,
}; 

const itemReducer = (prevState, currState)=>{

    if(currState.type=== 'Add'){

        const updateItem= prevState.items.concat(currState.item); 

        return {
            items: updateItem,
        }
    }

    if(currState.type=== 'Remove'){
        console.log("Remove"); 
    }
    return defaultState; 
};


export const ItemContextProvider = (props) => {

   const [itemState, itemAction]= useReducer(
    itemReducer, 
    defaultState,
   );

    const addItem = (item) => {
        itemAction({type: "Add", item: item}); 
        console.log(item.title);

    }

    return (
        <ItemContext.Provider value={{
            items: itemAction.items, 
            addItem: addItem,
        }}>
            {props.children}
        </ItemContext.Provider>
    );

}

export default ItemContext;