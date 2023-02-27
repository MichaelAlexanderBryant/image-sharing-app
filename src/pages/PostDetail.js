import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';

function PostDetail() {
    let {authTokens, user} = useContext(AuthContext);

    let [post, setPost] = useState([]);
    let [comments, setComments] = useState([]);

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

    let getComments = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/v1/comments/${postId}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        });
        let data = await response.json()

        if (response.status === 200) {
            setComments(data)
        } else if (response.statusText === 'Unauthorized') {
            console.log("unauthorized")
        };
    }

    

    useEffect(() => {
        getPost();
        getComments();
    }, [])

    return (
    <div id="postdetail-container">
        <h2>{post.title}</h2>
        <img className="img-detail" src={post.image} alt={post.title}/>
        <div className="comments">
        {comments.map(comment => {
           return (<div><h3>{comment.author}</h3><p>{comment.comment}</p></div>)
        })}
        </div>
    </div>)
}

export default PostDetail;