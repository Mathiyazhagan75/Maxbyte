import React from "react";
import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Shiftbar from "../shift/Shiftbar";
import ShiftTime from "../shift/shiftTiming/ShiftTiming";
import Session from "../shift/sessions/Session";
const Home = () => {
    return (
        <div className="home">
           <Sidebar/>
           <div className="homeContainer">
           <Navbar/>
            <Shiftbar/>
            <Session/>
            <ShiftTime/>
           </div>
        </div>
    )
}
export default Home