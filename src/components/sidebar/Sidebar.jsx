import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import EngineeringIcon from '@mui/icons-material/Engineering';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="top">
            <span className='logo'>EDGE</span>
           </div>
           
           <div className="center">
            <ul>
                <li>
                <DashboardIcon className="icon"/>
                <span>OVERVIEW</span>
                </li>
                <li>
                <ProductionQuantityLimitsIcon className="icon"/>
                <span>PRODUCTION</span>
                </li>
                <li>
                <EngineeringIcon className="icon"/>
                <span>MAINTENANCE</span>
                </li>
                <li>
                <DisplaySettingsIcon className="icon"/>
                <span>CONDITION MONITORING</span>
                </li>
                <li>
                <AssessmentIcon className="icon"/>
                <span>REPORTS</span>
                </li>
                <li>
                <SettingsApplicationsIcon className="icon"/>
                <span>CONFIGURATION</span>
                </li>
                <li>
                <QueryStatsIcon className="icon"/>
                <span>MACHINE DIAGNOSTICs</span>
                </li>
                <li>
                <ElectricBoltIcon className="icon"/>
                <span>ENERGY</span>
                </li>
            </ul>
           </div>
           <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
           
           </div>
        </div>
    )
}

export default Sidebar