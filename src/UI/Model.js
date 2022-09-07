import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeCart}></div>
}

const ModalOverlay= (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalElementId= document.getElementById('overlays');
const Model = (props) => {
    return (<Fragment>
        {ReactDOM.createPortal(<BackDrop closeCart={props.closeCart}/>, portalElementId)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElementId)}
    </Fragment>);
}

export default Model;