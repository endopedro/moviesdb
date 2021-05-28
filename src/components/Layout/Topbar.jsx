import React from 'react'
import Link from 'next/link'

const Topbar = () => (
  <nav className="topbar navbar border-top border-bottom shadow">
    <div className="container">
      <Link href="/">
        <a className="logo navbar-brand fw-bold mx-auto">
          <span className="colored">MOVIES</span>
          <span className="text-white">DB</span>
        </a>
      </Link>
    </div>
  </nav>
)

export default Topbar
