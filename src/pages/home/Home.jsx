import React from "react";
import Shiftbar from "../shift/Shiftbar";
import ShiftTime from "../shift/shiftTiming/ShiftTiming";
import Session from "../shift/sessions/Session";
const Home = () => {
    return (
        <div className="home">
           <div className="homeContainer">
            <Shiftbar/>
            <Session/>
            <ShiftTime/>
           </div>
        </div>
    )
}
export default Home