import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task"; 

const TaskList = () => {
  const [showDone, setShowDone] = useState(false);
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = showDone ? tasks : tasks.filter((task) => !task.isDone);

  return (
    <div>
      <label>
        Afficher les tâches faites :
        <input
          type="checkbox"
          checked={showDone}
          onChange={() => setShowDone(!showDone)}
        />
      </label>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
