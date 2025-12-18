import {
    Container, Row, Col, CardBody, Form, Label, Input, InputGroup, Button , Card
} from "reactstrap"

import {Link} from "react-router-dom"


const UserForm = ({
    user , 
    onChange, 
    onSubmit, 
    title, 
    submitText
}) => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={10} lg={8}>
                    <Card>
                        <CardBody>
                            <h2 className="mb-4">{title}</h2>
                            <Form onSubmit={onSubmit}>
                                <Label>UserName</Label>
                                <Input 
                                    className="mb-3"
                                    name="username"
                                    value={user.username}
                                    onChange={onChange}
                                />

                                <Label>Email</Label>
                                <Input 
                                    className="mb-3"
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={onChange}

                                />

                                <Label>Phone Number</Label>
                                <Input 
                                    className="mb-3"
                                    name="phone_number"
                                    value={user.phone_number}
                                    onChange={onChange}
                               />

                               <Label>Pincode</Label>
                               <Input  className="mb-3" name="pincode" value={user.pincode} 
                                    onChange={onChange}
                               />

                                <Label>Address</Label>
                               <Input  className="mb-3" name="address" value={user.address} 
                                    onChange={onChange}
                               />

                               <Label>City</Label>
                               <Input  className="mb-3" name="city" value={user.city} 
                                    onChange={onChange}
                               />

                               <Label>State</Label>
                                <Input 
                                    className="mb-3"
                                    name="state"
                                    value={user.state}
                                    onChange={onChange}
                                />

                                <Label>Country</Label>
                                <Input
                                    className="mb-3"
                                    name="country"
                                    value={user.country}
                                    onChange = {onChange}
                                />
                                <Button color="info" type="submit">
                                     {submitText}
                                </Button>

                                <Link to="/" className="btn btn-secondary ms-2"> Back</Link>

                                
                            </Form>

                        </CardBody>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}

export default UserForm; 