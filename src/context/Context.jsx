import React, { useState, useEffect } from "react";

// import axios from "axios";
// import CONFIG from "../config/index";
// import { v4 as uuidv4 } from "uuid";
// import { autenticar, listado, crear, actualizar } from "../helpers/Query";
export const DataContext = React.createContext();


const DataProvider = (props) => {

  const [data, setData] = useState(
    [
      {
          "number": "1",
          "author": "Von R. Glitschka",
          "quote": "The client may be king, but he's not the art director."
      },
      {
          "number": "2",
          "author": "Frank Capra",
          "quote": "A hunch is creativity trying to tell you something."
      },
      {
          "number": "3",
          "author": "Steven Heller",
          "quote": "As a profession, graphic designers have been shamefully remiss or ineffective about plying their craft for social or political betterment."
      }]
  );
  useEffect(() => {
      console.log('ejecutando')
        cargarServicios()
    },[]);

  const cargarServicios = () =>{
    console.log(data);
  }

  /////
  return (
    <DataContext.Provider
      value={{
       
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
