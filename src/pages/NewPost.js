import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';

function NewPost() {
    let {createPost} = useContext(AuthContext);
    return (
    <div id="newpost-container">
        <h2>New Post</h2>
        <form id="newpost-form" onSubmit={createPost}>
            <div id="image-upload-container">
                <input type="file" accept="image/png, image/jpeg" name="image"/>
            </div>
            <div id="title-container">
                <input type="text" name="title" placeholder='Title'></input>
            </div>
            <div id="caption-container">
                <input type="text" name="caption" placeholder='Caption'></input>
            </div>
            <button className="login-signup-btn" type="submit">Create Post</button>
        </form>
    </div>)
}

export default NewPost;