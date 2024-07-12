import TodoItem from "./TodoItem";
import { useRef, useState, useEffect } from "react";
import { MdAddTask } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem("Todos")
      ? JSON.parse(localStorage.getItem("Todos"))
      : []
  );
  // add the text
  const addTodo = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    // console.log(inputText);
    const newTodo = {
      id: Date.now(),
      text: inputText,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center flex flex-col max-w-3xl w-11/12 p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <RiTodoLine className="h-8 w-8" />
        <h1 className="text-2xl font-semibold">To-Do-List</h1>
      </div>
      {/* input box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2  placeholder:text-slate-600 font-semibold"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={addTodo}
          className="border-none rounded-full bg-blue-600  w-32 h-14"
        >
          <MdAddTask className="h-8 w-8 m-auto" />
        </button>
      </div>
      {/* todo list */}

      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItem
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
