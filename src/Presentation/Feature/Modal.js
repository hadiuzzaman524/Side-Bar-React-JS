import ReactDOM from "react-dom" 
import { Fragment } from "react";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return (<div className={classes.backdrop}></div>);
};

const ModalOverlay= (props) => {
return (<div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
</div>);
};
const portalElementId= document.getElementById('overlays');

const Model = (props) => {
    return (<Fragment>
        {ReactDOM.createPortal(<BackDrop/>, portalElementId)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElementId)}
    </Fragment>);
};

export default Model;
