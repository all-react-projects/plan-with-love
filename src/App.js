import { useState } from "react";
import Tours from "./Tours";
import data from './data';

function App() {
  const[tours,setTours]=useState(data); //tour variable get data, now tour is object

  return (
    <div className="App">
      <h1>Plan With Love</h1>
      <Tours tours={tours}/>
    </div>
  );
}

export default App;
