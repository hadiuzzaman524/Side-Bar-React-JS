import React from "react";

const ItemContext = React.createContext(
    {
        items: [], 
        name: ""
    }
);

export default ItemContext;