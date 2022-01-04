import React from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

const DUMMY_TASKS = [
  {
    id: "t1",
    date: new Date(2022, 0, 4),
    title: "Clean my room",
  },
  {
    id: "t2",
    date: new Date(2022, 0, 4),
    title: "Do the groceries",
  },
  {
    id: "t3",
    date: new Date(2022, 0, 4),
    title: "Do homework",
  },
];

const App = () => {
  const tasks = DUMMY_TASKS;
  return (
    <div>
      <h1 style={{ "text-align": "center" }}>ToDo App</h1>
      <NewTask />
      <Tasks items={tasks} />
    </div>
  );
};

export default App;
