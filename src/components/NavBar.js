import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function NavBar() {

    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div id="nav">
            <h1><a href="/">Image Sharing App</a></h1>
            {user && <p>Hello, {user.username}</p>}
            {user ? <p onClick={logoutUser}>Log-Out</p> :
            <ul>
                <li><a href="/login">Log-in</a></li>
                <li>Sign-Up</li>
            </ul>}
        </div>
    )
}

export default NavBar;