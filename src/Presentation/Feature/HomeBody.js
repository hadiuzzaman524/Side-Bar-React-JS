import Style from "./Home.module.css";
import CardItem from "./CardItem";
import { useContext } from "react";
import ItemContext from "../../Store/ItemContext";

const HomeBody = () => {
    const ctx = useContext(ItemContext);

    return (
        <div className={Style.home}>
            <div className={Style.main_container}>
                {ctx.items.length< 1 ? <h3>Empty ToDo</h3>:ctx.items.map((item)=>  <CardItem title={item.title} key={Date()} id={item.id}></CardItem>)}
            </div>
        </div>
    );
}
export default HomeBody;
/*
  {ctx.items.map((item) => <CardItem title={item.title}></CardItem>)}
  */