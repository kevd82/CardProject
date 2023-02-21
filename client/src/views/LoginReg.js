// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from "react";
import Login from "../components/Login";
import Reg from "../components/Reg";
import ImageRS from "./ImageRS.jpg";
import ImageDW from "./ImageDW.jpg"

const LoginReg = (props) =>{






    return (
        
        <div>
            <div className="LogRegHeaderContainer">

            <div className="LogRegHeaderImageLeft"><img style={{height: "100%", width: "100%"}} src={ImageRS}/>
            </div>
            
            <div className="LogRegHeader">
                <h1>Burning Sands Character Card Creator</h1>
                <br/>
                <h3>Create and update cards for heroes and foes to use in your Burning Sands games!</h3>
            </div>
            <div className="LogRegHeaderImageRight" ><img style={{height: "100%", width: "100%"}} src={ImageDW}/></div>
            </div>
        
            
            
            <div>
            <Login />
            <Reg />
            </div>
            
        </div>



    )
}
export default LoginReg;