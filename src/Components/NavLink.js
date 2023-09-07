import React from 'react'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
function NavLink() {
  return (
    <div>
       <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#" >Overview</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Audiences</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Demographics</a>
  </li>
  <li className="nav-item">
    <a className="nav-link " href="#">More</a>
  </li>
  <div className="d-flex justify-content-end"  style={{marginLeft:'300px',blockSize:'30px',cursor:'pointer'}}>
  <button className="btn btn-primary me-md-4"
  style={{
    fontSize: '12px',
    backgroundColor: '#f4f5f7', // Set the background color
    border: '2px solid #dde7fa',
    color:'black' // Set the border
  }} type="button" ><ShareOutlinedIcon style={{fontSize:'16px'}}/>Share</button>
 <button className="btn btn-primary me-md-4" type="button" 
 style={{
  fontSize: '12px',
  backgroundColor: '#f4f5f7', // Set the background color
  border: '2px solid #dde7fa',
  color:'black' // Set the border
}}><LocalPrintshopOutlinedIcon style={{fontSize:'16px'}}/>Print</button>
 <button className="btn btn-primary me-md-4" type="button"
 style={{
  fontSize: '12px',
  backgroundColor: '#172d88', // Set the background color
  border: '2px solid #dde7fa',
  // Set the border
}}><IosShareOutlinedIcon style={{fontSize:'16px'}}/>Export</button>
</div>
</ul>
    </div>
  )
}

export default NavLink
