import React, { useState } from "react";
import axios from "axios";
import {Button, Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Container, InputGroup, Row} from "reactstrap";
import { useNavigate } from "react-router-dom";


function AddUser(props) {
  // Add attributes user in user state
  const navigate = useNavigate();
  const[user, setUser] = useState({
    username: "",
    email: "",
    address: "",
    phone_number: "",
    city: "",
    pincode: "",
    state: "",
    country: ""
  });
  const apiUrl =  "http://localhost:3000/create_user";
    
  
  const AddNewUser = async(e) =>{
    e.preventDefault();
    // add attributes you use in attributes changes according 
    try {
       
     await axios.post(apiUrl, user);
    //  navigate ka use render ke liye hota hai like user create hone ke bad vo is url pe chala jaye
      navigate("/");
      
    } catch (error) {
      console.log(error.response?.data)
    }
  };




  const onChange = (e) =>{
    const {name, value} = e.target;
    setUser( prev => ({...prev, [name]: value }));
  }

  
  return (
    <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="12" lg="10" xl="8">
          <CardBody className="p-4">
            <Form onSubmit={AddNewUser}>
              <h1>Add new User</h1>
            {/* input username */}
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="username"          
                id="username"
                placeholder="Username"
                value={user.username}   
                onChange={onChange}
                />
              </InputGroup>
              {/* input email */}
              
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="email"            
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={onChange}
                />
              </InputGroup>
              
              
              {/* input address */}               

              <InputGroup className="mb-3">
                <Input
                type="text"
                name="address"            
                id="address"
                placeholder="address"
                value={user.address}
                onChange={onChange}
                />
              </InputGroup>

                {/*  phone_number */}
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="phone_number"            
                id="phone_number"
                placeholder="phone_number"
                value={user.phone_number}
                onChange={onChange}
                />
              </InputGroup>

                 {/* city */}
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="city"            
                id="city"
                placeholder="City"
                value={user.city}
                onChange={onChange}
                />
              </InputGroup>

                   {/* pincode */}
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="pincode"            
                id="pincode"
                placeholder="pincode"
                value={user.pincode}
                onChange={onChange}
                />
              </InputGroup>

                 {/* state */}
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="state"            
                id="state"
                placeholder="state"
                value={user.state}
                onChange={onChange}
                />
              </InputGroup>

                   {/* country */}
              <InputGroup className="mb-3">
                <Input
                type="text"
                name="country"            
                id="country"
                placeholder="country"
                value={user.country}
                onChange={onChange}
                />
              </InputGroup>
                
              <Button type="submit" className="btn btn-info">
              Save
              </Button>
            
              <Button type="button" className="btn btn-secondary ms-2">
              Cancel
              </Button>
            </Form>        
          </CardBody>
        
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default AddUser
