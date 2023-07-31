import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const Forgot = (props)=>{
    const [emailValue, setEmailValue] = useState("");

    const [securityQuestionOneValue, setSecurityQuestionOneValue] = useState("");

    const [securityQuestionTwoValue, setSecurityQuestionTwoValue] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();



    const handleSubmitForgotForm = ((e) => {
        
        e.preventDefault();
        axios.get(`http://localhost:8000/api/user/${emailValue}`)
        .then((res)=>{
            console.log(res.data)
            // ternary to check for email, and both security questions before navigate
            navigate("/resetPassword/:id");
        })
        .catch((err)=>{
            console.log(err);

        })

        
        
    }, []);




return (
    <div>
        <h1>Forgot Password?</h1>
            <p style={{color: "red", fontWeight: "722"}} className="error-text">{errorMessage ? errorMessage : ""}</p>
            <div classname="ForgotContainer"  >
            <form className="ForgotForm" onSubmit={handleSubmitForgotForm}>
                <div>
                    <label>Please enter the email associated with your account.</label>
                    <br/>
                    <input
                        autoFocus
                        style={{textAlign: "center", width: "200px", height: "20px"}}
                        placeholder = "Email"
                        type="text"
                        name="emailValue"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
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
                    <button className="ForgotButton" disabled={(!emailValue||!securityQuestionOneValue||!securityQuestionTwoValue)}>Submit to reset password.</button>
                    
                </div>
            </form>
            
            </div>
    
    </div>





)
}
export default Forgot;