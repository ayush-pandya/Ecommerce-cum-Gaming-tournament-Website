import React, { useState } from 'react'
import { NavLink} from "react-router-dom";

import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", password: "", mobileno: "", state: "", city: "", street: ""
    });

    var name, value;
    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, mobileno, state, city, street } = user;
        const address = [{state,city,street}]

        const resp = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                name, email, password, mobileno, address
            }),
        });

        const data = await resp.json();

        console.log(data.status);
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("registeration successful");
            navigate('/Login')
        }

    }

    return (
        <div className="signupform">
            <form method="POST">
            <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" name="name"
                        value={user.name}
                        onChange={handleInputs}
                        placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" name="email"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password"
                        value={user.password}
                        onChange={handleInputs}
                        placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <label for="mobileno">Mobile Number</label>
                    <input type="text" className="form-control" name="mobileno"
                        value={user.mobileno}
                        onChange={handleInputs}
                        placeholder="Enter mobile number" />
                </div>
                <div className="form-group">
                    <label for="state">State</label>
                    <input type="text" className="form-control" name="state"
                        value={user.state}
                        onChange={handleInputs}
                        placeholder="Enter state" />
                </div>
                <div className="form-group">
                    <label for="city">City</label>
                    <input type="text" className="form-control" name="city"
                        value={user.city}
                        onChange={handleInputs}
                        placeholder="Enter city" />
                </div>
                <div className="form-group">
                    <label for="street">Street</label>
                    <input type="text" className="form-control" name="street"
                        value={user.street}
                        onChange={handleInputs}
                        placeholder="Enter street" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary" name="signup-btn" onClick={PostData}>Submit</button>
                
            </form>
            <NavLink to="/Signin">Sign-In</NavLink><br/>
            <NavLink to="/Product">Product</NavLink>
        </div>
    )
}

export default Signup
