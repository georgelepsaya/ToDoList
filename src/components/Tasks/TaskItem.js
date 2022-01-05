import React from "react";
import TaskDate from "./TaskDate";
import Card from "../UI/Card";
import "./TaskItem.css";

const TaskItem = (props) => {
  const clickHandler = () => {
    props.onCheck(props.id);
  };

  return (
    <Card className="task-item">
      <input
        type="checkbox"
        className={`${"task-item__check"} ${
          !props.isActive && "task-item__checked"
        }`}
        onClick={clickHandler}
      />
      <h2>{props.title}</h2>
      <TaskDate date={props.date} />
    </Card>
  );
};

export default TaskItem;
