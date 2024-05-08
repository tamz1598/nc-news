import React from 'react'
import ncnewsLogo from '../assets/nc_news.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
            <img src={ncnewsLogo} className="logo" alt="NCNews logo" />
        </Link>
        <div className='title'>
            <h1>NC News</h1>
        </div>
        <ul className='nav-links'>
        <li><Link to="/users" className='login-link'>Login</Link></li>
        <li><Link to="/topics" className='topics-link'>Topics</Link></li>
        </ul>
    </div>
  )
}

export default Header