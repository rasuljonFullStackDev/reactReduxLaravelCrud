import React from 'react'

const NavBar = () => {
  return (
    <div>
      <div className="nav-menu">
        <div className="nav-logo">
          <img src="./img/logo.svg" alt="" />
        </div>
        <div className="nav-btn">
          <button className='btn'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar