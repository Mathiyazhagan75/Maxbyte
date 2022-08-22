import React,{useState} from "react";
import "./Addshift.scss"
const Addshift = () => {
    const [data,setData]=useState({
        shiftName:"",
        prodStart:"",
        prodEnd:"",
        brk1Start:"",
        brk1End:"",
        brk2Start:"",
        brk2End:"",
        meetinStart:"",
        meetingEnd:"",
        lunchStart:"",
        lunchEnd:""
    })
    const newData={...data}
    function submit(e){
        e.preventDefault();
        
    }
   function handle (e){
        
        newData[e.target.id]=e.target.value
        setData(newData)
        //console.log(newData)
    }
    return (
        <div class="addshift">
            <div class = "addshift-container">
        <div class = "shift-title">Shift configuration</div>
        <form action="#" onSubmit={(e) => submit(e)} method="post">
            <div class="user-details">
                <div class="input-box">
                    <span class="details">Shift Name</span>
                    <input type="text" onChange={(e)=>handle(e)}  value={data.shiftName} id="shiftName" placeholder="Enter your shift name"/>
                     </div>
                <div class="input-box">
                    <span class="details">Production start time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="prodStart" value={data.prodStart} required/>
                </div>
                <div class="input-box">
                    <span class="details">Production end time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="prodEnd" value={data.prodEnd}  required/>
                </div>
                <div class="input-box">
                    <span class="details">Break 1 start time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="brk1Start" value={data.brk1Start} required/>
                </div>
                <div class="input-box">
                    <span class="details">Break 1 end time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="brk1End" value={data.brk1End} required/>
                </div>
                <div class="input-box">
                    <span class="details">Break 2 start time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="brk2Start" value={data.brk2Start}  required/>
                </div>
                <div class="input-box">
                    <span class="details">Break 2 end time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="brk2End" value={data.brk2End} required/>
                </div>
                <div class="input-box">
                    <span class="details">Meeting start time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="meetinStart" value={data.meetinStart} required/>
                </div>
                <div class="input-box">
                    <span class="details">Meeting end time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="meetingEnd" value={data.meetingEnd} required/>
                </div>
                
                <div class="input-box">
                    <span class="details">Lunch start time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="lunchStart" value={data.lunchStart}  required/>
                </div>
                <div class="input-box">
                    <span class="details">Lunch end time</span>
                    <input type = "time"  onChange={(e)=>handle(e)} id="lunchEnd" value={data.lunchEnd} required/>
                </div>
            </div>
            <div class="button">
                <input type = "submit" value = "Submit"/>
            </div>
        </form>
    </div>
        </div>
)
}
export default Addshift