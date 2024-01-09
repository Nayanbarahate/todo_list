import React, { useState } from 'react';

export default function Todolist({ todos, onChangeTodo, onDeleteTodo }) {
  const sortedTodos = [...todos].sort((a, b) => b.id - a.id);
  console.log(sortedTodos);

  return (
    <ul>
      {sortedTodos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  console.log(todo);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    onChange({
      ...todo,
      title: e.target.value,
    });
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input value={todo.title} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {todo.title}
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
