import React, { useState } from 'react';
import TaskPopup from '../PopUp/PopUp';
import './styles.css';

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', status: 'TODO', createdAt: '01/09/2021, 05:30:00' },
  { id: 2, title: 'Task 2', description: 'Description 2', status: 'TODO', createdAt: '01/09/2021, 05:30:00' },
  { id: 3, title: 'Task 3', description: 'Description 3', status: 'TODO', createdAt: '01/09/2024, 05:30:00' },
  { id: 4, title: 'Task 4', description: 'Description 4', status: 'IN PROGRESS', createdAt: '01/09/2024, 05:30:00' },
  { id: 5, title: 'Task 5', description: 'Description 5', status: 'IN PROGRESS', createdAt: '01/09/2021, 05:30:00' },
  { id: 6, title: 'Task 6', description: 'Description 6', status: 'DONE', createdAt: '01/09/2021, 05:30:00' },
];

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [draggedTask, setDraggedTask] = useState(null);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'TODO' });
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
  const [taskToView, setTaskToView] = useState(null);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return a.title.localeCompare(b.title);
  });

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.setData('text/plain', task.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    if (draggedTask) {
      const updatedTasks = tasks.map(task =>
        task.id === draggedTask.id ? { ...task, status } : task
      );
      setTasks(updatedTasks);
      setDraggedTask(null);
    }
  };

  const openAddTaskPopup = () => {
    setIsAddingTask(true);
  };

  const closeAddTaskPopup = () => {
    setIsAddingTask(false);
    setNewTask({ title: '', description: '', status: 'TODO' });
  };

  const handleNewTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const addTask = (e) => {
    e.preventDefault();
    const task = {
      id: tasks.length + 1,
      ...newTask,
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, task]);
    closeAddTaskPopup();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsEditPopupOpen(true);
  };

  const handleViewTask = (task) => {
    console.log(task)
    setTaskToView(task);
    setIsViewPopupOpen(true);
  };

  const handleSaveEditedTask = (updatedTask) => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setIsEditPopupOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <div className="header-buttons">
          <button className="header-button logout-button">Logout</button>
        </div>
      </header>

      <div className="container">
        <button className="add-button" onClick={openAddTaskPopup}>
          Add Task
        </button>
        <div className="task-header">
          <div>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          <div className="sort-container">
            <span className="sort-label">Sort By:</span>
            <select
              value={sortBy}
              onChange={handleSort}
              className="sort-select"
            >
              <option value="recent">Recent</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>

        <div className="board">
          {['TODO', 'IN PROGRESS', 'DONE'].map(status => (
            <div
              key={status}
              className="column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, status)}
            >
              <div className="column-header">{status}</div>
              {sortedTasks.filter(task => task.status === status).map(task => (
                <div
                  key={task.id}
                  className="task"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                >
                  <div className="task-title">{task.title}</div>
                  <div className="task-description">{task.description}</div>
                  <div className="task-date">Created at: {task.createdAt}</div>
                  <div className="task-actions">
                    <button
                      className="action-button delete-button"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="action-button edit-button"
                      onClick={() => handleEditTask(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="action-button view-button"
                      onClick={() => handleViewTask(task)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Add Task Popup */}
        {isAddingTask && (
          <TaskPopup
            action="add"
            taskData={newTask}
            onClose={closeAddTaskPopup}
            onSave={(task) => {
              const newTaskWithId = { ...task, id: tasks.length + 1, createdAt: new Date().toLocaleString() };
              setTasks([...tasks, newTaskWithId]);
              closeAddTaskPopup();
            }}
          />
        )}

        {/* Edit Task Popup */}
        {isEditPopupOpen && taskToEdit && (
          <TaskPopup
            action="edit"
            taskData={taskToEdit}
            onClose={() => setIsEditPopupOpen(false)}
            onSave={handleSaveEditedTask}
          />
        )}

        {/* View Task Popup */}
        {isViewPopupOpen && taskToView && (
          <TaskPopup
            action="view"
            taskData={taskToView}
            onClose={() => setIsViewPopupOpen(false)}
            onSave={() => {}}
          />
        )}
      </div>
    </>
  );
};

export default TaskBoard;
