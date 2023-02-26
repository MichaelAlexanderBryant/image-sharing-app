import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function UserPostDetail() {
    let {authTokens, user} = useContext(AuthContext);

    let [post, setPost] = useState({});
    let [imagePreview, setImagePreview] = useState(null);

    let currentUrl = window.location.href
    let postId = currentUrl.slice(currentUrl.indexOf("yourposts/")+10)

    const urlToObject= async(imageUrl)=> {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], 'image.jpg', {type: blob.type});
        console.log(file)
        return file
      }

    let getPost = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/v1/yourposts/${postId}`, {
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

    let handleChange = (e) => {
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
    
    useEffect(() => {
        getPost();
    }, [])

    let navigate = useNavigate();



    let updatePost = async (e) => {
        e.preventDefault();

        let uploadData;
        
        let getUploadData = async() => {
            uploadData = new FormData();
            uploadData.append('author',+user.user_id)
            uploadData.append('title',e.target.title.value)
            if (e.target.image.files[0]) {
                uploadData.append('image', e.target.image.files[0], e.target.image.files[0].name)
                uploadData.append('caption', e.target.caption.value)}
            else {
                let originalImage = await urlToObject(post.image)
                uploadData.append('image', originalImage)
                uploadData.append('caption', e.target.caption.value)
            }
            
        }

        await getUploadData();

        let response = await fetch(`http://127.0.0.1:8000/api/v1/yourposts/${postId}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + String(authTokens.access)
            },
            body: uploadData
        });
        let data = await response.json();
        if (response.status === 200) {
            navigate("/yourposts");
        } else {
            alert("Something went wrong");
        };
    }

    return (
    <div id="postdetail-container">
        <form className='postdetail-form' onSubmit={updatePost}>
            <input type="text" name="title" defaultValue={post.title}></input>
            <img className="img-detail" src={imagePreview ? imagePreview:post.image} alt={post.title}/>
            <input type="file" accept="image/png, image/jpeg" name="image" defaultValue={post.image} onChange={handleChange}/>
            <input type="text" name="caption" defaultValue={post.caption}/>
            <button type="submit" className="login-signup-btn">Update Post</button>
        </form>
    </div>)
}

export default UserPostDetail;