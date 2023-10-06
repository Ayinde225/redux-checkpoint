import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./actions"; 

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== "") {
      dispatch(addTask({ description: taskDescription, isDone: false }));
      setTaskDescription("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Ajouter</button>
    </div>
  );
};

export default AddTask;
