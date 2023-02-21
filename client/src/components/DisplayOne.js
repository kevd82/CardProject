import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import html2canvas from "html2canvas";



const DisplayOne = (props)=>{
    const navigate = useNavigate();
    const{id} = useParams();
    const[card, setCard] = useState({})



    



    useEffect(()=>{
        axios.get(`http://localhost:8000/api/card/${id}`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setCard(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, [id]);

    
        const printRef = React.useRef();

        const handleDownloadImage = async () => {
            const element = printRef.current;
            const canvas = await html2canvas(element);
        
            const data = canvas.toDataURL('image/jpg');
            const link = document.createElement('a');
        
            if (typeof link.download === 'string') {
                link.href = data;
                link.download = 'image.jpg';
        
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(data);
            }
        };

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
        <div className= "DisplayOneHeader">
            <button className="HomeButton" ><Link style={{color: "black"}} to = {"/displayAll"}>Home</Link></button>
        
            <h1 style = {{ marginLeft: "22px", marginRight: "22px"}}>Character Card for {card.name} </h1>

            <button className="logoutButton" onClick= {logout}>Logout</button>
        </div>
        <br/>
        
        <div ref={printRef} className="CardContainer"> 
            <div>
                <table className="CardLeft" >
                    <tr className="CardName">{card.name}</tr> 
                    <tr><img className="CardImage"src ={card.image}></img></tr>
                    <tr className="CardStats" >
                    {card.prowess}  {card.wits}  {card.vitality}
                    </tr>

                </table>
            </div>

        <div style={{display: "inline-block", marginLeft: "25px"}}>
            <table className="CardRightUpper">
                <thead>
                    <tr className="CardRightUpperHeader" >
                        <th style={{border: "1px solid black", }}>Vitality</th>
                        <th style={{border: "1px solid black"}}>Available Pool</th>
                    
                    </tr>

                </thead>
                    <tbody>
                        <tr style={{width: "400px", height: "210px", border: "1px solid black"}}>
                            <td style={{outline: "1px solid black"}}></td><td style={{border: "1px solid black"}}></td>
                        </tr>
                    </tbody>

            </table>
            
            <table className="CardRightLower">
                <thead>
                    <tr className="CardRightLowerHeader">
                        <th style={{border: "1px solid black"}}>Abilities</th>
                    </tr>
                
                    </thead>
                <tbody className="CardRightLowerBody">
                    <br/>
                    <tr className="CardAbility">
                        {card.abilityOne}</tr>
                    <tr className="CardAbility" >
                        {card.abilityTwo}</tr>
                    <tr className="CardAbility" >
                        {card.abilityThree}</tr>
                    <tr className="CardAbility">
                        {card.abilityFour}</tr>
                </tbody>
            </table>
                
        </div>
            
        </div>
        <br/>
        
        <button className="DownloadButton" onClick={handleDownloadImage} >Download {card.name}</button>




    </div>




)


}
export default DisplayOne;