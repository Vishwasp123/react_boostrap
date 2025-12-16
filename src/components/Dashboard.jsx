import {  Link} from "react-router-dom";
import React from 'react'

function Dashboard() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to= "/">User</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* add link add user in dashboard panel */}
              <Link className="nav-link active" aria-current="page" to="/add_user" >Add User</Link>

                {/* link to add users page par show  karna he  */}
                <Link className="nav-link active" aria-current="page" to="/userList" >Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Dashboard

