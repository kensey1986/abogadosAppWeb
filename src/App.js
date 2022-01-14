import React, { useContext, Fragment, } from "react";
import { BrowserRouter, Routes , Route, Redirect } from "react-router-dom";
import { DataContext } from "./context/Context";

import './App.css';
import { BarNav } from "./components/navBar/navBar";
import { Home } from "./pages/home/home";
import { Default } from "./pages/default/default";
import { Services } from "./pages/services/services";
import { Footer } from "./components/footer/footer";

function App() {
  // const {  } = useContext(DataContext);



  return (
    <BrowserRouter>
     <>
        <BarNav />
        <Routes >
             <Route exact path='/' element={<Home/>} />
             <Route path='/services' element={<Services/>} />
             <Route  element={<Default/>} />
        </Routes>
        <Footer />
     </>
    </BrowserRouter>
  );
}

export default App;
