import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function NavBar() {

    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div id="nav">
            <h1><a href="/">ImageShare</a></h1>
            {user ? <p id="logout" onClick={logoutUser}>Log Out</p> :
            <ul>
                <li><a href="/login">Log In</a></li>
                <li>Sign Up</li>
            </ul>}
        </div>
    )
}

export default NavBar;