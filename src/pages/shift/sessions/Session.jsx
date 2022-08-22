import React from "react";
import "./session.scss"
const Session = () => {
    return (
        <div className="session">
           <table>
            <thead>
                <th>SESSION </th>
                <th>SUNDAY <br/> 17-07-2022</th>
                <th>MONDAY <br/> 18-07-2022</th>
                <th>TUESDAY <br/> 19-07-2022</th>
                <th>WEDNESDAY <br/> 20-07-2022</th>
                <th>THURSDAY <br/> 21-07-2022</th>
                <th>FRIDAY <br/> 22-07-2022</th>
                <th>SATURDAY <br/> 23-07-2022</th>
            </thead>
            <tr class="shifttime">
                <td class="shifttime">
                    SHIFTS
                </td>
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>  
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>
                <td class="shifttime">
                    
                    <input type="checkbox"></input>
                    <label>Shift 1</label> <br/>
                    <input type="checkbox"></input>
                    <label>Shift 2</label><br/>
                    <input type="checkbox"></input>
                    <label>Shift 3</label>
                </td>
            </tr>
            <tr>
                <td id="sub-button">
                <button class="session-button">Submit</button>
                </td>
            </tr>
           </table>
        </div>
    )
}
export default Session