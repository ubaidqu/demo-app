import React from "react";

export default function CategoryList() {
   const dashStyle={
    display: 'flex',             // Use flex display
    flexDirection: 'column',     // Arrange text in a column
       // Center text horizontally
    borderTop: '1px solid #dfdfdf', // Add a border
   }
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn- dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            borderColor: "#dfdfdf",
            width: "150px",
            textAlign: "left",
            fontFamily: "Manrope, sans-serif",
            backgroundColor: "#ffffff",
            fontSize: "12px",
            opacity:'0.8'
          }}
        >
          Select Category
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
            
              Select Category
            </a>
          </li>
          <li>
          <a
  className="dropdown-item"
  href="#"
  style={dashStyle}
>
  <span >Bootstrap Bundle</span>
  <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 ', width: "300px"}}>This is a Bundle featuring 16 unique dashboards</span>
</a>

          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
              <span>Angular Bundle </span>
              <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 '}}>Everything you'll ever need for your Angular projects</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
             <span> VUE Bundle </span>
             <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 '}}>Bundle of 6 Premium Vue Admin Dashboard</span>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#"
             style={dashStyle}>
               <span>React Bundle</span>
               <span style={{marginTop:'5px',marginBottom:'5px',color:'#6c7383',fontSize:'11px',
            fontFamily:'Manrope, sans-serif',
            fontWeight:'100 '}}>Bundle of 8 Premium React Admin Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
