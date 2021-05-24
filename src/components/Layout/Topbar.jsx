import React from 'react'

const Topbar = () => {
  return (
    <nav className="topbar navbar border-top border-bottom shadow">
      <div className="container">
        <a className="logo navbar-brand fw-bold mx-auto" href="/">
          <span className="colored">MOVIES</span>
          <span className="text-white">DB</span>
        </a>
      </div>
    </nav>
  )
}

export default Topbar
