import React,{useState} from 'react'

 function Datepick() {
    const [date,setDate]=useState();
  return (
    <div className='date_pick'>
      <input  style={{border:'1px solid #dfdfdf',borderRadius:'4px',textAlign:'center',fontFamily:'Manrope, sans-serif'}}type="date" onChange={e=>setDate(e.target.value)} />
    </div>
  )
}
export default Datepick;
