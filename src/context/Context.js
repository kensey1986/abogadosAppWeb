import React, { useState, useEffect } from "react";
import lawyer1 from '../assets/lawyers/lawyer1.png';
import lawyer2 from '../assets/lawyers/lawyer2.png';
import lawyer6 from '../assets/lawyers/lawyer6.png';
import lawyer7 from '../assets/lawyers/lawyer7.png';
import lawyer8 from '../assets/lawyers/lawyer8.png';

// import axios from "axios";
// import CONFIG from "../config/index";
// import { v4 as uuidv4 } from "uuid";
// import { autenticar, listado, crear, actualizar } from "../helpers/Query";
export const DataContext = React.createContext();


const DataProvider = (props) => {

  const [data, setData] = useState(
    [
      {
        "initial": "J",
        "name": "DR. JOSE RENE GARCIA COLMENARES",
        "img": lawyer1,
        "description": "Abogado Egresado de la Universidad Libre de Colombia Seccional Cúcuta en el año 1994. Con Amplia experiencia como Abogado Litigante en diferentes áreas del Derecho, funcionario publico en varias oportunidades, el ultimo cargo como Director de la Unidad de Restitución de Tierras en Norte de Santander. Ha tramitado con Éxito diferentes procesos especialmente en el tema Administrativo contra el Municipio y la Nación. El ejercicio de su profesión y cargos desempeñados le han generado amplio reconocimiento a nivel regional por Particulares, Instituciones del orden Gubernamental y Organismos Internacionales. Es reconocido por sus conocimientos en los Temas de Protección, Formalización y Restitución de Tierras, Protección, conservación de los Recursos Naturales y Derecho Agrario. Con Conocimientos geográficos del territorio de Norte de Santander y Arauca al igual que en el tema del contexto social sobre el Desarrollo de Conflicto en sus diferentes épocas. Entres sus diversos estudios se resalta la culminación de su Maestría en Derecho Procesal y Contemporáneo el año inmediatamente anterior.",
        "num": "3114775792",
        "whts": "3114775792"
      },
      {
        "initial": "D",
        "name": "DR. DANIEL ALEJANDRO PEREZ SUAREZ",
        "img": lawyer2 ,
        "description": "Profesional del Derecho Egresado de la Universidad Libre seccional Cúcuta en el año 2008. Abogado Litigante con experiencia en las áreas de Civil, Penal, Laboral, Administrativo, Familia, Procesos Disciplinarios y conocedor de la Ley 1448 de 2011 especialmente en el tema de restitución de Tierras. Se ha desempeñado como asesor Jurídico de diferentes empresas de la  región. Dispone de un gran valor humano que entrega por completo al cumplimiento de sus objetivos profesionales.",
        "num": "3012350182",
        "whts": "3012350182"
      },
      {
        "initial": "R",
        "name": "Lic. RAUL DANIEL DOMINGUEZ GUTIERREZ",
        "img":  lawyer6 ,
        "description": "Contador Publico Egresado de la Universidad de Santander (UDES) Experiencia como asesor financiero, tributario y contable desde el año 2008. Con conocimiento en gerencia empresarial por su trayectoria con empresas de amplio reconocimiento en la ciudad que han crecido a nivel nacional. Con reconocimiento por el manejo de su profesión en forma ética especialmente en los temas relacionados con declaraciones de impuesto, exógena, revisoría fiscal y auditoria.",
        "num": "3125181958",
        "whts": "3125181958"
      },
      {
        "initial": "M",
        "name": "DRA. MARYORI MELEYSA MONTES MORA",
        "img":  lawyer7 ,
        "description": "Abogada Egresada de la Universidad Simón Bolívar Sede Cúcuta. Con conocimiento en temas Administrativos, Civil, Laboral, Comercial, Formalización de Tierras, experiencia en agotamiento de Vía Gubernativa, Acciones Populares y Ley de 1448 de 2011 por el trabajo realizado con victimas del conflicto armado a través del consultorio jurídico de la Universidad Simón Bolívar y durante el tiempo laborado como auxiliar jurídico de la oficina de Abogados del Dr. José Rene García Colmenares.",
        "num": "3204723595",
        "whts": "3204723595"
      },
      {
        "initial": "F",
        "name": "Dr. Franco Marinez Arenas",
        "img":  lawyer8 ,
        "description": "abogado titulado  egresado de la universidad Simon  Bolívar extensión  Cucuta. Especialista en Derecho Administrativo de la Universidad Simon Bolivar Extensión Cucuta. Asesorías jurídicas en : Derecho Administrativo, Derecho Familia, civil  , laboral , Derechos humanos, y acciones constitucionales .",
        "num": "3204723595",
        "whts": "3204723595"
      },
    ]
  );
  // useEffect(() => {
  //   console.log('ejecutando')
  //   cargarServicios()
  // }, []);

  // const cargarServicios = () => {
  //   console.log(data);
  // }

  /////
  return (
    <DataContext.Provider
      value={{
        data
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
