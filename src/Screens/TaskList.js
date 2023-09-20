import React, { useState } from 'react';

function TaskList() {
  // Replace these paths with your actual logo and profile picture URLs
  const logoSrc = 'path_to_logo';
  const profilePicSrc = 'path_to_profile_pic';

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }
    const newTaskObj = { text: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
  };

  const handleTaskChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleEditTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div style={{ height: '15%', backgroundColor: 'darkblue', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <div>
          <img src={logoSrc} alt="TasksBoard Logo" style={{ height: '50px', width: 'auto' }} />
          <span style={{ color: 'white', fontSize: '24px', marginLeft: '10px' }}>TasksBoard</span>
        </div>
        <div>
          <img src={profilePicSrc} alt="User Profile" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
        </div>
      </div>
      <div style={{ height: '85%', backgroundColor: 'lightgray', padding: '20px', border: '1px solid black' }}>
        <div style={{border:'2px solid black', padding:'15px',width:'30%'}}>
          <h2>My Tasks</h2>
          <div>
            <input
              type="text"
              placeholder="Add a task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>+</button>
          </div>
          <div>
            {tasks.map((task, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskChange(index)}
                />
                <span>{task.text}</span>
                <button onClick={() => handleEditTask(index, prompt('Edit Task', task.text))}>Edit</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
