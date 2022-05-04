import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import html2canvas from "html2canvas";
import faeded from "./Faeded.jpg";



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

    





return (
    <div>
        <h1>Character Card for {card.name} </h1>
        <h3><button style={{backgroundImage: `Url(${faeded})`, borderRadius: "12px", padding: "15px 32px", fontWeight: "622", backgroundSize: "100%", margin: "22px"}}  ><Link style={{color: "black"}} to = {"/displayAll"}>Home</Link></button>
        <button style={{background: "Url(https://i.ibb.co/8zmvzpQ/Faeded.jpg)", borderRadius: "12px", fontWeight: "622", padding: "15px 32px", backgroundSize: "100%", margin: "22px"}} onClick={handleDownloadImage} >Download {card.name}</button></h3>
        <br/>
    
            <div ref={printRef} style={{display: "inline-flex", padding: "22px", width: "930px", height: "600px", border: "2px solid black", marginLeft: "auto", marginRight: "auto", background: "#f8ecc2", fontWeight: "322"}}> 
                <div>
                    <table  style= {{textAlign: "center", padding: "10px 22px 0px 22px", backgroundImage: `Url(${faeded})`, backgroundSize: "cover", border: "1px solid black", width: "400px", height: "550", borderRadius: "25px"}}>
                        <tr style={{fontFamily: "Crom", color: "#a10306", fontSize: "30px",  width: "400px", height: "50px", textShadow: " -1px 0 black, 2px 0 black, 2px 0 black, -1px 0 black", wordSpacing: "5px"}}>{card.name}</tr> 
                        <tr><img style={{marginLeft: "auto", marginRight: "auto", width: "400px", height: "443px", padding: "0px 12px 12px 12px"}} src ={card.image}></img></tr>
                        <tr style = {{width: "400px", height: "50px", wordSpacing: "50px", fontFamily: "Crom", color: "#a10306", fontSize: "42px", textShadow: " -1px 0 black, 2px 0 black,2px 0 black, -1px 0 black"}}>
                        {card.prowess}  {card.wits}  {card.vitality}
                        </tr>

                    </table>
                </div>

            <div style={{display: "inline-block", marginLeft: "25px"}}>
                <table style= {{textAlign: "center", backgroundImage: `Url(${faeded})`, backgroundSize: "cover", border: "1px solid black", width: "425px", height: "260", marginBottom: "15px" }}>
                    <thead>
                        <tr style={{height: "50px",fontFamily: "Crom", color: "#a10306", fontSize: "22px", letterSpacing: "3px", textShadow: " -1px 0 black, 2px 0 black,2px 0 black, -1px 0 black"}}>
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
            
                <table style= {{textAlign: "center", backgroundImage: `Url(${faeded})`, backgroundSize: "cover", border: "1px solid black", width: "425px", height: "300"}}>
                    <thead>
                        <tr style={{width: "100%", fontFamily: "Crom", color: "#a10306", fontSize: "22px", letterSpacing: "5px", textShadow: " -1px 0 black, 2px 0 black,2px 0 black, -1px 0 black", height: "50px"}}>
                            <th style={{border: "1px solid black"}}>Abilities</th>
                        </tr>
                
                    </thead>
                    <tbody style={{fontFamily: "Crom", color: "#a10306", fontSize: "22px", wordWrap: "normal", letterSpacing: "3px", textShadow: " -1px 0 black, 2px 0 black,2px 0 black, -1px 0 black", border: "1px solid black"}}>
                        <br/>
                        <tr style={{width: "100%", height: "50px",  margin: "5px"}}>
                        {card.abilityOne}</tr>
                        <tr style={{width: "100%", height: "50px",  margin: "5px"}}>
                        {card.abilityTwo}</tr>
                        <tr style={{width: "100%", height: "50px", margin: "5px"}}>
                        {card.abilityThree}</tr>
                        <tr style={{width: "100%", height: "50px", margin: "5px"}}>
                        {card.abilityFour}</tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        




    </div>




)


}
export default DisplayOne;