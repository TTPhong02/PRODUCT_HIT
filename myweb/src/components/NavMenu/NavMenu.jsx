import React from 'react'
import { Link } from 'react-router-dom'
export const NavMenu = () => {
  return (
    <div className="nav">
        <ul className='nav_down absolute'>
            <li><Link to={'/'}>Boots</Link></li>
            <li><Link to={'/'}>Cao Gót</Link></li>
            <li><Link to={'/'}>Giày Da</Link></li>
            <li><Link to={'/'}>Giày Thể Thao</Link></li>
            <li><Link to={'/'}>Sneaker</Link></li>
            <li><Link to={'/'}>Giày Bệt</Link></li>
        </ul>
    </div>
  )
}
