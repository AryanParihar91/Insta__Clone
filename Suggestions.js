import React from 'react'
import './Suggestions.css'
import { Avatar } from "@mui/material";

function suggestions() {
  return (
    <div className='suggestions'>
        <div className='suggestions__title'>Suggestions for you</div>
        <div className='suggestions__usernames'>

            <div className='suggestions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>A</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>aryan_91</span>
                        <span className='relation'>New to Kiitgram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='suggestions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>B</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>bharti_.768</span>
                        <span className='relation'>New to Kiitgram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='suggestions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>A</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>Akash_jp</span>
                        <span className='relation'>New to Kiitgram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='suggestions__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>rohit41</span>
                        <span className='relation'>New to Kiitgram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

        </div>
    </div>
  )
}

export default suggestions
