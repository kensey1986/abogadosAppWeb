import React, { useContext, Fragment, } from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { DataContext } from "./context/Context";
import { Typography } from "@mui/material";

import './App.css';
import { NavBar1 } from "./components/navBar/navBar-1";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Lawyers } from "./pages/lawyers/lawyers";
import { LawyersDetails } from "./pages/lawyers/LawyerDetails";
import { Default } from "./pages/default/default";
import { Services } from "./pages/services/services";
import { Footer } from "./components/footer/footer";
import { ThemeProvider } from '@mui/material/styles';
import { themeConfig } from './themes/theme';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Contac } from "./pages/contac/contac";

function App() {
  // const {  } = useContext(DataContext);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (

    <BrowserRouter>
      <ThemeProvider theme={themeConfig}>
        <Grid container spacing={1}>
          <Grid  item={true} xs={12} >
              <NavBar1 />
          </Grid>
          <Grid item={true} xs={12}>
              <Routes >
                <Route exact path='/' element={<Home />} />
                <Route path='/services' element={<Services />} />
                <Route path='/lawyers' element={<Lawyers />} />
                <Route path='/lawyers/:lawyersId' element={<LawyersDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/contac' element={<Contac />} />
                <Route element={<Default />} />
              </Routes>
          </Grid>
          <Grid  item={true} xs={12}>
              <Footer />
          </Grid>

        </Grid>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
