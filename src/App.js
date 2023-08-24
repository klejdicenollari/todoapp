import React, {  useState } from 'react';
import './App.css';
import { TodoContainer } from './TodoContainer';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [upadteInputValue, setUpdateInputValue] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [nextId, setNextId] = useState(1);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleInputUpdateChange(event) {
    setUpdateInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
        const newTodo = { id: nextId, text: inputValue.trim(), completed: false };
        setTodos([...todos, newTodo]);
        setNextId(prevId => prevId + 1);
      setInputValue('');
    }
  }

  function handleUpdateSubmit() {
    if (upadteInputValue.trim()) {
      
        const updatedTodos = todos.map(todo =>
          todo.id === editingTodoId ? { ...todo, text: upadteInputValue.trim() } : todo
        );
        setTodos(updatedTodos);
        setEditingTodoId(null);
      
      setUpdateInputValue('');
    }
  }

  function handleStartEdit(id, text) {
    setEditingTodoId(id);
    setUpdateInputValue(text);
  }

  function handleCancelEdit() {
    setEditingTodoId(null);
    setInputValue('');
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
    setEditingTodoId(null);
  }

  function handleComplete(id) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        <h1>Aktivitetet e mia</h1>
        <div className="input-container">
          <input
            type="text"
            value={ inputValue}
            onChange={handleInputChange}
            placeholder="Shto një aktivitet"
          />
          <button onClick={handleSubmit} className="add-button">
            {<i className="fas fa-plus"></i>}
          </button>
        </div>
        <TodoContainer  editingTodoId={editingTodoId} handleCancelEdit={handleCancelEdit} handleComplete={handleComplete} handleDelete={handleDelete} handleInputUpdateChange={handleInputUpdateChange} handleStartEdit={handleStartEdit} handleUpdateSubmit={handleUpdateSubmit} todos={todos}  upadteInputValue={upadteInputValue} />
      </div>
    </div>
  );
}

export default App;



