import { useState } from "react";

import { FaRegDotCircle } from "react-icons/fa";

import Popup from "./Popup";

function Question(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleSelect = (selection) => {
    if (selection == props.answer) {
      props.updateMsg("You got it right!");
      props.setCorrect(props.correct + 1);
    } else {
      props.updateMsg("You got it wrong!");
    }
    setButtonPopup(true);
  };

  return (
    <div>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        current={props.current}
        setCurrent={props.moveOn}
        setMsg={props.setMsg}
      >
        <h2>{props.msg}</h2>
        <h3>
          {props.answer} : {props.explanation}
        </h3>
      </Popup>

      <div className="row question">
        <h1>
          {" "}
          {props.id}. {props.question}{" "}
        </h1>
      </div>

      {props.choices.map((choice) => (
        <div className="row">
          <button
            onClick={() => {
              handleSelect(choice);
            }}
          >
            <div className="choices col-sm-1">
              <h2>
                <FaRegDotCircle /> {choice}
              </h2>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Question;
