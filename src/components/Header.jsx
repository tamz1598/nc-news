import React from 'react'
import ncnewsLogo from '../assets/nc_news.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
            <img src={ncnewsLogo} className="logo" alt="Vite logo" />
        </Link>
        <div className='title'>
            <h1>NC News</h1>
        </div>
        <Link to="/users" className='login-link'>Login</Link>
        <Link to="/topics" className='login-link'>Topics</Link>
    </div>
  )
}

export default Header