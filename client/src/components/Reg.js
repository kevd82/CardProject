import React, {useState, useEffect,} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const Reg = (props)=>{
    const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
    const [securityQuestionOne, setSecurityQuestionOne] = useState("");
    const [securityQuestionTwo, setSecurityQuestionTwo] = useState("");

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
            securityQuestionOne: securityQuestionOne,
            securityQuestionTwo: securityQuestionTwo,
        
                withCredentials: true,
            })
            .then ((res)=>{
                console.log(res.data);
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
                setSecurityQuestionOne("");
                setSecurityQuestionTwo("");
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
            
        
            <div className="RegContainer" ></div>
            <form className="RegForm"  onSubmit={register}>
                <div>
                    <label>Username</label>
                    <br/>
                    <input style={{textAlign: "center"}}
                        placeholder="* 30 characters or less *"
                        minLength="2"
                        maxLength="30"
                        type="text"
                        name="username"
                    
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    {
                        errors.username ?
                        <p style={{color: "red", fontWeight: "722"}}>{username} is already in use; please try again.</p>
                        :null
                    }
            
                </div>
                <div>
                    <label>Email</label>
                    <br/>
                    <input style={{textAlign: "center"}}
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
                    <input style={{textAlign: "center"}}
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
                    <input style={{textAlign: "center"}}
                
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
                    <label>Please enter your mother's maiden name.</label>
                    <br/>                    
                    <input style={{textAlign: "center"}}
                        placeholder = "Security Question One"
                        type="text"
                        name="securityQuestionOne"
                        value={securityQuestionOne}
                        
                        onChange={(e)=> setSecurityQuestionOne(e.target.value)}
                    />
                    {
                        errors.securityQuestionOne?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.securityQuestionOne.message}</p>
                        :null
                    }
                </div>
                <div>
                    <label>Please enter the make and model of your first car.</label>
                    <br/>                    
                    <input style={{textAlign: "center"}}
                        placeholder = "Security Question Two"
                        type="text"
                        name="securityQuestionTwo"
                        value={securityQuestionTwo}
                        
                        onChange={(e)=> setSecurityQuestionTwo(e.target.value)}
                    />
                    {
                        errors.securityQuestionTwo ?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.securityQuestionTwo.message}</p>
                        :null
                    }
                </div>
                
                <div>
                    <button className="RegButton">Register!</button>
                </div>
            </form>
        
        






        </div>
    )
}
export default Reg;