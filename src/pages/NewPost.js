import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function NewPost() {
    let [file, setFile] = useState(null)
    let {authTokens, user} = useContext(AuthContext);
    const navigate = useNavigate();

    let createPost = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('author',+user.user_id)
        uploadData.append('title',e.target.title.value)
        uploadData.append('image', file, file.name)
        uploadData.append('caption', e.target.caption.value)

        let response = await fetch('http://127.0.0.1:8000/api/v1/', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: uploadData
        });
        let data = await response.json();
        if (response.status === 201) {
            navigate("/");
        } else {
            alert("Something went wrong");
        };
    }

    return (
    <div id="newpost-container">
        <h2>New Post</h2>
        <form id="newpost-form" onSubmit={createPost}>
            <div id="image-upload-container">
                <input type="file" accept="image/png, image/jpeg" name="image" onChange={ e => setFile(e.target.files[0])}/>
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