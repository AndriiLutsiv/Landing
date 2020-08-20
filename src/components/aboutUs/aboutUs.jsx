import React from "react";
import classes from "./aboutUs.module.css";
import ElPrimero from "./ElPrimero/ElPromero";
import ElDorcero from "./ElDorcero/Eldorcero";
import ElTercero from "./ElTercero/ElTercero";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <ElPrimero />
        <ElDorcero />
        <ElTercero />
      </div>
    );
  }
}

export default AboutUs;
