import { useState } from "react";

function ToDoList({ task, description, completed, onToggleComplete, onRemove }) {
  const [disc, setDisc] = useState(false);

  function discriptionHand() {
    setDisc(() => !disc);
  }

  return (
    <div
      className={`w-full rounded-xl overflow-hidden shadow-lg backdrop-blur-md transition-all duration-300 mb-4 border ${
        completed
          ? "border-green-500 bg-slate-800 bg-opacity-40"
          : "border-slate-600 bg-slate-800 bg-opacity-60 hover:bg-opacity-80"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <h3
              className={`text-lg font-semibold transition-all duration-300 ${
                completed
                  ? "line-through text-gray-500"
                  : "text-white group-hover:text-blue-400"
              }`}
            >
              {task}
            </h3>
          </div>

          <div className="flex gap-2 flex-shrink-0">
            <button
              className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-blue-400 font-medium rounded-lg text-sm transition-all duration-200 whitespace-nowrap"
              onClick={discriptionHand}
            >
              {disc ? "Hide" : "View"}
            </button>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={completed}
                onChange={onToggleComplete}
                className="w-5 h-5 rounded-full cursor-pointer accent-green-500"
              />
            </label>

            <button
              onClick={onRemove}
              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-sm transition-all duration-200 hover:scale-110 transform"
            >
              ✕
            </button>
          </div>
        </div>

        {disc && (
          <div className="mt-4 pt-4 border-t border-slate-600">
            <p
              className={`text-sm transition-all duration-300 ${
                completed ? "line-through text-gray-600" : "text-gray-300"
              }`}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
