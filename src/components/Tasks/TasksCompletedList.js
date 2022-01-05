import React from "react";
import TaskItem from "./TaskItem";

const TasksCompletedList = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskItem
          title={task.title}
          date={task.date}
          id={task.id}
          key={task.id}
          isActive={task.active}
          onCheck={props.onCheck}
        />
      ))}
    </div>
  );
};

export default TasksCompletedList;
