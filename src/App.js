import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='App-title'>Aplikacja licznika w ReactJS</h1>
      </header>
      {/* <Counter className='counter' name='Krokomierz ' value='15'></Counter> */}
      <Counter className='counter' name='Licznik: ' value='15'>
        <div id='counter'>
          {/* <ButtonsPanel updateCounter='fn()' stepValue='5'>_</ButtonsPanel> */}
          {/* <Step stepValue='5' setStep='fn()'></Step>  */}
        </div>
      </Counter>
    </div>
  );
}

export default App;
