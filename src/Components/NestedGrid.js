import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
function NestedGrid() {
  return (
    <div>
      <div className="grid text-center"  style={{columns: "6",marginTop:'30px',textAlign:'left'}}>
  <div style={{fontSize:'13px'}}>
 <span style={{color:'#999999'}}> Bounce Rate</span>
    <div className="grid">
      <div style={{fontWeight:'bold',fontSize:'27px'}}>32.53%</div>
      <div style={{color:'#f95f53'}}>
         <ArrowDropDownIcon style={{fontSize:'inherit',textRendering:'auto'}}/>-0.5%</div>
    </div>
  </div>
  <div  style={{fontSize:'13px'}}>
  <span style={{color:'#999999'}}> Page Views</span> 
    <div className="grid">
      <div style={{fontWeight:'bold',fontSize:'27px'}}>7,682</div>
      <div style={{color:'#4da761'}}>
         <ArrowDropUpIcon style={{fontSize:'inherit',textRendering:'auto'}}/>
            +0.1%  </div>
    </div>
  </div>
  <div  style={{fontSize:'13px'}}>
 <span style={{color:'#999999'}}>New Sessions  </span> 
    <div className="grid">
      <div style={{fontWeight:'bold',fontSize:'27px'}}>68.8</div>
      <div style={{color:'#f95f53'}}>
         <ArrowDropDownIcon style={{fontSize:'inherit',textRendering:'auto'}}/>
          68.8</div>
    </div>
  </div>
  <div  style={{fontSize:'13px'}}>
   <span style={{color:'#999999'}}> Avg. Time on Site</span>
    <div className="grid">
      <div style={{fontWeight:'bold',fontSize:'27px'}}> 2m:35s</div>
      <div style={{color:'#4da761'}}>
         <ArrowDropDownIcon style={{fontSize:'inherit',textRendering:'auto'}}/>
         +0.8%</div>
    </div>
  </div>
  <div  style={{fontSize:'13px'}}>
  <span style={{color:'#999999'}}>New Sessions  </span> 
    <div className="grid">
      <div style={{fontWeight:'bold',fontSize:'27px'}}>68.8</div>
      <div style={{color:'#f95f53'}}>
         <ArrowDropDownIcon style={{fontSize:'inherit',textRendering:'auto'}}/>
          68.8</div>
    </div>
  </div>
  <div  style={{fontSize:'13px'}}>
  <span style={{color:'#999999'}}> Avg. Time on Site</span>
    <div className="grid">
      <div style={{fontWeight:'bold',fontSize:'27px'}}> 2m:35s</div>
     <div style={{color:'#4da761'}}>
         <ArrowDropDownIcon style={{fontSize:'inherit',textRendering:'auto'}}/>
         +0.8%</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default NestedGrid
