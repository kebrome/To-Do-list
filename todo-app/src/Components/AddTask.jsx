import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ToDo from "./ToDo";

import { TaskContext } from "./TaskContext";

function AddTask() {
  const { todos, setTodos } = useContext(TaskContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setTodos((prevTodos) => [...prevTodos, data.task]);
    console.log(todos);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 h-screen">
        <div className=" w-full sm:w-2/3 md:w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-400  p-6 w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="task"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Task
              </label>
              <input
                type="text"
                placeholder="Add a task"
                className="border border-gray-400 rounded-md p-2 w-full"
                {...register("task", { required: "Task is required" })}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTask;
