import { useState } from "react";

import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

const Header = (props) => {
  return (
    <div className="card" style={{ width: 600, height: 250 }}>
      <div className="card-body">
        <div className="col-sm">
          <div className="row" style={{ margin: 10 }}>
            <div className="col-sm-2">
              <RiMoneyDollarBoxLine size={42} />
            </div>
            <div className="col-sm-4">
              <h5 className="card-title" style={{ fontSize: 30 }}>
                Budget <br /> {props.budget}
                <br />
              </h5>
            </div>
            <div className="col-sm-2">
              <GrMoney size={42} />
            </div>
            <div className="col-sm-4">
              <h5 className="card-title" style={{ fontSize: 30 }}>
                Remaining <br /> {props.balance}
                <br />
              </h5>
            </div>
          </div>
          <hr />
          <div
            className="row"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <div className="col-sm-1">
              <GrMoney size={42} />
            </div>
            <div className="col-sm-4" style={{ fontSize: 30 }}>
              Expenses <br /> {props.expenses}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
