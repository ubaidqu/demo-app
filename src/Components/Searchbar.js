import React,{useState} from 'react'

function Searchbar() {
    const [query,setQuery]=useState("");
  return (
    <div className='search_bar'>
      <input  style={{width:'150px',
    outline:'none',
    border:'none',
    borderBottom:'1px solid black',
    backgroundColor:'#f4f5f7'}}type='text ' onChange={e=>setQuery(e.target.value)}/>
    </div>
  )
}

export default Searchbar
