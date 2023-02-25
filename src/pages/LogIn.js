import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function LogIn(props) {
    let {loginUser} = useContext(AuthContext);
    return (
    <div id="login-container">
        <form id="login-form" onSubmit={loginUser}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default LogIn;