import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container my-3">
      <h3 className="text-center">Todos List</h3>
      {todos.length === 0 ? (
        <p className="text-center">No Todos to display</p>
      ) : (
        todos.map((t) => (
          <TodoItem todo={t} key={t.sno} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default Todos;
