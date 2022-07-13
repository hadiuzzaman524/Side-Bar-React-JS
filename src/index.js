import React from "react";
import ReactDOM from "react-dom";
/*
function tick(){

  const element= (
   <div>
    <h1>Time: {new Date().toLocaleTimeString() }</h1>
   </div>
  );
  ReactDOM.render(element, document.getElementById('root')); 

}

setInterval(tick, 1000);

*/
// React component

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="jaman" />
      <Welcome name="habib" />
      <Welcome name="Rakib" />
    </div>
  );
}
//ReactDOM.render(<App/>, document.getElementById('root'));

class A extends React.Component{
  render(){
    return <h1>Hello world {this.props.age}</h1>;
  }
}

const root = ReactDOM.render(<A age= '32' />, document.getElementById("root"));
