import { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  return (
    <TaskContext.Provider value={{ todos, setTodos }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
