import React from "react";
import { DataGrid,GridToolbar} from '@mui/x-data-grid';
import "./shiftTiming.scss"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom';
const ShiftTime = () => {
  const navigate=useNavigate();
  const navigateToAddshift=()=>{
    navigate('/shift/new');
  }
    const columns = [
        { 
          field: 'shiftname', 
          headerName: 'SHIFT NAME',
         flex: 1,
         editable: true,
        },
        {
          field: 'prodstart',
          headerName: 'PRODUCTION START TIME',
         flex: 1,
          editable: true,
        },
        {
          field: 'prodend',
          headerName: 'PRODUCTION END TIME',
          flex: 1,
          editable: true,
        },
        {
          field: 'meetstart',
          headerName: 'MEETING START TIME',
          flex: 1,
          type: 'time',
          editable: false,
        },
        {
          field: 'meetend',
          headerName: 'MEETING END TIME',
          flex: 1,
          editable: true,
         },
         {
          field: 'brk1start',
          headerName: 'BREAK 1 START TIME',
          flex: 1,
          editable: true,
         },
         {
          field: 'brk1end',
          headerName: 'BREAK 1 END TIME',
          flex: 1,
          editable: true,
         },
         {
          field: 'lnstart',
          headerName: 'LUNCH START TIME',
          flex: 1,
          editable: true,
         },
         {
          field: 'lnend',
          headerName: 'LUNCH END TIME',
          flex: 1,
          editable: true,
         },
         {
          field: 'brk2start',
          headerName: 'BREAK 2 START TIME',
          flex: 1,
          editable: true,
         },
         {
          field: 'brk2end',
          headerName: 'BREAK 2 END TIME',
          flex: 1,
          editable: true,
         },
       
      ];
      
      const rows = [
            //  {
            //   shiftname: "7:30",
            //   prodstart: "4.30",
            //  }
      ]
      
        return (
         <div>
          <div className="breadcrumb-topic"> 
          <h3>SHIFT TIMINGS</h3> 
          <div class="crud-icons">
          <AddCircleOutlineIcon style={{ marginLeft :"10px",marginTop:"10px",color:"black"}} onClick={navigateToAddshift}/>
          <EditIcon style={{color:"black"}}/>
          <DeleteIcon style={{color:"black"}}/>
          </div>
          </div>
           <div className="pm-bc">
            <div style={{ height: 500, width: '100%' }} className="table">
            <div style={{ display: 'flex', height: '100%' }}>
              <div style={{ flexGrow: 1 }}>
            <DataGrid  sx={{
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          bgcolor:'text.light',
        }}
              columnResizingAnimationMode="Interpolate"
              columnResizingMode="Deferred"
              disableColumnMenu
              rows={rows}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              disableColumnFilter
              pagination
            //   disableDensitySelector
              
              components={{ Toolbar: GridToolbar }}
              componentsProps={{
      
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
            />
         
          </div></div>
          </div></div></div>
        )
}
export default ShiftTime