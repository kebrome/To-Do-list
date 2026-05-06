import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "./TaskContext";

function AddTask() {
  const { todos, setTodos } = useContext(TaskContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: data.task, description: data.discription, completed: false },
    ]);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Create Task
          </h1>
          <p className="text-gray-400">Add a new task to your list</p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-8 backdrop-blur-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Task Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Task Title
              </label>
              <input
                type="text"
                placeholder="e.g., Complete project report"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
                {...register("task", { required: "Task is required" })}
              />
              {errors.task && (
                <p className="text-red-400 text-sm mt-1">{errors.task.message}</p>
              )}
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Description
              </label>
              <textarea
                placeholder="Add details about this task..."
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200 resize-none h-24"
                {...register("discription", { required: "Description is required" })}
              />
              {errors.discription && (
                <p className="text-red-400 text-sm mt-1">Description is required</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Create Task
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 px-6 py-3 bg-slate-700 text-gray-300 font-semibold rounded-lg hover:bg-slate-600 transition-all duration-200 border border-slate-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
