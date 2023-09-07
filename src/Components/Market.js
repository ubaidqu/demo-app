import React from 'react';

function Market() {
  return (
    <div style={{display:'flex'}}>
     
        <div className="card" style={{ width: "40rem", marginTop: "20px", height: '20rem', border: 'none', }}>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h6 className="card-title" style={{ fontWeight: "bold" }}>
                Market Overview
              </h6>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Lorem Ipsum is simply dummy text of the printing
              </h5>
            </div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                This month
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item " href="/">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li className="dropdown-divider"></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          <div
            style={{
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "sans-serif",
            }}
          >
            {" "}
            Graph
          </div>
        </div>
        <div
        className="card"
        style={{
          width: "20rem",
          marginLeft: "10px",
          marginTop: "20px",
          height: "25rem",
          border: "none",
        
          color: "black",
          fontFamily: "Manrope, sans-serif",
          fontSize:'13px'
        }}
      >
     <ul className="list-group">
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" style={{marginTop:'20px'}}/>
    <label className="form-check-label" for="firstCheckbox" >Lorem Ipsum is simply dummy text of the printing
24 June 2020 <span className="badge rounded-pill text-bg-warning">Due Tomorrow</span>
</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"  style={{marginTop:'20px'}}/>
    <label className="form-check-label" for="secondCheckbox">Lorem Ipsum is simply dummy text of the printing
23 June 2020<span className="badge rounded-pill text-bg-info">Done</span></label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"  style={{marginTop:'20px'}}/>
    <label className="form-check-label" for="thirdCheckbox">Lorem Ipsum is simply dummy text of the printing
24 June 2020<span className="badge rounded-pill text-bg-info">Done</span></label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"  style={{marginTop:'20px'}}/>
    <label className="form-check-label" for="thirdCheckbox">Lorem Ipsum is simply dummy text of the printing
24 June 2020 <span className="badge rounded-pill text-bg-danger">Expired</span></label>
  </li>
</ul>
      </div>
    </div>
  )
}

export default Market;
