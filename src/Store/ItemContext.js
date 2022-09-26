import React from "react";

const ItemContext = React.createContext(
    {
        items: [], 
        addItem: (item)=>{},
        removeItem: (id)=>{},
        openDialog: false,
    }
);

export default ItemContext;