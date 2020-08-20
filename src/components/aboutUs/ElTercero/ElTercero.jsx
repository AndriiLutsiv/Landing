import React from "react";
import classes from "./ElTercero.module.css";
import icon from "../../../assets/Icon4.svg";
import van from "../../../assets/Van.jpg";
class ElTercero extends React.Component {
  render() {
    return (
      <div className={classes.wrap}>
        <div className={classes.right}></div>
        <div className={classes.left}>
          <div className={classes.content}>
            <div class={classes.svg}>
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
          <div className={classes.image}>
            <img
              //   class="img Three_fourth__condition round"
              src={classes.van}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ElTercero;
