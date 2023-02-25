import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function SignUp() {
    let {signupUser} = useContext(AuthContext);
    return (
    <div id="signup-container">
        <h2>Sign Up</h2>
        <form id="signup-form" onSubmit={signupUser}>
            <div id="username-container">
                <input type="text" name="username" placeholder='Username'></input>
            </div>
            <div id="email-container">
                <input type="email" name="email" placeholder='Email'></input>
            </div>
            <div id="password1-container">
                <input type="password" name="password1" placeholder='Password'></input>
            </div>
            <div id="password2-container">
                <input type="password" name="password2" placeholder='Retype Password'></input>
            </div>
            <button className="login-signup-btn" type="submit">Sign Up</button>
        </form>
    </div>)
}

export default SignUp;