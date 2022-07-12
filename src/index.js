
import ReactDOM from 'react-dom'

function tick(){

  const element= (
   <div>
    <h1>Time: {new Date().toLocaleTimeString() }</h1>
   </div>
  );
  ReactDOM.render(element, document.getElementById('root')); 

}

setInterval(tick, 1000);