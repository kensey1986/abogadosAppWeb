import React, { useContext, Fragment, } from "react";

import AboutComponent from '../../components/about/about'
import HistoryComponent from '../../components/about/history'

export const About = () => {
  return (
      <>
            <HistoryComponent/>
            <AboutComponent/>
      </>
  )
}
