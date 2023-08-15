import { useState } from "react";
import "./App.css";

//COMPONENTS
import Header from "./components/header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
    </div>
  );
}

export default App;
