import React, { useState } from "react";

import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button
          className="close-btn"
          onClick={() => {
            props.setCurrent(props.current + 1);
            console.log(props.current);
            props.setMsg("");
            props.setTrigger(false);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
