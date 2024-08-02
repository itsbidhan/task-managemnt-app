import React from 'react';

function Task({ task, onDelete, onToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;