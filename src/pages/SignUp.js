import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function SignUp() {
    let {signupUser} = useContext(AuthContext);
    return (
    <div id="signup-container">
        <h2>Sign Up</h2>
        <form id="signup-form" onSubmit={signupUser}>
            <div id="username-container">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"></input>
            </div>
            <div id="email-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email"></input>
            </div>
            <div id="password1-container">
                <label htmlFor="password1">Password</label>
                <input type="password" name="password1"></input>
            </div>
            <div id="password2-container">
                <label htmlFor="password2">Password</label>
                <input type="password" name="password2"></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>)
}

export default SignUp;