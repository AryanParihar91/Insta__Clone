import React from 'react'
import './Snav.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function nav() {
  return (
    <div className='snav'><div/>
      <h1 className='nameLogo'>
       Kiitgram
      </h1>
      <div className='snav__buttons'>
        <button className='sideButtons'>
          <HomeIcon/>
          <span>Home</span>
        </button>
        <button className='sideButtons'>
          <SearchIcon/>
          <span>Search</span>
        </button>
        <button className='sideButtons'>
          <ExploreIcon/>
          <span>Explore</span>
        </button>
        <button className='sideButtons'>
          <SlideshowIcon/>
          <span>Reels</span>
        </button>
        <button className='sideButtons'>
          <ChatIcon/>
          <span>Messages</span>
        </button>
        <button className='sideButtons'>
          <FavoriteBorderIcon/>
          <span>Notifications</span>
        </button>
        <button className='sideButtons'>
          <AddCircleOutlineIcon/>
          <span>Create</span>
        </button>
      </div>
      <div className='snav__more'>
        <button className='sideButtons'>
          <MenuIcon/>
          <span>More</span>
        </button>
      </div>
    </div>

  )
}

export default nav
