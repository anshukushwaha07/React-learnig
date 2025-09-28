import { useState } from 'react';
import React from 'react';

export default function ToDo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <>
    <div>
      <div>
      <input
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <button onClick={() => { setTitle(''); onAddTodo(title); }}>
        Add
      </button>
      </div>
    </>
  );
}
