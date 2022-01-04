import React from "react";
import TasksActive from "./TasksActive";
import Card from "../UI/Card";
import "./Tasks.css";

const Tasks = (props) => {
  return (
    <Card className="tasks">
      <h2>Active Tasks</h2>
      <TasksActive tasks={props.items} />
    </Card>
  );
};

export default Tasks;
