import React, {useState, useEffect,} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const Reg = (props)=>{
    const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate;


    const register = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/user/register",{
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        
                withCredentials: true,
            })
            .then ((res)=>{
                console.log(res.data);
                setUserName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setConfirmReg("Thanks for registering; you may now login!");
                setErrors({});
                navigate("/");
            
        })
            .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        });
        
    };



    return (
        <div>
            <h1>Register</h1>
            {confirmReg ? <h4 style={{ color: "blue", fontWeight: "722" }}>{confirmReg}</h4> : null}
            <br/>
            <h4>Username can be no longer than 30 characters.</h4>
            <div style={{textAlign:"center", marginLeft:"auto", marginRight:"auto", width:"500px"}}></div>
            <form style={{marginLeft:"auto", marginRight:"auto", width: "100%", fontWeight: "622"}} onSubmit={register}>
                <div>
                    <label>Username</label>
                    <br/>
                    <input
                        minLength="2"
                        maxLength="30"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                     {
                        errors.username ?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.username.message}</p>
                        :null
                    }
            
                </div>
                <div>
                    <label>Email</label>
                    <br/>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    {
                        errors.email ?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.email.message}</p>
                        :null
                    }
                </div>
                <div>
                    <label>Password</label>
                    <br/>                    
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    {
                        errors.password ?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.password.message}</p>
                        :null
                    }
                </div>
                <div>
                    <label>Confirm Password</label>
                    <br/>                    
                    <input
                
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                    />
                    {
                        errors.confirmPassword ?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.confirmPassword.message}</p>
                        :null
                    }
                </div>
                <div>
                    <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", fontWeight: "622", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}>Register!</button>
                </div>
            </form>
        
        






        </div>
    )
}
export default Reg;