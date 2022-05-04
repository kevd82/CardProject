import React from "react";
import './App.css';
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import CreateCard from "./components/CreateCard";
import DisplayOne from "./components/DisplayOne";
import UpdateCard from "./components/UpdateCard";
import LoginReg from "./views/LoginReg";

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
        

      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
