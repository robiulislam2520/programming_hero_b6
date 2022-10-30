import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{textAlign:'center'}} className="header">
        <Link to='/'>Home</Link>
        <Link to='/user/add'>Add a user</Link>
    </div>
  )
}

export default Header