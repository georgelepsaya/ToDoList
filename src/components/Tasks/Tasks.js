import React, { useState } from "react";
import TasksActive from "./TasksActive";
import Card from "../UI/Card";
import "./Tasks.css";
import TasksCompleted from "./TasksCompleted";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: "t1",
      date: new Date(2022, 0, 4),
      title: "Clean my room",
      active: true,
    },
    {
      id: "t2",
      date: new Date(2022, 0, 4),
      title: "Do the groceries",
      active: true,
    },
    {
      id: "t3",
      date: new Date(2022, 0, 4),
      title: "Do homework",
      active: false,
    },
  ]);

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
    console.log("change", id);
    console.log("current tasks", tasks);
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
