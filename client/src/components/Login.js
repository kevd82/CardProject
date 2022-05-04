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
            <p style={{color: "red", fontWeight: "722"}} className="error-text">{errorMessage ? errorMessage : ""}</p>
            <div style={{textAlign:"center", marginLeft:"auto", marginRight:"auto", width:"500px"}} >
            <form style={{marginLeft:"auto", marginRight:"auto", width: "100%", fontWeight: "622"}} onSubmit={login}>
                <div>
                    <label>Email</label>
                    <br/>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <br/>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div> <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", fontWeight: "622", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}>Log In!</button>
                </div>
            </form>
            </div>
    




    </div>




)


}
export default Login;