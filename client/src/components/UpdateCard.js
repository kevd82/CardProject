// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import FileBase64 from "react-file-base64";


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
    
        <h5>Abilities are optional; please refer to rulebooks.</h5>
        
        <div style={{border: "1px solid black", marginLeft:"auto", marginRight:"auto", width:"500px", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", fontWeight: "622", paddingBottom: "12px", borderRadius: "25px"}}>
        <form onSubmit={submitHandler} style={{textAlign: "left", marginLeft:"150px", marginRight:"150px", width:"200px"}}>
        <br/>
        <div>
                <label>Name (18 character limit):  </label>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.name?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.name.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
            <label>Image (.JPG or .PNG files):  </label>
                {/* <input value={image} onChange={(e)=> setImage(e.target.value)} type="data"/> */}
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
                <label>Prowess (numeric value):  </label>
                <input maxLength="2" value={prowess} onChange={(e)=> setProwess(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.prowess?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.prowess.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Wits (numeric value):  </label>
                <input maxLength="2" value={wits} onChange={(e)=> setWits(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.wits?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.wits.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Vitality (numeric value):  </label>
                <input maxLength="2" value={vitality} onChange={(e)=> setVitality(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.vitality?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.vitality.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability One:  </label>
                <input value={abilityOne} onChange={(e)=> setAbilityOne(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityOne?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityOne.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability Two:  </label>
                <input value={abilityTwo} onChange={(e)=> setAbilityTwo(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityTwo?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityTwo.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability Three:  </label>
                <input value={abilityThree} onChange={(e)=> setAbilityThree(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityThree?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityThree.message}</p>
                        :null
                    }
                        <br/>
            </div>

            <div>
                <label>Ability Four:  </label>
                <input value={abilityFour} onChange={(e)=> setAbilityFour(e.target.value)} type="text"/>
                    <br/>
                    {
                        errors.abilityFour?
                        <p style={{color: "red", fontWeight: "722"}}>{errors.abilityFour.message}</p>
                        :null
                    }
                        <br/>
            </div>
            <button style = {{backgroundColor: "red", fontSize: "16px", fontWeight: "622", marginLeft: "5px", marginRight: "5px", borderRadius: "12px"}}>Update Character Card!</button>






        </form>
        </div>
    




    </div>




)


}
export default UpdateCard;