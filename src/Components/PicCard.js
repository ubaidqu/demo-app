import React from 'react'
function PicCard() {
  return (
    <div className="card text-bg-dark" style={{width:'40rem',height:'10rem',marginTop:'-50px'}}>
  <img src="/photo.jpg" className="card-img" alt="."/>
  <div className="card-img-overlay">
    <h1 className="card-title">Enhance your Campaign for better outreach</h1>
    <p className="card-text"> <button type="button" className="btn btn-info">Upgrade Account!</button></p>
    
  </div>
</div>
  )
}

export default PicCard
