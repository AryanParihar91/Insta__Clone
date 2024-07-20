import React from 'react'
import './Posts.css'
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Posts() {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerUsername'>
        <Avatar>K</Avatar>
        <span className='post__Username'>kiit_uni </span><span className='post__time'> •  12h</span>
        </div>
        <MoreHorizIcon className='post_other'/>
      </div>
      <div className='post__image'>
        <img src='https://olympiads.kiit.ac.in/wp-content/uploads/2020/03/kiit.jpg' alt=''>
        </img>
      </div>
      <div className='post__footer'>
        <div className='post__footerIcons'>
            <div className='post__iconsMain'>
                <FavoriteBorderIcon className='postIcon'/>
                <ChatBubbleIcon className='postIcon'/>
                <TelegramIcon className='postIcon'/>
            </div>
            <div className='post__saveIcon'>
                <BookmarkBorderIcon className='postIcon'/>
            </div>
        </div>
        Liked by 21 people.
      </div>

    </div>
  )
}

export default Posts
