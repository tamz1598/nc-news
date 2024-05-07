import React from 'react'
import ncnewsLogo from '../assets/nc_news.svg'

const Header = () => {
  return (
    <div className='header'>
        <a href="./index.html" target="">
            <img src={ncnewsLogo} className="logo" alt="Vite logo" />
        </a>
        <div className='title'>
            <h1>NC News</h1>
        </div>
    </div>
  )
}

export default Header