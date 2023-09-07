import React from 'react';
import "../App.css";
function Alert() {
  return (
    <>
      <div>
        <div className="alert alert-dismissible custom-alert" role="alert" >
          <strong style={{fontFamily:'Manrope, sans-serif'
          ,fontSize:'13px',
          fontWeight:'500',
          color:'white'}}>
            Free 24/7 customer support, updates, and more with this template!</strong>
          <button type="button"className="btn-close custom-btn-close" data-bs-dismiss="alert" aria-label="Close" 
           />
        </div>
      </div>
    </>
  );
}

export default Alert;
