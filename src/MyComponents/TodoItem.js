import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card my-2 p-3">
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
