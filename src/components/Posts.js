import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../Firestore';
function Posts() {
    
    const [post,setPost] = useState({});
    const {postId} = useParams()

    useEffect(()=>{
        firestore.collection('blog-content').doc(postId).get().then((value)=>{
            setPost(value.data())
        })
    },[])
    return (
        <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
    );
}

export default Posts;