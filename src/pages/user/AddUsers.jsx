import React, {useState} from "react";
import {Button, Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Container, InputGroup, Row} from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
//service user api ki create user api call kar rahe he 
import {createUser} from "../../services/userApi"


function AddUsers() {
    const navigate = useNavigate(); 
        console.log("sdfsdfsdjfhsdkf")
    const [user, setUser] = useState({
        username: " ", 
        email: " ", 
        address: " ", 
        phone_number: " ", 
        city: " ", 
        pincode: " ", 
        state: " ", 
        country: " "
    }); 

    // handle input changes 
    const onChange = (e) => {
        const {name, value} = e.target; 

        setUser(prev => ({...prev, [name]: value}))
    }

    // submit from 

    const AddNewUser = async (e) => {
        e.preventDefault(); 

        try{
          console.log(user)
            await createUser(user); // Api call from api file service/user.api
            navigate("/");   //redirect to dashboar 
        } catch (error) {
            console.error(error.response?.data)
        }
    }; 


    return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md="10" lg="8">
          <CardBody className="p-4">
            <Form onSubmit={AddNewUser}>
              <h2>Add New User</h2>
              
              <Label>Username</Label>
              <InputGroup className="mb-3">
                <Input name="username" placeholder="Username" value={user.username} onChange={onChange} />
              </InputGroup>

              <Label>Email</Label>
              <InputGroup className="mb-3">
                <Input name="email" placeholder="Email" value={user.email} onChange={onChange} />
              </InputGroup>

              <Label>Address</Label>
              <InputGroup className="mb-3">
                <Input name="address" placeholder="Address" value={user.address} onChange={onChange} />
              </InputGroup>

              <Label>Phone Number</Label>
              <InputGroup className="mb-3">
                <Input name="phone_number" placeholder="Phone Number" value={user.phone_number} onChange={onChange} />
              </InputGroup>

              <Label>City</Label>
              <InputGroup className="mb-3">
                <Input name="city" placeholder="City" value={user.city} onChange={onChange} />
              </InputGroup>

              <Label>Pincode</Label>
              <InputGroup className="mb-3">
                <Input name="pincode" placeholder="Pincode" value={user.pincode} onChange={onChange} />
              </InputGroup>

              <Label>State</Label>
              <InputGroup className="mb-3">
                <Input name="state" placeholder="State" value={user.state} onChange={onChange} />
              </InputGroup>

              <Label>Country</Label>
              <InputGroup className="mb-3">
                <Input name="country" placeholder="Country" value={user.country} onChange={onChange} />
              </InputGroup>

              <Button type="submit" color="info">
                Save
              </Button>

              <Link to="/" className="btn btn-secondary ms-2">
                Back
              </Link>
            </Form>
          </CardBody>
        </Col>
      </Row>
    </Container>
  );
}

export default AddUsers;

