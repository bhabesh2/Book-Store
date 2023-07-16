import React from 'react'
import Navbar from '../Navbar/Navbar';
import SearchBox from '../SearchBox/SearchBox'
import '../Header/Header.css';
function Header() {
  return (
    <>
      <div className='holder'>
        <header>
            <Navbar/>
            <div className="header-content flex flex-c text-center text-white flex-column">
                <h2 className="header-title text-capitalize">find your book</h2>
                <br />
                <p className='header-text fs-18 fw-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quam omnis ab tempore ullam recusandae neque inventore nemo nisi dolore.
                </p>
                <SearchBox/>
            </div>
        </header>
      </div>
    </>
  )
}

export default Header
