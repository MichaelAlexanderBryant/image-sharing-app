import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
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

    let postComment = async (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('post', postId)
        uploadData.append('comment',e.target.comment.value)
        uploadData.append('author',user.username)

        let response = await fetch(`http://127.0.0.1:8000/api/v1/comments/${postId}/`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: uploadData
        });
        let data = await response.json();
        if (response.status === 201) {
            window.location.reload();
        } else {
            alert("Something went wrong");
        };
    }

    let deleteComment = async (e) => {
        let response = await fetch(`http://127.0.0.1:8000/api/v1/comments/modify/${e.target.id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        });
        if (response.status === 204) {
            window.location.reload();
        } else {
            alert("Something went wrong");
        };
    }



    return (
        <div id="postdetail-container" key={postId}>
            <div className="post-header">
                <h2 id="post-title">{post.title}</h2>
                <h4 id="post-author">{post.author}</h4>
            </div>
            
            <div className="img-container"><img className="img-detail" src={post.image} alt={post.title}/></div>
            <div className="comments">
                <form className="comment-form" key={postId + " form"} onSubmit={postComment}>
                        <textarea name='comment' placeholder='Write a comment'></textarea>
                        <div className="comment-btn-container">
                            <button className="post-comment-btn" type="submit">Post</button>
                        </div>
                </form>
                <h3 id="comment-count">{comments.length + (comments.length === 1 ? " comment" : " comments")}</h3>
                {comments.map((comment, idx) => {
                    return (
                    <div className="comment" key={comment.author + comment.post + idx}>
                        <div className="author-delete-comment">
                        <h4 key={comment.author}>{comment.author}</h4>
                        {user.username === comment.author ? <span className="red-delete" id={comment.id} onClick={deleteComment}>Delete</span> : null}
                        </div>
                        <p key={comment.comment}>{comment.comment}</p>
                        
                    </div>)
                })}
            </div>
        </div>
        )
}

export default PostDetail;