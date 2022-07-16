import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  ticker() {
    this.setState({
      date: new Date(),
    });
  }
// componentDidMount call when previous object show in DOM then call it
  componentDidMount() {
    // save interval into timer for clear 
   this.timer= setInterval(()=>this.ticker(), 1000);
  }

  // componentWillUnmount call when page will be destroyed or changed 
  componentWillUnmount() {
    // clear the interval time for avoid memory lacking
    clearInterval(this.timer);
  }

  click = ()=> {
    console.log('click');
  }
  render() {
    return (
      <div>
        <h1>This is hadi</h1>
        <h1> {this.state.date.toLocaleTimeString()}</h1>
        <Button click={this.click}></Button>
      </div>
    );
  }
}

export default Clock;
