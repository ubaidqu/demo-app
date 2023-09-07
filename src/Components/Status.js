import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Status() {
    const percentage =26.80;
    const value=9;
  return (
    <div>
      <div
        className="card"
        style={{
          width: "20rem",
          marginLeft: "10px",
          marginTop: "20px",
          height: "10rem",
          border: "none",
          backgroundColor: "#1f3bb3",
          color: "white",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontWeight: "bold", fontSize: "17px" }}
          >
            Status Summary
          </h5>
          <h6 className="card-subtitle mb-2 " style={{ color: "#9da9dd" }}>
            Closed Value
          </h6>
        </div>
      </div>
      <div
        className="card"
        style={{
          width: "20rem",
          marginLeft: "10px",
          marginTop: "20px",
          height: "7rem",
          border: "none",
          
          color: "black",
          fontFamily: "Manrope, sans-serif",
          display: 'flex',
         
          // Center the content horizontally and vertically
          flexDirection: 'column',
        }}
      > <div style={{display:'flex'}}> 
        <div className="card-body" style={{display:'flex',}}>
        <div style={{display:'flex'}}>
            <CircularProgressbar value={percentage} styles={{root: { width: '40px', height: '50px' },}}/>
            <div style={{fontSize:'15px',marginLeft:'5px'}}>
            Total Visitors
             <div style={{marginLeft:'5px',fontWeight:'bold'}}>26.80%</div>
        </div>
             </div>
        </div>
        <div className="card-body" style={{display:'flex',}}>
        <div style={{display:'flex'}}>
        <CircularProgressbar value={value}  styles={{root: { width: '40px', height: '50px' },}}/>
            <div style={{fontSize:'15px',marginLeft:'5px'}}>
            Visits per day
             <div style={{marginLeft:'5px',fontWeight:'bold'}}>9065</div>
        </div>
             </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
