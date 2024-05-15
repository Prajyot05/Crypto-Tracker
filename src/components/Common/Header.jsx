import React from 'react'
import "./header.css"
import logo from '../../assets/logo_transparent.png';
import AnchorTemporaryDrawer from './Drawer';
import Button from './Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="" /></Link>
      <div className="links">
        <Link to='/'><p className='link'>Home</p></Link>
        <Link to='/watchlist'><p className='link'>Watchlist</p></Link>
        <Link to='/compare'><p className='link'>Compare</p></Link>
        <Link to='/dashboard'><Button text={'Dashboard'}/></Link>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header