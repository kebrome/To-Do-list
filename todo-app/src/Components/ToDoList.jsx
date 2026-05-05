import { useState } from "react";

function ToDoList({ task, setTask, discr }) {
  const [disc, setDisc] = useState(false);
  function discriptionHand() {
    setDisc(() => !disc);
  }
  return (
    <>
      <div className=" rounded-lg overflow-hidden shadow-lg border border-gray-700 p-6 my-4 w-full text-neutral-400">
        {" "}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <h1 className="font-lg">{task}</h1>
            <button
              className="bg-gray-700 rounded-lg p-1 font-semibold"
              onClick={discriptionHand}
            >
              Discription
            </button>
          </div>
          <div className="flex gap-2 ">
            <label htmlFor="task-checkbox" className="flex items-center gap-2">
              <i className="text-xs text-gray-500">completed</i>
              <input type="checkbox" id="task-checkbox" />
            </label>
          </div>
        </div>
        {disc && <p className="text-gray-500 flex ">{discr}</p>}
      </div>
    </>
  );
}

export default ToDoList;
