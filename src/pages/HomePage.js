import React, {useState, useEffect} from 'react';

function HomePage() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        let apiUrl = 'http://127.0.0.1:8000/api/v1/'
        async function fetchPosts() {
            let apiData = await fetch(apiUrl,
                {headers: {"Authorization": "Token 33f0adc444421dc942929a65088f6c7891a01ddb"}});
            let apiJson = await apiData.json();
            setPosts(apiJson);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(item => ( 
                <div key={item.image}>
                    <div>{item.title}</div>
                    <img src={item.image} alt={item.title}/>
                </div> ))}
        </div>
    )
}

export default HomePage;