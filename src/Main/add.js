import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    onAddTodo(title);
    navigate('/todos')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button disabled={!title} onClick={handleAddTodo}>Add</button>
    </>
  )
}
