import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function EditPost() {
    let {authTokens, user} = useContext(AuthContext);
    const navigate = useNavigate();

    let currentUrl = window.location.href
    let postId = currentUrl.slice(currentUrl.indexOf("editpost/")+12)

    let getPost = async () => {
        let currentPost = await fetch(`http://127.0.0.1:8000/api/v1/${postId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        });
        return currentPost;
    }

    useEffect(() => {
        getPost();
    }, [])

    let updatePost = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('author',+user.user_id)
        uploadData.append('title',e.target.title.value)
        uploadData.append('image', e.target.image.files[0], e.target.image.files[0].name)
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
    <div id="editpost-background">
        <div id="editpost-container">
            <h2>Edit Post</h2>
            <form id="editpost-form" onSubmit={updatePost}>
                <div id="image-upload-container">
                    <input type="file" accept="image/png, image/jpeg" name="image"/>
                </div>
                <div id="title-container">
                    <input type="text" name="title" placeholder='Title'></input>
                </div>
                <div id="caption-container">
                    <input type="text" name="caption" placeholder='Caption'></input>
                </div>
                <button className="login-signup-btn" type="submit">Update Post</button>
            </form>
        </div>
    </div>)
}

export default EditPost;