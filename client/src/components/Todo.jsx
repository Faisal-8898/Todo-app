import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo ,updateTodo ,deleteTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);
  const dispatch = useDispatch();
  const onFormSubmit = (e) =>{
    e.preventDefault();
    setEditing(prevState => !prevState);
    dispatch(updateTodo(todo._id,text));
  }
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        backgroundColor: todo.done && !editing ? "#808080b5" : "#21ffedd4",
        textDecorationLine: todo.done && !editing ? "line-through" : "",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>

      <form action="" style={{ display: editing ? "inline" : "none" }}
      onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span onClick={()=>dispatch(deleteTodo(todo._id))}>
        <i className="fas fa-trash" />
      </span>
      <span onClick={() => setEditing((prevState) => !prevState)}>
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Todo;
