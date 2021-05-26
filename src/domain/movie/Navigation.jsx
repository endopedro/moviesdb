import React from 'react'
import Link from 'next/link'
import { FaCaretLeft } from 'react-icons/fa'

const Navigation = () => (
  <div className="py-4">
    <Link className="text-white" href="/">
      <a className="d-flex align-items-center">
        <FaCaretLeft className="me-1" />
        Back
      </a>
    </Link>
  </div>
)

export default Navigation
