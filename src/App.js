import React, { useContext, Fragment, useEffect } from "react";
import { DataContext } from "./context/Context";

import logo from './logo.svg';
import './App.css';

function App() {
  const { prueba } = useContext(DataContext);


  return (
    <div className="App">
    hola
     
    </div>
  );
}

export default App;
