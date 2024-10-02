import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/SignUp-Page/SignUp'
import LoginForm from './components/Login-Page/Login';
import TaskBoard from './components/ToDo/ToDo';
import TaskPopup from './components/Login-Page/Login';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todo-list" element={<TaskBoard/>} />
    </Routes>
  </Router>
  )
}

export default App
