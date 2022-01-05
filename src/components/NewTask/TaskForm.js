import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const taskData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveTaskData(taskData);
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-task__controls">
        <div className="new-task__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="New Task"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-task__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
          />
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
