import React from "react";

class Button extends React.Component {
  render() {
    const { click , name} = this.props;
    console.log("Button Rendered");
    return (
      <button type="button" onClick={click}>
        {name}
      </button>
    );
  }
}

export default Button;
