import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function LogIn() {
    let {loginUser} = useContext(AuthContext);
    return (
    <div id="login-background">
        <div id="login-container">
            <h2>Log In</h2>
            <form id="login-form" onSubmit={loginUser}>
                <div id="username-container">
                    <input type="text" name="username" placeholder='Username'></input>
                </div>
                <div id="password-container">
                    <input type="password" name="password" placeholder='Password'></input>
                </div>
                <button className="login-signup-btn" type="submit">Log In</button>
            </form>
        </div>
    </div>)
}

export default LogIn;