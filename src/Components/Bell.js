import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Bell() {
    const dashStyle={
        display: 'flex',             // Use flex display
        flexDirection: 'column',     // Arrange text in a column
           // Center text horizontally
        borderTop: '1px solid #dfdfdf', // Add a border
    }
  return (
    <div>
       <button style={{ border: 'none', background: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
          <NotificationsIcon style={{ fontSize: '25', color: 'black', fontWeight: '80' ,marginLeft:'15px'}} />
        </button>
        <ul className="dropdown-menu">
         
          <li>
          <a
  className="dropdown-item"
  href="#"
  style={dashStyle}
>
  <span ><AccountCircleOutlinedIcon/>Marian Garner</span>
  <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 ', width: "300px"}}>The meeting is cancelled</span>
</a>

          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
              <span><AccountCircleOutlinedIcon/>David Grey </span>
              <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 '}}>The meeting is cancelled</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
             <span> <AccountCircleOutlinedIcon/>Travis Jenkins</span>
             <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 '}}>The meeting is cancelled</span>
            </a>
          </li>
          <li>
            
          </li>
        </ul>
    </div>
  )
}

export default Bell
