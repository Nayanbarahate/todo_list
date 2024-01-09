// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddTodo from './Main/Add';
import Todolist from './Main/Todolist';

const initialList = [
  { id: 1, title: 'Buy milk'}
];

const App = () => {
  const [todos, setTodos] = useState(initialList);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: title,
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Add Todo</Link>
          <Link to="/todos">Todo List</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <AddTodo
                onAddTodo={handleAddTodo}
              />
            }
          />
          <Route
            path="/todos"
            element={
              <Todolist
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
