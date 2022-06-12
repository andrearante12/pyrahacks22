import { useState } from "react";

const ActivityCard = (props) => {
  return (
    <div className="row">
      <div className="col-sm">
        <h5 className="card-title activity-title">
          {props.description} {props.transaction}
        </h5>
      </div>
    </div>
  );
};

export default ActivityCard;
