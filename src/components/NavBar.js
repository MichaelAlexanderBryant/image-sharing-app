import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function NavBar() {

    let {user, logoutUser} = useContext(AuthContext)
    return (
        <div id="nav">
            <div id="left-nav">
                <h1><a href="/">ImageShare</a></h1>
                {user ? <a href="/newpost"><div id="add-post">+ New Post</div></a> : null}
            </div>
            {user ? 
            <div id="right-nav">
                <div id="username">Posts</div>
                <div id="logout-btn" onClick={logoutUser}><p id="logout">Log Out</p></div>
            </div>
            :
            <ul>
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup"><div id="signup-btn">Sign Up</div></a></li>
            </ul>}
        </div>
    )
}

export default NavBar;