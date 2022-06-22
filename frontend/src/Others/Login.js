import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signin() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "", password: ""
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

        const { email, password } = user;

        const resp = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email, password
            }),
        });

        const data = await resp.json();
        alert(data.status);
        
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        } else {
            window.alert("Registration Successful");
            console.log("registeration successful");
            navigate('/productPage')
        }

    }

  return (
        <div className="signinform">
            <form method="POST">
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

                <br />
                <button type="submit" className="btn btn-primary" name="signin-btn" onClick={PostData}>Submit</button>
                
            </form>

        </div>
    )
}

export default Signin
