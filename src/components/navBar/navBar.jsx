import React from "react";
import classes from "./navBar.module.css";
import { HocContainer } from "../hoc/HocContainer";
import logo1 from "../../assets/logo1.svg";
class NavBar extends React.Component {
  render() {
    return (
      <div className={classes.Bus}>
        <div className={classes.NavBar}>
          <div className={classes.Info}>About us</div>
          <div className={classes.Logo}>
            <img src={logo1} alt="#" />
          </div>
          <div className={classes.Info}>contact us</div>
        </div>
      </div>
    );
  }
}

export default HocContainer(NavBar);
