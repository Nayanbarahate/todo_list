import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleAddTodo = () => {
    setTitle('');
    onAddTodo(title);
    navigate('/todos')
  }
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </>
  )
}
