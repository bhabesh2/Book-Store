import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import '../Navbar/Navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => setToggleMenu(!toggleMenu)
  return (
    <>
      <nav className='navbar' id='navbar'>
        <div className="container navbar-content flex">
          <div className="brand-and-toggle flex flex-sb">
            <Link to="/" className='navbar-brand flex'>
              <img src={logo} alt="error" />
              <span className='text-upper fw-7 fs-24 ls-1'>bookslab</span>
            </Link>
            <button type='button' className="navbar-toggle-btn" onClick={handleMenu}>
              <HiOutlineMenuAlt3 size={35} style={{ color: `${toggleMenu ? "#ffffff" : "000000"} ` }} />
            </button>
          </div>
          <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="book" className='nav-link text-upper text-white fs-22 fw-6 ls-1'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" className='nav-link text-upper text-white fs-22 fw-6 ls-1'>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
