import React, { useContext, Fragment, } from "react";
import { BrowserRouter, Routes , Route, Redirect } from "react-router-dom";
import { DataContext } from "./context/Context";

import './App.css';
import { BarNav } from "./components/navBar/navBar";
import { NavBar1 } from "./components/navBar/navBar-1";
import { Home } from "./pages/home/home";
import { Default } from "./pages/default/default";
import { Services } from "./pages/services/services";
import { Footer } from "./components/footer/footer";
import { ThemeProvider} from '@mui/material/styles';
import {themeConfig} from './themes/theme';

import { Lists } from './components/list/list';

function App() {
  // const {  } = useContext(DataContext);



  return (

           <ThemeProvider theme={themeConfig}>
              <NavBar1/>
            <Lists/>

           </ThemeProvider>

  );
}

export default App;
