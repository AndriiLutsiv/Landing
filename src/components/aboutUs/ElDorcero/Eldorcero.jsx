import React from "react";
import classes from "./ElDorcero.module.css";
import icon from "../../../assets/Icon4.svg";
import image from "../../../assets/1.jpg";
class ElDorcero extends React.Component {
  render() {
    return (
      <div className={classes.wrap}>
        <div className={[classes.left, classes.roundedImg].join(" ")}></div>
        <div className={classes.right}>
          <div className={classes.rightContent}>
            <div className={classes.svg}>
              <img src={icon} alt="" />
            </div>
            <div className={classes.title}>Lorem Ispum</div>
            <div className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived.
            </div>
          </div>
          <div className={classes.img}>
            <img className={classes.roundedImg} src={image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ElDorcero;
