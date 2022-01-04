import React from "react";
import TasksActive from "./TasksActive";
import Card from "../UI/Card";
import "./Tasks.css";
import TasksCompleted from "./TasksCompleted";

const Tasks = (props) => {
  return (
    <Card className="tasks">
      <h2>Active Tasks</h2>
      <TasksActive tasks={props.items} />
      <h2>Completed Tasks</h2>
      <TasksCompleted tasks={props.items} />
    </Card>
  );
};

export default Tasks;
