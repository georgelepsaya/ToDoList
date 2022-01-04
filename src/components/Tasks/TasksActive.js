import React from "react";
import TasksActiveList from "./TasksActiveList";

const TasksActive = (props) => {
  return <TasksActiveList tasks={props.tasks} />;
};

export default TasksActive;
