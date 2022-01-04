import React from "react";
import TaskDate from "./TaskDate";
import Card from "../UI/Card";
import "./TaskItem.css";

const TaskItem = (props) => {
  return (
    <Card className="task-item">
      <input type="checkbox" className="task-item__check" />
      <h2>{props.title}</h2>
      <TaskDate date={props.date} />
    </Card>
  );
};

export default TaskItem;
