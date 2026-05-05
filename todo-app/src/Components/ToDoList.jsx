import React from "react";

function ToDoList({ task }) {
  return (
    <>
      <div className="flex justify-between rounded-lg overflow-hidden shadow-md border border-gray-300 p-6 my-4 w-full">
        {" "}
        <h1 className="font-lg">{task}</h1>
        {/* <label htmlFor="time">
          Time:
          <input
            type="time"
            id="time"
            className="border border-gray-300 rounded-md p-2 w-24"
          />
        </label> */}
        <label htmlFor="task-checkbox" className="flex items-center gap-2">
          <i className="text-xs text-gray-500">completed</i>
          <input type="checkbox" id="task-checkbox" />
        </label>
      </div>
    </>
  );
}

export default ToDoList;
