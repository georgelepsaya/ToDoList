import React, { useState } from "react";
import TasksActive from "./TasksActive";
import Card from "../UI/Card";
import "./Tasks.css";
import TasksCompleted from "./TasksCompleted";

const Tasks = (props) => {
  const [tasks, setTasks] = useState(props.items);
  console.log(tasks);

  const [activeTasks, setActiveTasks] = useState(
    tasks.filter((task) => task.active === true)
  );

  const [completedTasks, setCompletedTasks] = useState(
    tasks.filter((task) => task.active === false)
  );

  const onCheckHandler = (id) => {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = !task.active;
      }
    });
    setTasks(tasks);
    setActiveTasks(tasks.filter((task) => task.active === true));
    setCompletedTasks(tasks.filter((task) => task.active === false));
  };

  return (
    <Card className="tasks">
      <h2>Active Tasks</h2>
      <TasksActive tasks={activeTasks} onCheck={onCheckHandler} />
      <h2>Completed Tasks</h2>
      <TasksCompleted tasks={completedTasks} onCheck={onCheckHandler} />
    </Card>
  );
};

export default Tasks;
