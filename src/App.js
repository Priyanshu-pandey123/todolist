import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import { isEditable } from '@testing-library/user-event/dist/utils';

function App() {
  const todolist = [
    { id: 1, task: "learn html", done: true },
    { id: 2, task: "learn css", done: true },
    { id: 3, task: "learn java script", done: true },
  ];

  const [list, setList] = useState(todolist);
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddTask = (task) => {
    const newTask = {
      id: new Date().getTime(),
      task,
      done: false,
    };
    setList([...list, newTask]);
    setTask('');
  };

  const deleteTask = (id) => {
    setList(list.filter((t) => t.id !== id));
  };

  const handleCheck = (id) => {
    setList(list.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  const handleEdit = (id, text) => {
    
    setTask(text);
    setEditingId(id);
    console.log('jmnj',id,editingId)
  
  };

  const handleSaveEdit = () => {

    setList(list.map((t) =>
      t.id === editingId ? { ...t, task: task } : t
    ));
    setTask('');
    setEditingId(null);
  };

  return (
    <div className="App">
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={isEditable ? handleSaveEdit : () => handleAddTask(task)}>
        {editingId ? 'Save' : 'Add'}
      </button>
      <TodoList
        list={list}
        deleteTask={deleteTask}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
