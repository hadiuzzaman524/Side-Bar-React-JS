import Style from "./Home.module.css";
import { useContext } from "react";
import CardItem from "./CardItem";
import ItemContext, { ItemContextProvider } from "../Store/ItemContext";


const HomeBody = ()=>{
    const ctx = useContext(ItemContext);
    return (
        <div className={Style.home}>
        <div className={Style.main_container}>
        {ctx.items?.map((item) => <CardItem title={item.title}></CardItem>)}
        </div>
    </div>
    );
}
export default HomeBody; 
/*
  {ctx.items.map((item) => <CardItem title={item.title}></CardItem>)}
  */