// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddTodo from './Main/add';
import TaskList from './Main/todolist';
let nextId = 0;
const App = () => {
  const [todos, setTodos] = useState(
    []
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
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
              <TaskList
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
