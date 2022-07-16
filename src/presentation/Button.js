import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { click: currentClick } = this.props;
    const { click: nextClick } = nextProps;

    if (currentClick === nextClick) {
      return false;
    }
    return true;
  }

  render() {
    const { click, name } = this.props;
    console.log("Button Rendered");
    return (
      <button type="button" onClick={click}>
        {name}
      </button>
    );
  }
}

export default Button;
