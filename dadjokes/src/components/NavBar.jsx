import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const token = localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }
    if (!token) {
        return ( 
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/jokes">Dad Jokes</Link>
        </div>
     );
    } else {
        return ( 
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/jokes">Dad Jokes</Link>
            <button onClick={logout}>Logout</button>
        </div>
     );
    }
    
}
 
export default NavBar;