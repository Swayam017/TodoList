import React, { useState } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to buy some vegetables"
    },
    {
      sno: 2,
      title: "Study React",
      desc: "Finish React hooks and props today"
    }
  ]);

  // Delete a todo
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // Add a todo
  const addTodo = (title, desc) => {
    const sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
