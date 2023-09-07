import React from "react";


function PerformanceCard() {
  return (
    <div >
      <div className="card" style={{ width: "40rem", marginTop: "20px",height: '20rem',border:'none'}}>
        <div className="card-body">
          <h6 className="card-title" style={{ fontWeight: "bold" }}>
            Performance Line Chart
          </h6>
          <h5 className="card-subtitle mb-2 text-body-secondary">
            Lorem Ipsum is simply dummy text of the printing
          </h5>
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
      </div>
    
    </div>
  );
}

export default PerformanceCard;
