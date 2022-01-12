import React, { useContext, Fragment, useEffect } from "react";
import { DataContext } from "./context/Context";

import './App.css';
import  {NavBar}  from "./components/navBar/navBar";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer/footer";

function App() {
  const {  } = useContext(DataContext);

  

  return (
    <>
        <NavBar/>
        <Home/>
        <Footer/>
    </>
  );
}

export default App;
