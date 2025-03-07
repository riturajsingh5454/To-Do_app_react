import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white flex justify-between px-10">
      <Link to="/" className="text-2xl font-bold px-2 py-2">
        To-Do App
      </Link>
      <Link to="/add" className="text-2xl font-bold  px-2 py-2">
        +Add Task
      </Link>
    </nav>
  );
};

export default NavBar;
