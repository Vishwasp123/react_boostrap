import React , {useState, useEffect} from 'react'
import axios from 'axios';
import { deleteUser } from '../services/userApi';

// uselocation used for back button not show in dashboar 
import { Link, useLocation } from 'react-router-dom';


export default function UserList() {


    const localtion = useLocation();  //fetch current url 
    const showBack = localtion.pathname === "/userList";

    const [users, setUsers] = useState([]); 
    const [loading, setLoding] = useState(true)

    useEffect(() => {
        console.log("Api Call Started")
        axios.get("http://localhost:3000/users")
        .then(res => {
           setUsers(res.data)
           console.log(res.data)
        })
        .catch(err => console.error(err))
        .finally(() => { 
            setLoding(false)
        })
    }, []);


    // handle delete add karna 

    const handleDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      
      if(!confirmDelete) return

      try{
        await deleteUser(id); //service api call 
        alert("User delete suceefully")

        setUsers(users.filter(user => user.id !== id)); 
      } catch (error) {
        console.error(error); 
        alert("Failed to delete user");
      }

    };

  return (
    <>
    
    <div className="container mt-4">

        {/* only back button show userlist url  */}
        {showBack && (
        <div className=" containers mb-3">
          <Link className="btn btn-secondary" to="/">
            Back
          </Link>
        </div>
      )}

      
        <h2 className='text-center'>User List</h2>
      <table className="table table-hover">
        
            <thead>
                <tr>
                <th scope="col">S.N</th>
                <th scope="col">USername</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
                <th scope="col"> Actions</th>
                </tr>
            </thead>
            <tbody>
               {users.map((u, i) => (
                    <tr key={u.id}>
                        <th scope="row">{i + 1}</th>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.city}</td>
                        <td className=''>
                           {/* Add show profile link  */}
                            <Link className='btn btn-primary' to ={`/users/${u.id}`}> Show</Link>
                            {/* Add edit link edit user details  */}
                            <Link className='btn btn-warning mx-2' to={`/users/update/${u.id}`}> Edit</Link>

                            {/* delete user  */}
                            <Link className='card-link fs-5  btn btn-danger'  onClick={() => handleDelete(u.id)} >Delete</Link>
                             
                        </td>
                    </tr>
                ))}
            </tbody>
      </table>
    </div>
    </>
  )
}
