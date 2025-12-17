import {  Link} from "react-router-dom";
import React from 'react'
import UserList from "./UserList";

function Dashboard() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to= "/">Dashboard</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* add link add user in dashboard */}
              <Link className="nav-link active" aria-current="page" to="/add_user" >Add User</Link>
            </li>

            <li className="nav-item">
              {/* add link add user in link users */}
              <Link className="nav-link active" aria-current="page" to="/userList" >Users</Link>
            </li>

            <li className="nav-item">
              {/* add link add user in link users */}
              <Link className="nav-link active" aria-current="page" to="/api_user" >CreateUser</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container">
     <UserList  />
    </div>
    </>
   
    
  )
}

export default Dashboard

