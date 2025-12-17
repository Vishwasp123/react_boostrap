import React , {useEffect, useState}from 'react'
import {profileUser} from '../../services/userApi'
import { useParams, Link } from "react-router-dom";


function profile() {
	
	const {id} = useParams();
	
	const[user, setUser] = useState(null)
	
	
	useEffect(() => {
		profileUser(id)
		.then(data => {
			console.log("user data in components:", data)
			setUser(data)
		})
		.catch(err => console.error(err))
	}, [id])
	
	if(!user) {
		return <p className='text-center'> Loading user profile ......</p>
	}
	
	
	
	
	return(
		<>	
			<div className="container d-flex flex-column align-items-center mt-4">
			
				{/* Heading */}
				<h2 className="text-center mb-4">User Details</h2>
			
				{/* Card */}
				<div className="card shadow" style={{ width: "30rem" }}>
					<div className="card-body text-center">
			
						<h3 className="card-title mb-3">
							Username: {user.username}
						</h3>
				
						<p className="fs-5">
							<strong>ID:</strong> {id}
						</p>
				
						<p className="fs-5">
							<strong>Email:</strong> {user.email || "-"}
						</p>
				
						<p className="fs-5">
							<strong>Address:</strong> {user.address || "-"}
						</p>
				
						<p className="fs-5">
							<strong>City:</strong> {user.city || "-"}
						</p>
				
						<p className="fs-5">
							<strong>Pincode:</strong> {user.pincode || "-"}   
						</p>
					
						<p className="fs-5">
							<strong>State:</strong> {user.state || "-"}
						</p>
					
						<p className="fs-5">
							<strong>Country:</strong> {user.country || "-"}   
						</p>
						<Link className='card-link fs-5' to='/'>Back</Link> 

						
						 {/* add edit link in show page because id it already present  */}
						<Link className='card-link fs-5' to={`/users/update/${id}`}>Edit</Link>
					</div>
				</div>
			</div>
		</>
	) 
}

export default profile
