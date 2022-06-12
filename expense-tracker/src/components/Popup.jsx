import React, { useState } from "react";

import "./Popup.css";

function Popup(props) {
  const [tempDescription, setTempDescription] = useState("");
  const [tempTransaction, setTempTransaction] = useState(0);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <input
          type="text"
          placeholder="What did you do?"
          onChange={(e) => {
            setTempDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Transaction"
          onChange={(e) => {
            setTempTransaction(e.target.value);
          }}
        />
        <button
          className="close-btn"
          onClick={() => {
            props.addActivity(tempDescription, tempTransaction);
            setTempDescription("");
            setTempTransaction(0);
            props.setTrigger(false);
          }}
        >
          Add
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
