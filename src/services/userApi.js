import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; 

export const createUser = async (user) => {

    const response = await axios.post(
        `${API_BASE_URL}/create_user`, 
        user
    );  
    return response.data
}

export const profileUser = async (id) => {

    console.log("Fetching id:", id)
    const response = await axios.get(
        `${API_BASE_URL}/users/${id}`,
    ); 
    console.log("Profile Api response", response.data)
    return response.data
}


export const editUser = async (id) => {
    console.log("fetching id:", id)

    const response = await axios.patch(
        `${API_BASE_URL}/users/${id}`,
    ); 
    return response.data
}




