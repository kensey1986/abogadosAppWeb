import React, { useContext, Fragment,  } from "react";
import { DataContext } from "./context/Context";

import './App.css';
import  {BarNav}  from "./components/navBar/navBar";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer/footer";

function App() {
  // const {  } = useContext(DataContext);

  

  return (
    <>
        <BarNav/>
        <Home/>
        <Footer/>
    </>
  );
}

export default App;
