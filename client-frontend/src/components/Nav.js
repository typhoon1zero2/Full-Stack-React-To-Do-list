import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
        <Link to="/">
            <h1>Home</h1>
        </Link>

    </div>
  )
}

export default Nav