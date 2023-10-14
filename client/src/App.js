import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import CreateCard from "./components/CreateCard";
import DisplayOne from "./components/DisplayOne";
import UpdateCard from "./components/UpdateCard";
import LoginReg from "./views/LoginReg";
import Forgot from "./components/Forgot";
import ResetPassword from "./components/ResetPassword";
import "./images/Faeded.png"



function App() {


  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginReg/>} />
        <Route path="/createCard" element={<CreateCard/>} />
        <Route path="/displayOne/:id" element={<DisplayOne/>} />
        <Route path="/update/:id" element={<UpdateCard/>} />
        <Route path="/displayAll" element={<DisplayAll/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/resetPassword/:id" element={<ResetPassword/>}/>

      </Routes>
      
    </div>

    </BrowserRouter>
    
  );
}

export default App;
