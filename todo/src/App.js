import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./App.css";
import Task from "./components/Task";

const App = () => {
  const [ids, setIds] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

  const handleClick = (e) => {
    e.preventDefault();
    addTask();
  };

  const addTask = () => {
    let copy = [...ids];
    copy = [...copy, { id: ids.length + 1 }];
    setIds(copy);
  };

  const handleDelete = (id) => {
    setIds(ids.filter((c) => c.id !== id));
  };

  return (
    <div className="center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h1 id="title-text">TODO Task</h1>
          </div>
          <div className="col-md-2">
            <button className="btn btn-secondary btn-sm" onClick={handleClick}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>

        {ids.map((task) => (
          <Task onDelete={handleDelete} key={task.id} id={task.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
