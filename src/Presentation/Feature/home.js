import Header from "./Header";
import Style from "./Home.module.css";


import Model from "./Modal";
import AddItem from "./AddItem";
import { useState } from "react";
import HomeBody from "./HomeBody";
import ItemContextProvider from "../../Store/ContextProvider";
import { useContext } from "react";
import ItemContext from "../../Store/ItemContext";


const HomePage = () => {

    const [openOverlay, setOverlay] = useState(false);

    const onSubmit = () => {
        console.log("Submit");
        setOverlay(!openOverlay);
    }
    const onCancel= ()=>{
        console.log("Cancel");
    }
    return (
        <ItemContextProvider>
            { openOverlay && <AddItem onSubmit={onSubmit}></AddItem>}
            <Header onSubmit={onSubmit} onCancel={onCancel}></Header>
            <HomeBody></HomeBody>
        </ItemContextProvider>
    );
}

export default HomePage;
