import React, { useState, useEffect } from "react";

// import axios from "axios";
// import CONFIG from "../config/index";
// import { v4 as uuidv4 } from "uuid";
// import { autenticar, listado, crear, actualizar } from "../helpers/Query";
export const DataContext = React.createContext();

const DataProvider = (props) => {

  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
     prueba()
    } catch (error) {
      console.error(error);
    }
  }, []);

 const prueba = () => {
   console.log('context conectado')
   
 }
  /////
  return (
    <DataContext.Provider
      value={{
       prueba
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
