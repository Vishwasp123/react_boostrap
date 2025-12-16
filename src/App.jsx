import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import UserList from './components/UserList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
       <Route path="/add_user" element={<AddUser />} />
        <Route path="/userList" element={<UserList />} /> 
    </Routes>
  )
}

export default App
