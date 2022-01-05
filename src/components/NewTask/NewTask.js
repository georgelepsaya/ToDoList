import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./NewTask.css";

const NewTask = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
      active: true,
    };
    props.onAddTask(taskData);
    setIsEditing(false);
  };

  return (
    <div className="new-task">
      <h2 className="new-task__h2">Add New Task</h2>
      {!isEditing && <button onClick={startEditingHandler}>Add Task</button>}
      {isEditing && (
        <TaskForm
          onCancel={stopEditingHandler}
          onSaveTaskData={saveTaskDataHandler}
        />
      )}
    </div>
  );
};

export default NewTask;
