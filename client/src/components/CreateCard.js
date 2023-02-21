
import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import FileBase64 from "react-file-base64";
import Abilities from "../abilities.json";


const CreateCard = (props)=>{
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [prowess, setProwess] = useState("");
    const [wits, setWits] = useState("");
    const [vitality, setVitality] = useState("");
    const [abilityOne, setAbilityOne] = useState("");
    const [abilityTwo,setAbilityTwo] = useState("");
    const [abilityThree, setAbilityThree] = useState("");
    const [abilityFour, setAbilityFour] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const logout = (e) => {
        axios
            .post(
                "http://localhost:8000/api/user/logout",
                {}, 
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };




const submitHandler=((e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/api/card",
    {
        name,
        image,
        prowess,
        wits,
        vitality,
        abilityOne,
        abilityTwo,
        abilityThree,
        abilityFour,
    },
    { withCredentials: true}
    )
    .then((res)=>{
        console.log(res);
        console.log(res.data);
        navigate("/displayAll");
    })
    .catch((err)=>{
        console.log(err);
        console.log("err.response:", err.response);
        console.log("err.response.data:", err.response.data);
        console.log("err.response.data.errors:", err.response.data.errors);
        setErrors(err.response.data.errors);
    });
});




return (
    <div>
        <div className="CreateCardHeader">
            <button className="HomeButton"> <Link style={{color: "black"}} to = {"/DisplayAll"}
            >Home</Link></button> 
            <h1 style = {{ marginLeft: "22px", marginRight: "22px"}}>Burning Sands Character Cards Creator</h1> 
            <button className="logoutButton" onClick= {logout}>Logout</button> 
        </div>

    
    
    
        <div className="CreateCardContainer">
            <form className="CreateCardForm" onSubmit={submitHandler}>
            <br/>
            
                <div>
                    <label>Name </label>
                    <p><input maxLength="20" style={{width: "200px", height: "20px"}} value={name} onChange={(e)=> setName(e.target.value)} placeholder=" Enter name; 20 character max " type="text" autoFocus/></p>
                    
                    {
                        errors.name?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.name.message}</p>
                        :null
                    }
                        
                </div>
            

            
                <div>
                    <label>Image (.JPG or .PNG files):</label><p></p>
                    <FileBase64
                    multiple={false}
                    onDone={({base64})=>setImage( base64)}/>
                    <br/>
                
                    
                    {
                        errors.image?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.image.message}</p>
                        :null
                    }
                <br/>
                </div>

            
                <div>
                    <label>Prowess</label>
                    <p><input style={{width: "200px", height: "20px"}} maxLength="2" value={prowess} onChange={(e)=> setProwess(e.target.value)} placeholder= " Enter numeric value " type="text"/></p>
                    
                    {
                        errors.prowess?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.prowess.message}</p>
                        :null
                    }
                        
                </div>

            
                <div>
                    <label>Wits </label>
                    <p><input style={{width: "200px", height: "20px"}} maxLength="2" value={wits} onChange={(e)=> setWits(e.target.value)} placeholder= " Enter numeric value " type="text"/></p>
                    
                    {
                        errors.wits?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.wits.message}</p>
                        :null
                    }
                        
                </div>

                <div>
                    <label>Vitality </label>
                    <p><input style={{width: "200px", height: "20px"}} maxLength="2" value={vitality} onChange={(e)=> setVitality(e.target.value)} placeholder= " Enter numeric value " type="text"/></p>
                    
                    {
                        errors.vitality?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.vitality.message}</p>
                        :null
                    }
                        
                </div>
            
            


                <div>
                    <label>Ability 1 </label>
                    <select style={{width: "205px", height: "25px"}}  value={abilityOne} onChange={(e)=> setAbilityOne(e.target.value)} type="text">
                        <option value="" disabled selected hidden> Select Ability </option>

            
                        {
                        Abilities.AbilitiesInfo.map((result)=> (<option title={result.description} style={{ fontWeight:"622"}}>{result.name}</option>))
                        }

                    </select>
                    <p style={{fontSize: 12, fontWeight: "622",}}>Enter custom ability to override select ability:</p>
                    <input style={{width: "200px", height: "20px"}} value={abilityOne} maxLength="23" onChange={(e)=> setAbilityOne(e.target.value)} placeholder=" Enter Custom Ability " type="text" ></input>
            
                
                    {
                        errors.abilityOne?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityOne.message}</p>
                        :null
                    
                    }
    
                    
                </div>
                <br/>
            

                <div>
                    <label>Ability 2  </label>
                    <select style={{width: "205px", height: "25px"}}  value={abilityTwo} onChange={(e)=> setAbilityTwo(e.target.value)} type="text">
                    <option value="" disabled selected hidden> Select Ability </option>
                    {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}} title = {result.description}>{result.name}</option>))
                    }
                </select>
                <p style={{fontSize: 12, fontWeight: "622",}}>Enter custom ability to override select ability:</p>
                <input style={{width: "200px", height: "20px"}} value={abilityTwo} maxLength="23" onChange={(e)=> setAbilityTwo(e.target.value)} placeholder="Enter Custom Ability " type="text" ></input>
                
                    {
                        errors.abilityTwo?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityTwo.message}</p>
                        :null
                    }
                    
                </div>
                <br/>
            

                <div>
                    <label>Ability 3   </label>
                    <select style={{width: "205px", height: "25px"}} value={abilityThree} onChange={(e)=> setAbilityThree(e.target.value)} type="text">
                    <option value="" disabled selected hidden> Select Ability </option>
                        {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}}  title = {result.description}>{result.name}</option>))
                        }
                    </select>
                    <p style={{fontSize: 12, fontWeight: "622",}}>Enter custom ability to override select ability:</p>
                    <input style={{width: "200px", height: "20px"}} value={abilityThree} maxLength="23" onChange={(e)=> setAbilityThree(e.target.value)} placeholder=" Enter Custom Ability " type="text" ></input>
                
                    {
                        errors.abilityThree?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityThree.message}</p>
                        :null
                    }
                    
                </div>
                <br/>
            

                <div>
                    <label>Ability 4  </label>
                    <select style={{width: "205px", height: "25px"}} value={abilityThree} onChange={(e)=> setAbilityThree(e.target.value)} type="text">
                    <option value="" disabled selected hidden> Select Ability </option>
                        {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}}  title = {result.description}>{result.name}</option>))
                        }
                    </select>
                    <p style={{fontSize: 12, fontWeight: "622",}}>Enter custom ability to override select ability:</p>
                    <input style={{width: "200px", height: "20px"}} value={abilityThree} maxLength="23" onChange={(e)=> setAbilityThree(e.target.value)} placeholder=" Enter Custom Ability " type="text" ></input>
                
                    
                    {
                        errors.abilityFour?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityFour.message}</p>
                        :null
                    }
                    
                </div>
                <br/>

                <div style={{display: "flex", justifyContent: "left"}}>
                    <button className="CreateFormButton" type = "submit" >Create Character Card!</button>
                </div>
            
    
        
            </form>
        </div>
        




    </div>




)


}
export default CreateCard;