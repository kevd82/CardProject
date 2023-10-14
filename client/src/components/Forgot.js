import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const Forgot = (props)=>{
    const [email, setEmail] = useState("");

    const [securityQuestionOneValue, setSecurityQuestionOneValue] = useState("");

    const [securityQuestionTwoValue, setSecurityQuestionTwoValue] = useState("");

    const [user, setUser] = useState({});

    const [id, setId] = useState("");




    

    const navigate = useNavigate();




    const handleSubmitForgotForm = ((e) => {
        
        e.preventDefault();
        axios.get(`http://localhost:8000/api/user/${email}`)
        .then((res)=>{
            console.log(res.data);
            setUser(res.data);
            setId(res.data._id);
            
            {
                user.securityQuestionOne === securityQuestionOneValue && user.securityQuestionTwo===securityQuestionTwoValue?
                navigate(`/resetPassword/:${id}`)
                :navigate("/forgot");
            }
            


            

            
        })
        .catch((err)=>{
            console.log(err);

        }, );

        
        
    });




return (
    <div>
        <h1>Forgot Password?</h1>
        
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
export default Forgot;