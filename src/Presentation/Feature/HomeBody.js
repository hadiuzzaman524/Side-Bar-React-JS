import Style from "./Home.module.css";
import CardItem from "./CardItem";
import { useContext } from "react";
import ItemContext from "../../Store/ItemContext";

const HomeBody = () => {

    const ctx = useContext(ItemContext);
    console.log(ctx.items);
    console.log(ctx.name);

    return (
        <div className={Style.home}>
            <div className={Style.main_container}>
                {ctx.items.map((item)=>  <CardItem title={item.title}></CardItem>)}
            </div>
        </div>
    );
}
export default HomeBody;
/*
  {ctx.items.map((item) => <CardItem title={item.title}></CardItem>)}
  */