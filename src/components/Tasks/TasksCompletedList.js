import React from "react";
import TaskItem from "./TaskItem";

const TasksCompletedList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskItem title={task.title} date={task.date} key={task.id} />
      ))}
    </div>
  );
};

export default TasksCompletedList;
