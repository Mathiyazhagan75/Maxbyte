import React from 'react'
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-title">
            <h1>CONFIGURATION</h1>
            </div>
            <hr class="hr-design"/>
            <div className="wrapper">
            <ul>
                <li>
                    <span>
                    SHIFT CONFIGURATION
                    </span>
                </li>
                <li>
                    <span>
                    MODEL CONFIGURATION
                    </span>
                </li>
                <li>
                    <span> 
                    CHECKLIST CONFIGURATION
                    </span>
                </li>
                <li>
                    <span> 
                    MAIL CONFIGURATION
                    </span>
                </li>
                <li>
                    <span> 
                    MULTISHIFT CONFIGURATION
                    </span>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar