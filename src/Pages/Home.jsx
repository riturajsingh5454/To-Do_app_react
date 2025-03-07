import React from "react";

const Home = ({ tasks, setTasks }) => {
  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <ul>
          {tasks.length === 0 ? (
            <p className="text-grey-500">No Tasks Added yet!</p>
          ) : (
            tasks.map((tasks, index) => (
              <li
                key={index}
                className="flex justify-between bg-gray-500 p-2 my-2 rounded"
              >
                {tasks}
                <button
                  onClick={() => deleteTask(index)}
                  className="text-white bg-red-600 font-bold h-full rounded px-2"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Home;
