import React from "react";
import ToDo from "./Components/ToDo";
import AddTask from "./Components/AddTask";
import TaskContextProvider from "./Components/TaskContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TaskContextProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
