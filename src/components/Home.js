import React, { useEffect, useState } from 'react';
import { firestore } from '../Firestore';
import {Link} from 'react-router-dom'
function Home() {
    const [posts,setPosts] = useState([]);
   
    useEffect(()=>{
        firestore.collection('blog-content').get().then((snapShot)=>{
            const posts = snapShot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data(),
                }
            })
            setPosts(posts)
            
        })

    },[])

    return (
        <div className="home">
        <h1>All Blogs</h1>
        <div id="blog-by">Chandu</div>
  
        {posts.map((post, index) => (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
  
            <p>{post.subTitle}</p>
          </div>
        ))}
      </div>
    );
}

export default Home;