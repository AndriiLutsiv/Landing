import React from "react";
import classes from "./HocContainer.module.css";
export const HocContainer = (Component) => {
  return (props) => {
    return (
      <div className={classes.container}>
        hoc
        <Component {...props} />
        hoc
      </div>
    );
  };
};
// import React from "react";

// class AboutUs extends React.Component {
//   render() {
//     return (

//     );
//   }
// }

// export default AboutUs;
