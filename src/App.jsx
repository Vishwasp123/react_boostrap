import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
// Api call kar rahe he 
import AddUsers from './pages/user/AddUsers'
import Profile from './pages/user/profile'
import EditUser from './pages/user/EditUser'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
       <Route path="/add_user" element={<AddUser />} />
        <Route path="/userList" element={<UserList />} /> 
        <Route path="/api_user" element={<AddUsers />} />
        <Route path="/users/:id" element={<Profile />} />
        <Route  path="/users/update/:id" element={<EditUser />} />
    </Routes>
  )
}

export default App
