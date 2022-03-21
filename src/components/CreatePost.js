import React, { useState } from 'react';
import {firestore} from '../Firestore';
import {useFormInputs} from './Hooks'

function CreatePost() {

    const title = useFormInputs('');
    const subTitle = useFormInputs('');
    const content = useFormInputs('');
    function handleButton(e){

        e.preventDefault();
        console.log('Title',title.value)
        console.log('Sub Title',subTitle.value)
        console.log('Content',content.value)

        firestore.collection('blog-content').add({
            title:title.value,
            subTitle:subTitle.value,
            content:content.value,
            createdAt:new Date()
        })
    }
    return (
        <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleButton}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
    );
}

export default CreatePost;