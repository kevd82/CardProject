import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";



const Login = (props)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    
        


    const login = (e) => {
        e.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/user/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res, "res");
                console.log(res.data, "res data!");
                setErrorMessage("");
                navigate("/DisplayAll");
                
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };




return (
    <div>
        <h1>Login</h1>
            <p className="loginErrorText"
            >{errorMessage ? 
            errorMessage 
            :null }
            </p>
            
            <div className="loginFormContainer"/>
            <form className= "loginForm"
    
            onSubmit={login}>
                <div>
                    <label>Email</label>
                    <br/>
                    <input
                        style={{textAlign: "center"}}
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                    />
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input
                        style={{textAlign: "center"}}
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div> 
                    { <button className="loginButton">Log In!</button>}
                    <p>
                        <Link to={"/forgot"}>Forgot password?</Link>
                    </p>
                </div>
            </form>
            </div>
    




    




)


}
export default Login;