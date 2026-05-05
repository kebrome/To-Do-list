import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const ab = 22;

  function name(params) {}

  return (
    <TaskContext.Provider value={{ todos, setTodos }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
