import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask } from "./actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li className={`Task ${task.isDone ? "isDone" : ""}`}>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      {task.description}
    </li>
  );
};

export default Task;
