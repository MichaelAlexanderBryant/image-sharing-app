import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function NavBar() {

    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div id="nav">
            <h1><a href="/">ImageShare</a></h1>
            {user ? <div id="logout-btn" onClick={logoutUser}><p id="logout">Log Out</p></div> :
            <ul>
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup"><div id="signup-btn">Sign Up</div></a></li>
            </ul>}
        </div>
    )
}

export default NavBar;