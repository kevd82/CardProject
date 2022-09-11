import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const DisplayAll = (props)=>{
    const [cardList, setCardList] = useState([]);
    const [user, setUser] = useState({});

    const navigate = useNavigate();



useEffect(()=>{
        axios.get("http://localhost:8000/api/card")
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setCardList(res.data);
        })
        .catch((err)=>console.log(err))
    }, []);

useEffect(() => {
        axios.get("http://localhost:8000/api/user",
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    

    const deleteCard = (idFromBelow)=>{
        axios.delete(`http://localhost:8000/api/card/${idFromBelow}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setCardList(cardList.filter(card => card._id !== idFromBelow))
            })
            .catch((err)=>console.log(err))
    }

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





         
    




    return (
    <div>
        <h1>Burning Sands Character Cards</h1>
        <h3>Please click "Show Card" to  view and download printable card.</h3>
            <br/>
            <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", fontWeight: "622", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}}><Link style={{color: "black"}} to = {"/createCard"}>Add new card</Link></button> <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", padding: "15px 32px", backgroundSize: "100%", margin: "22px", fontWeight: "622"}} onClick= {logout}>Logout</button> 
            <br/>

            <div style={{ padding: "30px"}}>

            
            <h3> Created by {user.username}</h3>
            <table style={{width: "100%", padding: "30px", textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                <thead>
                <tr>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Name</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Image</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Prowess</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Wits</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Vitality</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 1</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 2</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 3</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 4</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Creator</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Available Actions</th>
                </tr>
                </thead>
                
                <tbody>

                {
                cardList.map((card, index)=>(
            
                    user._id===card.createdBy._id ?(
                            <tr key={card._id} style={{outline: "1px solid black", width: "Auto", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", fontWeight: "822"}}>
                              
                
                            
                            
                            <td style={{outline:"1px solid black", wordWrap: "normal", padding: "5px"}}>{card.name}</td>
                        
                            
                            <td style={{outline:"1px solid black", padding: "5px"}}><img style={{width: "60px"}} src ={card.image}></img></td>
        
                            
                            <td style={{outline:"1px solid black", padding: "5px"}}>{card.prowess}</td>
                            
                            
                            <td style={{outline:"1px solid black", padding: "5px"}}>{card.wits}</td>
                            
                        
                            <td style={{outline:"1px solid black", padding: "5px"}}>{card.vitality}</td>
                            
                        
                            <td style={{outline:"1px solid black", wordWrap: "normal", padding: "5px"}}>{card.abilityOne}</td>
                            
                            
                            <td style={{outline:"1px solid black", wordWrap: "normal", padding: "5px"}}>{card.abilityTwo}</td>
                            
                            
                            <td style={{outline:"1px solid black", wordWrap: "normal", padding: "5px"}}>{card.abilityThree}</td>
                        
                            
                            <td style={{outline:"1px solid black", wordWrap: "normal", padding: "5px"}}>{card.abilityFour}</td>
                        
                            
                            <td style={{outline:"1px solid black", wordWrap: "normal", padding: "5px"}}>{card.createdBy.username}</td>
                    
                            
                            <td style={{outline:"1px solid black", padding: "5px"}}>
                                <button className="button" style = {{backgroundColor: "red", fontSize: "14px", fontWeight: "822", borderRadius: "12px"}}> <Link style={{color: "black"}} to={`/displayOne/${card._id}`}>Show <br/>Card</Link></button>
                                <button style = {{backgroundColor: "red", color: "red", fontSize: "14px", fontWeight: "822", marginLeft: "42px", marginRight: "42px", borderRadius: "12px"}}><Link style={{color: "black"}} to={`/update/${card._id}`}>Update <br/>Card </Link></button>
                                <button style = {{backgroundColor: "red", fontSize: "14px", fontWeight: "822", borderRadius: "12px"}} onClick={()=>deleteCard(card._id)}>Delete<br/>Card</button>
                            </td>
                        
                           
                    </tr>)
                    : null
                
                )
                    
                    
                    
                )}
                        
            
            
                </tbody>
                </table>
                 </div>
            
            <div style={{padding: "30px"}}>
            <h3> Created by others</h3>
            <table style={{width: "100%", padding: "30px", textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                <thead>
                    <tr>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Name</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Image</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Prowess</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Wits</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Vitality</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 1</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 2</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 3</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Ability 4</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Creator</th>
                    <th style={{outline: "1px solid black", backgroundColor: "lightgray", padding: "5px"}}>Available Actions</th>
                    </tr>
                </thead>
                
                <tbody>

                {
                cardList.map((card, index)=>(
                    user._id!==card.createdBy._id ?(
                    <tr key={card._id} style={{outline: "1px solid black", width: "Auto", background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", backgroundSize: "cover", fontWeight: "822"}}>
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.name}</td>
                
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}><img style={{width: "60px"}} src ={card.image}></img></td>
                    
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.prowess}</td>
                
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.wits}</td>
                
    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.vitality}</td>
                
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityOne}</td>
                    
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityTwo}</td>
            
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityThree}</td>
                
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>{card.abilityFour}</td>
                    
                    
                        <td style={{outline:"1px solid black", padding: "5px", wordWrap: "normal"}}>{card.createdBy.username}</td>
                
                    
                        <td style={{outline:"1px solid black", padding: "5px"}}>
                        
                            
                        
                        <button style = {{backgroundColor: "red", fontSize: "14px", fontWeight: "822", marginLeft: "5px", marginRight: "5px", borderRadius: "12px"}}><Link style={{color: "black"}} to={`/displayOne/${card._id}`}>Show <br/>Card</Link></button>
            
                        
                        </td>
                
                

                </tr>)
                : null
            ))}
                        
            
            
                </tbody>
                </table>
                 </div>

                 
                
                 
    
        
                



    </div>
                




)

                }
            



export default DisplayAll;