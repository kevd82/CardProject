import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const ResetPassword = (props)=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [securityQuestionOne, setSecurityQuestionOne] = useState("");
    const [securityQuestionTwo, setSecurityQuestionTwo] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setUsername(res.data.username);
            setEmail(res.data.email);
            setPassword(res.data.password);
            setSecurityQuestionOne(res.data.securityQuestionOne);
            setSecurityQuestionTwo(res.data.securityQuestionTwo);
        })
        .catch((err)=>console.log(err))
        }, [id])


    const submitHandler=((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/user/${id}`,
        {
            username,
            email,
            securityQuestionOne,
            securityQuestionTwo,
            password,
            confirmPassword,

        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setErrors("");
            navigate("/");
        })
        .catch((err)=>{
            console.log("err.response", err.response);
            console.log("err.response.data", err.response.data);
            console.log("err.response.data.errors", err.response.data.errors);
            setErrors(err.response.data.errors);
        });

    });

    return (
        <div>
            <h1>Reset Password</h1>

                <div className="ResetContainer" >
                <form className= "ResetForm" onSubmit= {submitHandler}>
                    <div>
                        <label>Enter new password:</label>
                        <br/>
                        <input
                            autoFocus
                            style={{textAlign: "center", width: "200px", height: "20px"}}
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <br/>

                        <label>Confirm new password:</label>
                        <br/>
                        <input
                            style={{textAlign: "center", width: "200px", height: "20px"}}
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />


                    </div>

                    <div> 
                        <button className="ResetButton" disabled={(password !== confirmPassword)}>Submit to reset password.</button>
                    
                    </div>


                </form>
                </div>

        </div>
    )





}
export default ResetPassword;