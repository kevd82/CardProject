// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import FileBase64 from "react-file-base64";
import Abilities from "../abilities.json";


const UpdateCard = (props)=>{
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [prowess, setProwess] = useState("");
    const [wits, setWits] = useState("");
    const [vitality, setVitality] = useState("");
    const [abilityOne, setAbilityOne] = useState("");
    const [abilityTwo, setAbilityTwo] = useState("");
    const [abilityThree, setAbilityThree] = useState("");
    const [abilityFour, setAbilityFour] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/card/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setName(res.data.name);
            setImage(res.data.image);
            setProwess(res.data.prowess);
            setWits(res.data.wits);
            setVitality(res.data.vitality);
            setAbilityOne(res.data.abilityOne);
            setAbilityTwo(res.data.abilityTwo);
            setAbilityThree(res.data.abilityThree);
            setAbilityFour(res.data.abilityFour);
        })
        .catch((err)=>console.log(err))
    }, [id])

    
    const submitHandler=((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/card/${id}`,
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
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setErrors("");
            navigate(`/displayOne/${id}`);
        })
        .catch((err)=>{
            console.log("err.response:", err.response);
            console.log("err.response.data", err.response.data);
            console.log("err.response.data.errors", err.response.data.errors);
            setErrors(err.response.data.errors);
    
    });
    
    });






return (
    <div>
        <h1>Burning Sands Character Cards: Update</h1>

        <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", fontWeight: "622", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}> <Link style={{color: "black"}} to = {"/DisplayAll"}>Home</Link></button>
        <br/>
        <br/>
    
        
        <div style={{ display: "flex", justifyContent: "center",  border: "1px solid black", marginLeft:"auto", marginRight:"auto", width:"600px", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", fontWeight: "622", paddingBottom: "12px", borderRadius: "25px"}}>
        <form onSubmit={submitHandler} style={{marginLeft:"auto", marginRight:"auto", textAlign: "left", marginLeft:"200px", marginRight:"150px", height: "100%", width:"350px"}}>
        <br/>
        <div>
                <label>Name (20 character limit)  </label>
                <p><input maxLength="20" style={{width: "200px", height: "20px"}} value={name} onChange={(e)=> setName(e.target.value)} type="text"/></p>
                    
                    {
                        errors.name?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.name.message}</p>
                        :null
                    }
                        
            </div>

            <div>
            <label>Image (.JPG or .PNG files):  </label>
                
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
                <label>Prowess  </label>
                <p><input maxLength="2" style={{width: "200px", height: "20px"}} value={prowess} onChange={(e)=> setProwess(e.target.value)} type="text"/></p>
                    
                    {
                        errors.prowess?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.prowess.message}</p>
                        :null
                    }
                        
            </div>

            <div>
                <label>Wits   </label>
                <p><input maxLength="2" style={{width: "200px", height: "20px"}} value={wits} onChange={(e)=> setWits(e.target.value)} type="text"/></p>
                    
                    {
                        errors.wits?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.wits.message}</p>
                        :null
                    }
                        
            </div>

            <div>
                <label>Vitality   </label>
                <p><input maxLength="2" style={{width: "200px", height: "20px"}} value={vitality} onChange={(e)=> setVitality(e.target.value)} type="text"/></p>
                    
                    {
                        errors.vitality?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.vitality.message}</p>
                        :null
                    }
                        
            </div>

            <div>
                <label>Ability One   </label>
                <select style={{width: "205px", height: "25px"}} value={abilityOne} onChange={(e)=> setAbilityOne(e.target.value)} type="text">
                    <option value="" disabled selected hidden>{abilityOne}</option>
                    {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}} title = {result.description}>{result.name}</option>))
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
                <label>Ability Two   </label>
                <select style={{width: "205px", height: "25px"}} value={abilityTwo} onChange={(e)=> setAbilityTwo(e.target.value)} type="text">
                    <option value="" disabled selected hidden>{abilityTwo}</option>
                    {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}}  title = {result.description}>{result.name}</option>))
                    }
                </select>
                <p style={{fontSize: 12, fontWeight: "622",}}>Enter custom ability to override select ability:</p>
                <input style={{width: "200px", height: "20px"}} value={abilityTwo} maxLength="23" onChange={(e)=> setAbilityTwo(e.target.value)} placeholder=" Enter Custom Ability " type="text" ></input>
                
                    {
                        errors.abilityTwo?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityTwo.message}</p>
                        :null
                    
                    }
    
                    
            </div>
            <br/>
            <div>
                <label>Ability Three   </label>
                <select style={{width: "205px", height: "25px"}} value={abilityThree} onChange={(e)=> setAbilityThree(e.target.value)} type="text">
                    <option value="" disabled selected hidden>{abilityThree}</option>
                    {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}} title = {result.description}>{result.name}</option>))
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
                <label>Ability Four   </label>
                <select style={{width: "205px", height: "25px"}} value={abilityFour} onChange={(e)=> setAbilityFour(e.target.value)} type="text">
                    <option value="" disabled selected hidden>{abilityFour}</option>
                    {
                        Abilities.AbilitiesInfo.map((result)=>(<option style={{fontWeight: "622"}} title = {result.description}>{result.name}</option>))
                    }
                </select>
                <p style={{fontSize: 12, fontWeight: "622",}}>Enter custom ability to override select ability:</p>
                <input style={{width: "200px", height: "20px"}} value={abilityFour} maxLength="23" onChange={(e)=> setAbilityFour(e.target.value)} placeholder=" Enter Custom Ability " type="text" ></input>
                
                    {
                        errors.abilityFour?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityFour.message}</p>
                        :null
                    
                    }
    
                    
            </div>
            <br/>
            <button style = {{backgroundColor: "red", fontSize: "16px", fontWeight: "622", marginLeft: "5px", marginRight: "5px", borderRadius: "12px"}}>Update Character Card!</button>






        </form>
        </div>
    




    </div>




)


}
export default UpdateCard;