import React from "react";

class Button extends React.Component{

    render(){
        const {click}= this.props;
        return (
            <button type="button" onClick={click}> Hello Hadi</button>
        );
    }
}

export default Button;