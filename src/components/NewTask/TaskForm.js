import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  return (
    <form>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>Title</label>
          <input type="text" placeholder="New Task" />
        </div>
        <div className="new-task__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2024-12-31" />
        </div>
      </div>
      <div className="new-task__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
