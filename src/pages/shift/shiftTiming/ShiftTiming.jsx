import React from "react";
import { DataGrid,GridToolbar} from '@mui/x-data-grid';
import "./shiftTiming.scss"
const ShiftTime = () => {
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
          field: 'meeting',
          headerName: 'Frequency',
          flex: 1,
          type: 'time',
          editable: false,
        },
        {
          field: 'operatorName',
          headerName: 'Operator Name',
          flex: 1,
          editable: true,
         },
         {
          field: 'completed',
          headerName: 'Completed',
          flex: 1,
          editable: true,
         },
         {
          field: 'toticket',
          headerName: 'To Ticket',
          flex: 1,
          editable: true,
         },
      ];
      
      const rows = [
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
        { id: 5, },
        { id: 6, },
        { id: 7, },
        { id: 8, },
        { id: 9, },
      ]
      
        return (
         <div>
          <div className="breadcrumb-topic"> <h4>SHIFT TIMINGS</h4> </div>
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