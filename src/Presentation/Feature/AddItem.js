
import Model from "./Modal";
import Style from "./AddItem.module.css";

const AddItem = (props) => {
    return (
        <Model>
            <div className={Style.add_form}>
                <h2>Add Your Favorite Item</h2>
                <label>Enter Title</label>
                <input></input>
                <div className={Style.button}>
                <button>Add Item</button>
                <button onClick={props.onSubmit}>Cancel</button>
                </div>
                
            </div>

        </Model>
    );
};
export default AddItem; 