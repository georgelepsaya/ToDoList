import React from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ToDo App</h1>
      <NewTask />
      <Tasks />
    </div>
  );
};

export default App;
