import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';

function PostDetail() {
    let {authTokens, user} = useContext(AuthContext);

    let [post, setPost] = useState([]);

    let currentUrl = window.location.href
    let postId = currentUrl.slice(currentUrl.indexOf("postdetail/")+11)

    let getPost = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/v1/${postId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        });
        let data = await response.json()

        if (response.status === 200) {
            setPost(data)
        } else if (response.statusText === 'Unauthorized') {
            console.log("unauthorized")
        };
    }

    

    useEffect(() => {
        getPost();
    }, [])

    return (
    <div id="postdetail-container">
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title}/>
    </div>)
}

export default PostDetail;