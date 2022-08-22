import React  from "react";
import "./modelbar.scss"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Modelbar = () => {
    const setDate=useState();
    return (
        <div className="Shiftbar">
        <div className="selectBar">
        <ul className="navbar-ul">
            <form>
                <li className="navbar-li">
                    <div className="select">
                        <div className="label">
                            <label className="navbar-label">ENTITY</label>
                        </div>
                        
                        <div className="selectContent">   
                            <select className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                    <option className="navbar-option" value="E1">E1</option>
                                    <option className="navbar-option" value="E2">E2</option>
                                    <option className="navbar-option" selected value="E3">E3</option>
                                    <option className="navbar-option" value="E4">E4</option>
                            </select>
                        </div>
                    </div>
                    
                </li>
                
                    
                

                <li className="navbar-li">
                <div className="select">
                        <div className="label">
                            <label className="navbar-label">DEPARTMENT</label>  
                        </div>
                        
                        <div className="selectContent">   
                            <select  className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                    <option className="navbar-option" value="D1">D1</option>
                                    <option className="navbar-option" value="D2">D2</option>
                                    <option className="navbar-option" selected value="D3">D3</option>
                                    <option className="navbar-option" value="D4">D4</option>
                            </select>
                        </div>
                    </div>
                </li>

               

                <li className="navbar-li">
                <div className="select">
                        <div className="label">
                            <label className="navbar-label">MACHINE</label>  
                        </div>
                        
                        <div className="selectContent">  
                            <select className="navbar-select" style={{color:"rgb(163, 163, 167)"}}>
                                    <option className="navbar-option" value="M1">M1</option>
                                    <option className="navbar-option" value="M2">M2</option>
                                    <option className="navbar-option" selected value="M3">M3</option>
                                    <option className="navbar-option" value="M4">M4</option>
                            </select>
                        </div>
                    </div>
                        
                        
                </li>
                <li className="navbar-li"  id="weekSelect">
                
                </li>               
            </form>

        </ul>
        </div>
    </div>
    )
}
export default Modelbar