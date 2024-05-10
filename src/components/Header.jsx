import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import ncnewsLogo from '../assets/nc_news.svg'
import defaultUser from '../assets/defaultUser.svg'
import { Link } from 'react-router-dom'

const Header = () => {

  const { user } = useContext(UserContext);

  console.log(user)

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
        <li><Link to="/articles" className='topics-link'>Articles</Link></li>
        </ul>
        <div>
          <img src={user ? user.avatar_url : defaultUser} className="logo-user" alt={user ? user.username : "default user"} />
        </div>
    </div>
  )
}

export default Header