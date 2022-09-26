import React from "react";
import ItemContext from "./ItemContext";

const ItemContextProvider = (props) => {
    return (
        <ItemContext.Provider value={
            {
                items: [{
                    id: 1,
                    title: "This is test example 1",
                },
                {
                    id: 1,
                    title: "This is test example 2",
                },
                {
                    id: 1,
                    title: "This is test example 3",
                }
                ], 
                name: "Md Hadiuzzaman",
            }
        }>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider; 
