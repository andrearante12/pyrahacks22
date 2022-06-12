import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiFillCheckCircle,
} from "react-icons/ai";

const Task = (props) => {
  const [task, setTask] = useState("add a task here");
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const renderTextField = () => {
    if (editing) {
      return (
        <div className="input-container">
          <input
            type="mail"
            required=""
            placeholder={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      );
    }
    return (
      <label for={task} className="form__label">
        {task}
      </label>
    );
  };

  return (
    <div className="row">
      <div className="col-md-8">{renderTextField()}</div>
      <div className="col-md-2">
        <button className="btn btn-secondary btn-sm" onClick={handleEdit}>
          {editing ? <AiFillCheckCircle /> : <AiOutlineEdit />}
        </button>
      </div>
      <div className="col-md-2">
        <button className="btn btn-secondary btn-sm" onClick={() => props.onDelete(props.id)}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default Task;
