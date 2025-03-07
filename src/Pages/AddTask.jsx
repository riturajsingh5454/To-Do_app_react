import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddTask = ({ setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  const AddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
      navigate("/"); //redirect to home page
    }
  };
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">ADD NEW TASK</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="w-full px-3 py-2 border rounded  "
          placeholder="add new Task..."
        />
        <button
          onClick={AddTask}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
    </>
  );
};
export default AddTask;
