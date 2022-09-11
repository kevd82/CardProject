// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from "react";
import Login from "../components/Login";
import Reg from "../components/Reg";
import ImageRS from "./ImageRS.jpg";
import ImageDW from "./ImageDW.jpg"

const LoginReg = (props) =>{






    return (
        
        <div>
            <div style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", height: "300px", outline:"1px solid black", margin: "2px"}}>

            <div style={{display: "inline-block", position: "absolute", right: "50px", width: "400px",padding: "15px 5px 5px 5px"}}><img style={{height: "100%", width: "100%"}} src={ImageRS}/>
            </div>
            
                <div style={{display: "inline-block", padding: "55px 0px 5px 0px" }}><h1>Burning Sands Character Cards</h1>
                <br/>
            
           

                <h3>Create and update cards for heroes and foes to use in your Burning Sands games!</h3>
                </div>
            <div style={{display: "inline-block", position: "absolute", left: "50px", width: "400px", padding: "15px 5px 5px 5px"}}><img style={{height: "100%", width: "100%"}} src={ImageDW}/></div>
            </div>
        
            
            
            <div style={{display: "inline"}}>
            <Login />
            <Reg />
            </div>
            
        </div>



    )
}
export default LoginReg;