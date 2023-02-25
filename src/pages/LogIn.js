import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function LogIn() {
    let {loginUser} = useContext(AuthContext);
    return (
    <div id="login-container">
        <h2>Log In</h2>
        <form id="login-form" onSubmit={loginUser}>
            <div id="username-container">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"></input>
            </div>
            <div id="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password"></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default LogIn;