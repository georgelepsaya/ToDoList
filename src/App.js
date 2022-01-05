import React, { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

const DUMMY_TASKS = [
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
];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ToDo App</h1>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks items={tasks} />
    </div>
  );
};

export default App;
