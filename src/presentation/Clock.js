import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>This is hadi</h1>
        <h1> {new Date().toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
