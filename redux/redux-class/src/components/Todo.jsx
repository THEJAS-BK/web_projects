import { useSelector, useDispatch } from "react-redux";
import AddFrom from "./AddForm";

import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";
export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleSubmit = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleMark = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <>
      <AddFrom />
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : null }}
          >
            {todo.task}
            <button onClick={() => handleSubmit(todo.id)}>Delete</button>
            <button onClick={() => handleMark(todo.id)}>MarkasDone</button>
          </li>
        ))}
      </ul>
    </>
  );
}
