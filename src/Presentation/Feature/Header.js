import Style from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={Style.header}>
            <button onClick={props.onSubmit}>+ add item</button>
        </div>
    );
}

export default Header; 