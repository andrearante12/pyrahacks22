import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Activity from "./components/Activity";

function App() {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(1000);

  return (
    <React.Fragment>
      <div className="container">
        <div className="col">
          <Header balance={balance} expenses={expenses} budget={budget} />
        </div>
        <div className="w-100"></div>
        <div className="col">
          <Activity
            updateBalance={setBalance}
            updateExpenses={setExpenses}
            updateBudget={setBudget}
            balance={balance}
            expenses={expenses}
            budget={budget}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
