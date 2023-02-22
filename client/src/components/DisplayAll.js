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
        <div className="DisplayAllHeader">
            <button className="CreateCardLinkButton"><Link style={{color: "black"}} to = {"/createCard"}>Add new card</Link></button>
            <h1 style={{marginLeft: "22px", marginRight: "22px"}}>Burning Sands Character Cards</h1>
            <button className="logoutButton" onClick= {logout}>Logout</button></div>
        
            <br/>
            <h3>Please click "Show Card" to  view and download printable card.</h3>

            <div style={{ padding: "30px"}}>

            
            <h3> Created by {user.username}</h3>
            <table className="CreatedByTable">
                <thead>
                <tr>
                    <th className="DisplayTableHeader">Name</th>
                    <th className="DisplayTableHeader">Image</th>
                    <th className="DisplayTableHeader">Prowess</th>
                    <th className="DisplayTableHeader">Wits</th>
                    <th className="DisplayTableHeader">Vitality</th>
                    <th className="DisplayTableHeader">Ability 1</th>
                    <th className="DisplayTableHeader">Ability 2</th>
                    <th className="DisplayTableHeader">Ability 3</th>
                    <th className="DisplayTableHeader">Ability 4</th>
                    <th className="DisplayTableHeader">Creator</th>
                    <th className="DisplayTableHeader">Available Actions</th>
                </tr>
                </thead>
                
                <tbody>

                {
                cardList.map((card, index)=>(
            
                    user._id===card.createdBy._id ?(
                            <tr key={card._id} className="DisplayTableRow" >
                                <td className="DisplayTableTD">{card.name}</td>
                                <td className="DisplayTableTD"><img style={{width: "60px"}} src ={card.image}>
                                    </img></td>
                                <td className="DisplayTableTD">{card.prowess}</td>
                                <td className="DisplayTableTD">{card.wits}</td>
                                <td className="DisplayTableTD">{card.vitality}</td>
                                <td className="DisplayTableTD">{card.abilityOne}</td>
                                <td className="DisplayTableTD">{card.abilityTwo}</td>
                                <td className="DisplayTableTD">{card.abilityThree}</td>
                                <td className="DisplayTableTD">{card.abilityFour}</td>
                                <td className="DisplayTableTD">{card.createdBy.username}</td>
                                <td className="DisplayTableTD">
                                    <button className="showButton"> <Link style={{color: "black"}} to={`/displayOne/${card._id}`}>Show <br/>Card</Link></button>
                                    <button className="updateButton"><Link style={{color: "black"}} to={`/update/${card._id}`}>Update <br/>Card </Link></button>
                                    <button className="deleteButton" onClick={()=>deleteCard(card._id)}>Delete<br/>Card</button>
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
            <table className="CreatedByTable">
                <thead>
                    <tr>
                    <th className="DisplayTableHeader">Name</th>
                    <th className="DisplayTableHeader">Image</th>
                    <th className="DisplayTableHeader">Prowess</th>
                    <th className="DisplayTableHeader">Wits</th>
                    <th className="DisplayTableHeader">Vitality</th>
                    <th className="DisplayTableHeader">Ability 1</th>
                    <th className="DisplayTableHeader">Ability 2</th>
                    <th className="DisplayTableHeader">Ability 3</th>
                    <th className="DisplayTableHeader">Ability 4</th>
                    <th className="DisplayTableHeader">Creator</th>
                    <th className="DisplayTableHeader">Available Actions</th>
                    </tr>
                </thead>
                
                <tbody>

                {
                cardList.map((card, index)=>(
                    user._id!==card.createdBy._id ?(
                    <tr key={card._id} className="DisplayTableRow">
                        <td className="DisplayTableTD">{card.name}</td>
                        <td className="DisplayTableTD"><img style={{width: "60px"}} src ={card.image}>
                            </img></td>
                        <td className="DisplayTableTD">{card.prowess}</td>
                        <td className="DisplayTableTD">{card.wits}</td>
                        <td className="DisplayTableTD">{card.vitality}</td>
                        <td className="DisplayTableTD">{card.abilityOne}</td>
                        <td className="DisplayTableTD">{card.abilityTwo}</td>
                        <td className="DisplayTableTD">{card.abilityThree}</td>
                        <td className="DisplayTableTD">{card.abilityFour}</td>
                        <td className="DisplayTableTD">{card.createdBy.username}</td>
                        <td className="DisplayTableTD">
                            <button className="showButton"><Link style={{color: "black"}} to={`/displayOne/${card._id}`}>Show <br/>Card</Link></button>
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