import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

//COMPONENTS
import Header from "./components/header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
