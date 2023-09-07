import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

function Profile() {
  return (
    <div>
      <button style={{ border: 'none', background: 'none',marginTop:'0px' }} data-bs-toggle="dropdown" aria-expanded="false">
        <AccountCircleOutlinedIcon style={{ color: 'black', fontWeight: '80',fontSize:'26px' }} />
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item">
            <div className="profile_component_container">
          <AccountCircleOutlinedIcon />
          <span style={{color:'#898989'}}>Allen Moreno</span>
          <span style={{color:'#aab1b9'}}>allenmoreno@gmail.com</span>
          </div>
        </li>
       
        <li className="dropdown-item">
          <PersonOutlineOutlinedIcon style={{marginRight:'5px',color:'#1e3bb3'}} />
          <span style={{color:'#8b8c91'}}>My Profile</span>
        </li>
        <li className="dropdown-item">
          <ChatOutlinedIcon  style={{marginRight:'5px',color:'#1e3bb3'}} />
          <span style={{color:'#8b8c91'}}>Messages</span>
        </li>
        <li className="dropdown-item">
          <EventAvailableOutlinedIcon  style={{marginRight:'5px',color:'#1e3bb3'}} />
          <span style={{color:'#8b8c91'}}>Activity</span>
        </li>
        <li className="dropdown-item">
          <HelpOutlineOutlinedIcon  style={{marginRight:'5px',color:'#1e3bb3'}}/>
          <span style={{color:'#8b8c91'}}>FAQ</span>
        </li>
        <li className="dropdown-item">
          <PowerSettingsNewOutlinedIcon  style={{marginRight:'5px',color:'#1e3bb3'}}/>
          <span style={{color:'#8b8c91'}}>Sign Out</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
