import React from "react";
import TasksCompletedList from "./TasksCompletedList";

const TasksCompleted = (props) => {
  return <TasksCompletedList tasks={props.tasks} />;
};

export default TasksCompleted;
