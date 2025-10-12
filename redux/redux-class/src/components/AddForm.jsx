import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function AddFrom() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (ev) => {
    ev.preventDefault();
    dispatch(addTodo(task));
    setTask(" ");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}
