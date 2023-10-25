import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const ResetPassword = (props)=>{
    const {password, setPassword} = useState("");
    const {confirmPassword, setConfirmPassword} = useState("");
    const {email, setEmail} = useState("");
    const {username, setUsername} = useState("");
    const {securityQuestionOne, setSecurityQuestionOne} = useState("");
    const {securityQuestionTwo, setSecurityQuestionTwo} = useState("");
    

    const navigate = useNavigate();
    const {id} = useParams();
    const [errors, setErrors]= useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPassword(res.data.password);
            setUsername(res.data.username);
            setEmail(res.data.email);
            setSecurityQuestionOne(res.data.securityQuestionOne);
            setSecurityQuestionTwo(res.data.securityQuestionTwo);

        })
        .catch((err)=>{
            console.log(err);

        }, [id])


        const handleResetForm = ((e)=>{

            e.preventDefault();
            
                {password===confirmPassword?
            axios.put(`http://localhost:8000/api/user/${id}`,
            {
                password,
                username,
                email,
                securityQuestionOne,
                securityQuestionTwo,

            })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setErrors("");
                navigate("/");

            })
            .catch((err)=>{
                console.log("err.response:", err.response);
                console.log("err.response.data", err.response.data);
                console.log("err.response.data.errors", err.response.data.errors);
                setErrors(err.response.data.errors);
    
            })
            :navigate("/resetPassword/:id")}
        });
    });




        return (
            <div>
                <h1>Forgot Password?</h1>
                
                    <div className="ForgotContainer"  >
                    <form className="ForgotForm" onSubmit={handleSubmitForgotForm}>
                        <div>
                            <label>Please enter the email associated with your account.</label>
                            <br/>
                            <input
                                autoFocus
                                style={{textAlign: "center", width: "200px", height: "20px"}}
                                placeholder = "Email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br/>
                            <br/>
        
                            <label>Please enter your mother's maiden name.</label>
                            <br/>
                            <input
                            style={{textAlign: "center", width: "200px", height: "20px"}}
                            placeholder = "Security Question One"
                            type="text"
                            name="securityQuestionOneValue"
                            value={securityQuestionOneValue}
                            onChange={(e) => setSecurityQuestionOneValue(e.target.value)}
                            />
                            <br/>
                            <br/>
        
                            <label>Please enter the make and model of your first car. </label>
                            <br/>
                            <input
                                style={{textAlign: "center", width: "200px", height: "20px"}}
                                placeholder = "Security Question Two"
                                type="text"
                                name="securityQuestionTwoValue"
                                value={securityQuestionTwoValue}
                                onChange={(e) => setSecurityQuestionTwoValue(e.target.value)}
                            />
                        </div>
                        
                        <div> 
                            <button className="ForgotButton" disabled={(!securityQuestionOneValue||!securityQuestionTwoValue)}>Submit to reset password.</button>
                            
                        </div>
                    </form>
                    
                    </div>
            
            </div>
        
        
        
        
        
        )
        }
        export default ResetPassword;