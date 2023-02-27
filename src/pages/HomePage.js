import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

function HomePage() {
    let [posts, setPosts] = useState([]);
    let {authTokens, logoutUser} = useContext(AuthContext);

    useEffect(() => {
        getPosts()
    },[])

    let getPosts = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/v1/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access) 
            }
        })
        let data = await response.json()

        if (response.status === 200) {
            setPosts(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser();
        };
    }

    return (
        <div id="image-container">
            <div id="image-section">
                {posts.slice(0).reverse().map(post => {
                    return (
                        <div className="white-background">
                            <a className="card-link" href={"/postdetail/"+post.id} key={post.title + post.id}>
                                <div className="image-card" key={post.title}>
                                    <img className="homepage-img" src={post.image} alt={post.title} />
                                    <div className="text-area">
                                        <p className="card-text" key={post.title}>{post.title}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }

export default HomePage;