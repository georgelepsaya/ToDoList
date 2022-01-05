import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./NewTask.css";

const NewTask = () => {
  const [isEditing, setIsEditing] = useState(false);

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-task">
      <h2 className="new-task__h2">Add New Task</h2>
      {!isEditing && <button onClick={startEditingHandler}>Add Task</button>}
      {isEditing && <TaskForm onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewTask;
