import React from "react";
import "./session.scss"
const Session = () => {
    return (
        <div className="session">
           <table>
            <th>
                <td>SESSION </td>
                <td class="trow">SUNDAY <br/>17-07-2022</td>
                <td class="trow">MONDAY <br/>18-07-2022</td>
                <td class="trow">TUESDAY <br/>19-07-2022</td>
                <td class="trow">WEDNESDAY <br/>20-07-2022</td>
                <td class="trow">THURSDAY <br/>21-07-2022</td>
                <td class="trow">FRIDAY <br/>22-07-2022</td>
                <td class="trow">SATURDAY <br/>23-07-2022</td>
            </th>
            <tr>
                <td>SHIFTS</td>
                <td> <button type="checkbox">
                </button> </td>
            </tr>

           </table>
        </div>
    )
}
export default Session