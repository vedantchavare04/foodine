import React from 'react';
import ReactDOM from 'react-dom/client';
import opimage from "../components/optiondesign.png";
import phimage from "../components/pharmadesign.png";
import dimage from "../components/dailydesign.png";
import { useNavigate } from "react-router-dom";

function Option(){
    const navigate = useNavigate();
    return <div class="option" >
        {/* groceries */}
        <div class="opcards">
            <img src={opimage} width="400px" />
            <h1 class="optiondetail" >groceries</h1>
            <p class="fresh">Fresh groceries,fruits and many more</p>
            <button class="cta" onClick={() => navigate("/shop")}>Shop now</button>
        </div>
        {/* pharma */}
        <div class="opcards2">
            <img src={phimage} width="400px" />
            <h2 class="optiondetail2" >pharma</h2>
            <p>cough syrups,cold tablets and many more</p>
            <button class="cta" onClick={() => navigate("/shop")}>Shop now</button>
        </div>
        {/* daily essentials */}
        <div class="opcards3" >
            <img src={dimage} width="400px"/>
            <h2 class="optiondetail2" >Daily essentials</h2>
            <p>Daily essential items </p>
            <button class="cta" onClick={() => navigate("/shop")}>Shop now</button>
        </div>
    </div>
}

export default Option;