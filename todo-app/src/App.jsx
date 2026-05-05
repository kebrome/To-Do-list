import React from "react";
import ToDo from "./Components/ToDo";
import AddTask from "./Components/AddTask";
import TaskContextProvider from "./Components/TaskContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TaskContextProvider>
        <div className="bg-slate-800 min-h-screen">
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/addtask" element={<AddTask />} />
          </Routes>
        </div>
      </TaskContextProvider>
    </>
  );
}

export default App;
