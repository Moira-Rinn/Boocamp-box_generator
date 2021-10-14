import React, { useState } from 'react';
import CreatBox from './components/CreateBox'
import './App.css';

function App() {

  const [yourBox, setYourBox] = useState([]);

  const Box = (newBox) => {
    setYourBox(arr => [...arr, newBox]);
  }

  return (
    <div className="App">
      <h1>Build-A-Box</h1>
      <CreatBox addBox={Box} />
      {
        yourBox.map((item, index) => { { console.log(item) } return <div key={index} style={item}></div> })

      }
    </div>
  );
}

export default App;
