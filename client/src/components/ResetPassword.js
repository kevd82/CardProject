import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const ResetPassword = (props)=>{
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPassword(res.data.password);
        })
        .catch((err)=>console.log(err))
    }, [id])


const submitResetHandler=((e)=>{
    e.preventDefault();

    navigate("/");
})





return (
    <div>
        <h1>{username}</h1>
    </div>
)
}
export default ResetPassword;