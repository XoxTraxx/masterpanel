import React from "react";
import "./spinner.css";


function Spinner() {
    return (
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="dot1" />
          <div className="dot2" />
        </div>
      </div>
    );
  }



export default Spinner;