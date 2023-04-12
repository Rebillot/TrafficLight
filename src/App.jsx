
import './App.css';
import { useState } from 'react';


function Semaforo() {
const [color, setColor] = useState('red');


  return (
  <div>
    <div className='container'>
  
        <div className={"row" + (color === 'danger'? " glow" : "")}  id='danger' onClick={() => setColor('danger')}></div>

        <div className={"row" + (color === 'warning' ? " glow" : "")}  id='warning' onClick={() => setColor('warning')}></div>

        <div className={"row" + (color === 'success' ? " glow" : "")}  id='success' onClick={() => setColor('success')}></div>

    </div>
  </div>

  );
}

export default Semaforo;

