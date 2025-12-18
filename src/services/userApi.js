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


export const getUser = async(id) => {
    console.log("user url details:", `${API_BASE_URL}/users/${id}`)
    const res = await axios.get(`${API_BASE_URL}/users/${id}`);
    console.log("resposne get api djfhsdfhsdf", res)
    return res.data
    console.log("dsfsdfsdfsdfsdf", res.data)
}


export const editUser = async (id, userData) => {
  console.log("fetching id:", id);
  console.log("users data patch api:", userData);

  const response = await axios.patch(
    `${API_BASE_URL}/users/update/${id}`,
    userData 
  );

  return response.data;
};


export const deleteUser = async (id) => {
    console.log("Delete user id:", id);
    const response = await axios.delete(
       `${API_BASE_URL}/users/destroy/${id}`
    )
     
    return response.data
}




