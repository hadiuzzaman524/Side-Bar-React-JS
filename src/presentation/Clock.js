import React from "react";

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

  componentDidMount() {
    setInterval(()=>this.ticker(), 1000);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>This is hadi</h1>
        <h1> {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
