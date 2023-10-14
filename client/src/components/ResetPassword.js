import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const ResetPassword = (props)=>{
    const [passwprd, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const {confirmNewPassword, setNewConfirmPassword} = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const [errors, setErrors]= useState("")

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPassword(res.data.password)
        })
        .catch((err)=>{
            console.log(err);

        }, [id]);


        const submitHandler=((e)=>{
            e.preventDefault();
            newPassword===confirmNewPassword?
            axios.put(`http://localhost:8000/api/user/${id}`,
            {
                password: newPassword
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
            :navigate("/resetPassword/:id")





        })



})





return (
    <div>
        <h1>Password Reset</h1>
    </div>
)
}
export default ResetPassword;