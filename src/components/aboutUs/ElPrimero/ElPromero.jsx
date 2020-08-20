import React from "react";
import Icon from "../../../assets/Icon4.svg";
import classes from "./ElPrimero.module.css";
class ElPrimero extends React.Component {
  render() {
    return (
      <div className={classes.wrap}>
        <div className={classes.logo}>
          <img src={Icon} alt="" />
        </div>
        <div className={classes.title}>El Primero lorem</div>
        <div className={classes.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    );
  }
}
export default ElPrimero;
