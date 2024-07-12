import React from "react";
import { MdDelete } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

const TodoItem = ({ text, id, deleteTodo }) => {
  return (
    <div className="flex items-center my-3 mx-2 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <CiLocationArrow1 />
        <p className="text-slate-700 ml-4 text-[17px] font-bold">{text}</p>
      </div>

      <button
        onClick={() => {
          deleteTodo(id);
        }}
      >
        <MdDelete className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoItem;
