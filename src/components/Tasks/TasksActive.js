import React from "react";
import TasksActiveList from "./TasksActiveList";

const TasksActive = (props) => {
  return <TasksActiveList tasks={props.tasks} onCheck={props.onCheck} />;
};

export default TasksActive;
