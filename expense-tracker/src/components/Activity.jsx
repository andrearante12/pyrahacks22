import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import ActivityCard from "./ActivityCard";
import Popup from "./Popup";

const Activity = (props) => {
  const [activity, setActivity] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleAddActivity = (d, t) => {
    const transaction = parseInt(t);
    const invalid = transaction * -1 > props.balance;

    console.log("total ", props.expenses + transaction * -1);
    console.log("remaining", props.balance);

    if ((transaction < 0 && invalid) || transaction * -1 > props.budget) {
      alert("Transaction Declined");
    } else {
      if (transaction < 0) {
        props.updateExpenses(props.expenses + transaction * -1);
      }
      props.updateBalance(transaction + parseInt(props.balance));

      let copy = [...activity];
      copy = [...copy, { description: d, transaction: t }];
      setActivity(copy);
    }
  };

  return (
    <div className="card" style={{ width: 450, height: 1000 }}>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-6">
            <h3>Activity Tracker</h3>
          </div>
          <div className="col-sm-6">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => {
                setButtonPopup(true);
              }}
            >
              Add Activity <AiOutlinePlusCircle size={40} />
            </button>
            <Popup
              trigger={buttonPopup}
              addActivity={handleAddActivity}
              setTrigger={setButtonPopup}
            >
              <h3>My popup</h3>
            </Popup>
          </div>
        </div>
        <hr />

        {activity.map((a) => (
          <ActivityCard
            description={a.description}
            transaction={a.transaction}
            key={activity.indexOf(a)}
          />
        ))}
      </div>
    </div>
  );
};

export default Activity;
