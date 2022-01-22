import React, { useState, useEffect } from "react";
import lawyer1 from '../assets/lawyers/lawyer1.png';
import lawyer2 from '../assets/lawyers/lawyer2.png';
import lawyer3 from '../assets/lawyers/lawyer3.png';
import lawyer4 from '../assets/lawyers/lawyer4.png';
import lawyer5 from '../assets/lawyers/lawyer5.png';
import lawyer6 from '../assets/lawyers/lawyer6.png';
import lawyer7 from '../assets/lawyers/lawyer7.png';

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
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
      },
      {
        "initial": "D",
        "name": "DR. DANIEL ALEJANDRO PEREZ SUAREZ",
        "img": lawyer2 ,
        "description": "Profesional del Derecho Egresado de la Universidad Libre seccional Cúcuta en el año 2008. Abogado Litigante con experiencia en las áreas de Civil, Penal, Laboral, Administrativo, Familia, Procesos Disciplinarios y conocedor de la Ley 1448 de 2011 especialmente en el tema de restitución de Tierras. Se ha desempeñado como asesor Jurídico de diferentes empresas de la  región. Dispone de un gran valor humano que entrega por completo al cumplimiento de sus objetivos profesionales.",
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
      },
      {
        "initial": "M",
        "name": "DR. MAURICIO FERNANDO ZARATE BARRAGAN",
        "img":  lawyer3 ,
        "description": "Profesional del Derecho Egresado de la Universidad Libre de Colombia Seccional Cúcuta en el año 2006. Especialista en Derecho Procesal y Derecho Aduanero. Conciliador en Derecho. Conocimiento en Restitución, Formalización y Protección de Tierras. Experiencia en el litigio de mas de 8 años en las áreas Civil, Laboral, Administrativo, Comercial y Familia.",
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
      },
      {
        "initial": "H",
        "name": "DR. HEBER BAUTISTA VARGAS",
        "img":  lawyer4 ,
        "description": "Profesional del Derecho egresado de la Universidad Libre de Colombia Seccional Cúcuta en el año 2008. Especialista en Derecho Penal, con trayectoria y reconocimiento en el área. Trabajo en Investigación de Estupefacientes como verificador de extinción de dominio. Manejo y coordinación de personal B&O. Como coordinador de seguridad Unidad de Restitución de Tierras.",
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
      },
      {
        "initial": "E",
        "name": "DR. EXAR AUGUSTO JIMENEZ RINCON",
        "img":  lawyer5 ,
        "description": "Abogado Litigante en ejercicio egresado de la Universidad Libre de Colombia en el año 2015. Laboro en la Jurisdicción de los Contencioso Administrativo de Norte de Santander en los años 2013 y 2014, también laboro con la Dirección de Administración Judicial de la Seccional de Cúcuta para el año 2015. Profesional del derecho que se caracteriza por su constancia, responsabilidad y conocimientos en las áreas del derecho.",
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
      },
      {
        "initial": "R",
        "name": "DR. RAUL DANIEL DOMINGUEZ GUTIERREZ",
        "img":  lawyer6 ,
        "description": "Contador Publico Egresado de la Universidad de Santander (UDES) Experiencia como asesor financiero, tributario y contable desde el año 2008. Con conocimiento en gerencia empresarial por su trayectoria con empresas de amplio reconocimiento en la ciudad que han crecido a nivel nacional. Con reconocimiento por el manejo de su profesión en forma ética especialmente en los temas relacionados con declaraciones de impuesto, exógena, revisoría fiscal y auditoria.",
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
      },
      {
        "initial": "M",
        "name": "DRA. MARYORI MELEYSA MONTES MORA",
        "img":  lawyer7 ,
        "description": "Abogada Egresada de la Universidad Simón Bolívar Sede Cúcuta. Con conocimiento en temas Administrativos, Civil, Laboral, Comercial, Formalización de Tierras, experiencia en agotamiento de Vía Gubernativa, Acciones Populares y Ley de 1448 de 2011 por el trabajo realizado con victimas del conflicto armado a través del consultorio jurídico de la Universidad Simón Bolívar y durante el tiempo laborado como auxiliar jurídico de la oficina de Abogados del Dr. José Rene García Colmenares.",
        "num": "315 475 66 88",
        "whts": "30 245 33 99"
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
