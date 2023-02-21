import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const Forgot = (props)=>{
    const [email, setEmail] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    


    const handleSubmit = (e) => {
        e.preventDefault();
        
    };




return (
    <div>
        <h1>Forgot Password?</h1>
            <p style={{color: "red", fontWeight: "722"}} className="error-text">{errorMessage ? errorMessage : ""}</p>
            <div style={{textAlign:"center", marginLeft:"auto", marginRight:"auto", width:"500px"}} >
            <form style={{marginLeft:"auto", marginRight:"auto", width: "100%", fontWeight: "622"}} onSubmit={handleSubmit}>
                <div>
                    <label>Please enter the email associated with your account.</label>
                    <br/>
                    <br/>
                    <input
                        autoFocus
                        style={{textAlign: "center", width: "200px", height: "20px"}}
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                    />
                </div>
                
            
                <div> 
                    <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", fontWeight: "622", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}>Submit to receive reset link</button>
                    
                </div>
            </form>
            </div>
    




    </div>




)


}
export default Forgot;