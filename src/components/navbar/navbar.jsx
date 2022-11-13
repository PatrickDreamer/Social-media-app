import React from 'react'
import "./navbar.scss"
import {
   Link,
  } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" style={{textDecoration:"none"}}>
             <span>lamasocial</span> 
             </Link>
             <HomeOutlinedIcon />
             <DarkModeOutlinedIcon/>
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
                <img src="https://www.befunky.com/images/prismic/57b2c48e-0268-4868-9bad-e295ae1d575c_landing-photo-to-cartoon-img6.jpeg?auto=avif,webp&format=jpg&width=863" alt=""/>
                <span>John Doe</span>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar