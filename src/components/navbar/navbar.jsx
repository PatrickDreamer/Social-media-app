import React, { useContext } from 'react'
import "./navbar.scss"
import {
   Link
  } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
  const {darkMode,toggle} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" style={{textDecoration:"none"}}>
             <span>lamasocial</span> 
             </Link>
             <HomeOutlinedIcon />
            { darkMode? <DarkModeOutlinedIcon onClick={toggle}/>:<WbSunnyOutlinedIcon onClick={toggle}/>}
             <GridViewOutlinedIcon/>
             <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder='Search...' />
             </div>


        </div>
        <div className='right'>
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar;