import React from 'react'
import TodoItem from "../MyComponents/TodoItem";

const Todos = ({ todos ,onDelete}) => {
  return (
    <div className="container">
      <h3 className='text-center'>Todos List</h3>
      {todos.length === 0 ? ("No Todo to display"):
      (todos.map((t) => (
        <TodoItem todo={t} key={t.sno} onDelete={onDelete}/>
      ))
    )}
    </div>
  );
};



export default Todos
