import Header from "./Header";
import Style from "./Home.module.css";

import CardItem from "./CardItem";
import Model from "./Modal";
import AddItem from "./AddItem";
import { useState } from "react";

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

const HomePage = () => {

    const [openOverlay, setOverlay] = useState(false);
    const onSubmit = () => {
        console.log("Submit");
        setOverlay(!openOverlay);
    }
    return (
        <>
            {openOverlay && <AddItem onSubmit={onSubmit}></AddItem>}
            <Header onSubmit={onSubmit}></Header>

            <div className={Style.home}>
                <div className={Style.main_container}>
                    {dummyList.map((item) => <CardItem title={item.title}></CardItem>)}
                </div>
            </div>

        </>
    );
}

export default HomePage;
