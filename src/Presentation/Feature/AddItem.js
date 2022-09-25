
import Model from "./Modal";
import Style from "./AddItem.module.css";
import ItemContext from "../Store/ItemContext";
import { useContext } from "react";
import { useState } from "react";

const AddItem = (props) => {
    const ctx = useContext(ItemContext);
    const [title, setTitle] = useState("");

    const onClick = () => {
        ctx.addItem({id: "c1", title: title});
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
                    <button onClick={onClick}>Add Item</button>
                    <button onClick={props.onSubmit}>Cancel</button>
                </div>

            </div>

        </Model>
    );
};
export default AddItem; 