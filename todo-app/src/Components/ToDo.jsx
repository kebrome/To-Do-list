import { useState, useEffect, useContext, useRef } from "react";
import ToDoList from "./ToDoList";
import { Link } from "react-router-dom";
import { TaskContext } from "./TaskContext";

function CircularProgress({ completed, total, percent }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-40 h-40">
        <svg width="160" height="160" className="transform -rotate-90 drop-shadow-lg">
          {/* Background circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="rgba(71, 85, 105, 0.5)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              {percent}%
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {completed} of {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToDo() {
  const { todos, setTodos } = useContext(TaskContext);
  const [Tasks, setTasks] = useState([]);
  const endOfListRef = useRef(null);

  useEffect(() => {
    setTasks(todos);
  }, [todos]);

  // Auto-scroll page to bottom when new tasks are added
  useEffect(() => {
    const timer = setTimeout(() => {
      if (endOfListRef.current) {
        endOfListRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [Tasks]);

  const completedCount = Tasks.filter((t) => t.completed).length;
  const totalCount = Tasks.length;
  const progressPercent =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  function RemoveTask() {
    setTodos(() => []);
  }

  function toggleTaskComplete(index) {
    const updatedTasks = [...Tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTodos(updatedTasks);
  }

  function removeTask(index) {
    const updatedTasks = Tasks.filter((_, i) => i !== index);
    setTodos(updatedTasks);
  }

  return (
    <>
      {/* Header */}
      <div className="pt-8 px-4">
        <div className="flex justify-between items-center max-w-4xl mx-auto mb-12">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Do It!
            </h1>
            <p className="text-gray-400 mt-2">Organize your life, one task at a time</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-4">
        {/* Main Content */}
        <div className="w-full max-w-4xl">
          {/* Quote */}
          <div className="my-8 text-center px-4">
            <p className="text-gray-400 italic text-lg">
              "The secret of getting ahead is getting started."
            </p>
            <p className="text-gray-500 italic text-sm mt-2">- Mark Twain</p>
          </div>

          {/* Tasks Container */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 backdrop-blur-md p-8 mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Tasks</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {Tasks.length > 0 ? (
              <div className="space-y-2">
                {Tasks.map((taskItem, index) => (
                  <ToDoList
                    key={index}
                    task={taskItem.task}
                    description={taskItem.description}
                    completed={taskItem.completed}
                    onToggleComplete={() => toggleTaskComplete(index)}
                    onRemove={() => removeTask(index)}
                    setTask={setTasks}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-gray-400 text-lg">No tasks yet. Create one to get started!</p>
              </div>
            )}
            <div ref={endOfListRef} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/addtask"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
            >
              ➕ Add Task
            </Link>
            {Tasks.length > 0 && (
              <button
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={RemoveTask}
              >
                🗑️ Remove All
              </button>
            )}
          </div>

          {/* Progress Section */}
          {totalCount > 0 && (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 backdrop-blur-md p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Progress</h2>
              <div className="flex justify-center">
                <CircularProgress
                  completed={completedCount}
                  total={totalCount}
                  percent={progressPercent}
                />
              </div>
              <div className="mt-8 text-center">
                <div className="inline-block bg-slate-700 bg-opacity-50 px-6 py-3 rounded-lg">
                  <p className="text-gray-300 text-sm">Tasks Completed</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {completedCount}/{totalCount}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ToDo;
