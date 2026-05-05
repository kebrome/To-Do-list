import { useState, useEffect, useContext } from "react";
import ToDoList from "./ToDoList";
import { Link } from "react-router-dom";
import { TaskContext } from "./TaskContext";
function ToDo() {
  const { todos, setTodos, disc } = useContext(TaskContext);
  const [Tasks, setTasks] = useState([]);
  // const Data = new Date().toJSON().slice(0, 10);
  useEffect(() => {
    setTasks(todos);
  }, [todos]);

  function RemoveTask() {
    setTodos(() => []);
  }
  return (
    <>
      <div className="pt-3 flex justify-between ">
        <span className=" ms-3 p-1  text-red-500 font-bold">Do It!</span>
      </div>
      <div className="flex flex-col items-center p-4 ">
        <div className="text-red-600 mt-4 mb-6 text-3xl font-bold">
          Task list
        </div>
        <div className="my-4 text-center">
          <p className="text-gray-500 italic text-lg">
            "The secret of getting ahead is getting started."
          </p>
          <p className="text-gray-500 italic text-lg mt-2">- Mark Twain</p>
        </div>
        <div className="w-full sm:w-5/6 lg:w-2/3 rounded-lg shadow-md border-red-900  p-6 mx-8 mb-6  flex flex-col items-center ">
          {Tasks.length > 0 ? (
            Tasks.map((task, index) => (
              <ToDoList
                key={index}
                task={task}
                setTask={setTasks}
                discr={disc}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">No task available</p>
          )}
        </div>
        <div className="flex gap-6">
          <Link
            to="/addtask"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Task
          </Link>
          {Tasks.length > 0 && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={RemoveTask}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default ToDo;
