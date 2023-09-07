import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LockIcon from '@mui/icons-material/Lock';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

import "../App.css";
function Searchbar() {
  const dashStyle={
    display: 'flex',             // Use flex display
    flexDirection: 'column',     // Arrange text in a column
       // Center text horizontally
    borderTop: '1px solid #dfdfdf', // Add a border
    fontFamily:'Manrope, sans-serif'
}
  return (
    <div>
      <div className="dropdown">
        <button style={{ border: 'none', background: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
          <MailOutlineIcon style={{ fontSize: '25', color: 'black', fontWeight: '80',marginLeft:'15px' }} />
        </button>
        <ul className="dropdown-menu">
         
          <li>
          <a
  className="dropdown-item"
  href="#"
  style={dashStyle}
>
  <span ><ReportProblemIcon style={{color:'#1e3bb3',marginRight:'10px',fontFamily:'Manrope, sans-serif'}}/>Application Error</span>
  <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 ', width: "300px",
            marginLeft:'35px'}}>Just now</span>
</a>

          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
              <span><LockIcon style={{color:'#1e3bb3',marginRight:'10px'}}/>Settings</span>
              <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 ',
            marginLeft:'35px'}}>Private message</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
             <span><SportsVolleyballIcon style={{color:'#1e3bb3',marginRight:'10px'}}/>New user registration </span>
             <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 ',
            marginLeft:'35px'}}>2 days ago</span>
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
