import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
 const NavBar=()=> {
    return (
        <div className="nav">
          <ul >
            <Link to="/"><li>Movie</li></Link>
          <Link to="/about"><li>About</li></Link>   
          </ul>  
        </div>
    )
}
export default NavBar;