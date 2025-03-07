import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddTask from "./Pages/AddTask";

import NavBar from "./Component/NavBar";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home tasks={tasks} setTasks={setTasks} />}
          />
          <Route path="/add" element={<AddTask setTasks={setTasks} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
