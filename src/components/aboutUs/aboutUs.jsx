import React from "react";
import classes from "./aboutUs.module.css";
import ElPrimero from "./ElPrimero/ElPromero";
import ElDorcero from "./ElDorcero/Eldorcero";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <ElPrimero />
        <ElDorcero />
      </div>
    );
  }
}

export default AboutUs;
