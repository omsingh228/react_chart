import React,{useState} from 'react';
import './App.css';
// import BarChart from './Charts/BarChart'
// import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';

function App() {
  const [show, setShow]=useState(true)
  return (
    <div className="App" >
      <img src="https://i.ibb.co/Yy6Xqtw/1.jpg" alt="CompanyLogo"/>
      {
      show?<LineChart className="chart"/>:null
      }
      <button onClick = {()=>setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
