// import { editUser } from "../../services/userApi"
import {useParams, useNavigate } from "react-router-dom"
import  { useState, useEffect } from "react";
import UserForm from "../../components/UserForm"
import { editUser, getUser } from "../../services/userApi"

import React from 'react'

function EditUser() {
  
    const {id} = useParams(); 
    const navigate = useNavigate();

    const [user, setUser] = useState(null)

    // fetch user on load
    useEffect(() => {
        getUser(id)
        .then(data => {
            setUser(data) // ys data (depeneding api ka )
        })
        .catch(err => console.error(err))
    }, [id])
  
    // input change 
   
    const onChange = (e) =>{
    const {name, value} = e.target;
    setUser( prev => ({...prev, [name]: value }));
  }

    //Submit update

    const UpdateUser = async (e) => {
        e.preventDefault(); 


        try{
            await editUser(id, user); //Patch Api 
            navigate("/");
        } catch (error) {
            console.error(error.response?.data);
        }
    }; 


    if(!user) {
        return <p className="text-center"> Loading Edit Page..........</p>
    }

    // render USerform
    return (
        <UserForm  
        user= {user}
        onChange={onChange}
        onSubmit={UpdateUser}
        title="Edit User Details"
        submitText="Update"
        
        />
  )
}

export default EditUser
