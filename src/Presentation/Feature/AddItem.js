
import Model from "./Modal";
import Style from "./AddItem.module.css";
import { useContext } from "react";
import { useState } from "react";
import ItemContext from "../../Store/ItemContext";

const AddItem = (props) => {

  
    const [title, setTitle] = useState("");
    const ctx= useContext(ItemContext);

    const onClick = () => {
        ctx.addItem({id: Date(), title: title});
        {props.onCancel()};
    }

    const onChange = (value) => {
        setTitle(value.target.value);
     
    }

    return (
        <Model>
            <div className={Style.add_form}>
                <h2>Add Your Favorite Item</h2>
                <label>Enter Title</label>
                <input type="text" onChange={onChange}></input>
                <div className={Style.button}>
                    <button onClick={onClick} >Add Item</button>
                    <button onClick={props.onSubmit}>Cancel</button>
                </div>

            </div>

        </Model>
    );
};
export default AddItem; 