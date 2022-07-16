import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), locale: "bn-BD" };
  }

  ticker() {
    this.setState({
      date: new Date(),
    });
  }
  // componentDidMount call when previous object show in DOM then call it
  componentDidMount() {
    // save interval into timer for clear
    this.timer = setInterval(() => this.ticker(), 1000);
  }

  // componentWillUnmount call when page will be destroyed or changed
  componentWillUnmount() {
    // clear the interval time for avoid memory lacking
    clearInterval(this.timer);
  }

  click = () => {
    this.setState({
      locale: "en-US",
    });
    console.log(this.state.locale);
  };

  render() {
    console.log("Clock Rendered");
    return (
      <div>
        <h1>This is hadi</h1>
        <h1> {this.state.date.toLocaleTimeString(this.state.locale)}</h1>
        <Button click={this.click} name="Change Time"></Button>
      </div>
    );
  }
}

export default Clock;
