import React from 'react'
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
             <HomeOutlinedIcon />
             <DarkModeOutlinedIcon/>
             <GridViewOutlinedIcon/>
             <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder='Search...' />
             </div>

            </Link>

        </div>
        <div className='right'>
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fav%2Fentertainment-arts-62335678&psig=AOvVaw1XuI3S4iyBGkmCmF2PAAJ9&ust=1668167483538000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDZ8KPGo_sCFQAAAAAdAAAAABAJ" alt=""/>
                <span>John Doe</span>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar