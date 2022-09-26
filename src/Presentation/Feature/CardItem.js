import Style from "./Home.module.css"; 
import { FaBeer } from 'react-icons/fa';
import { useContext } from "react";
import ItemContext from "../../Store/ItemContext";

const CardItem = (props)=> {
    const ctx= useContext(ItemContext); 
    const removeItem =()=>{
        ctx.removeItem({title: props.title, id: props.id});
    }

    return (
        <div className={Style.item}>
        <div className={Style.item_leading}>
            <div className={Style.circle}>
            <FaBeer color="white" size={25}/>
            </div>
        </div>
        <div className={Style.item_title}> <h2>{props.title}</h2>
        </div>
        <div className={Style.item_trailing}>
            <button onClick={removeItem}>Remove</button>
        </div>
    </div>
    ); 
}

export default CardItem; 