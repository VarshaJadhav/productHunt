import React, { useState } from 'react';

import './style.css'
import { Link } from 'react-router-dom';

type postProps ={
  postData: any
  likeThis?: Function
  isLiked?: Boolean
}
export const Post:React.FC<postProps> = (props)=>{
  let allAuthersList = props.postData.makers.map((author:any)=>author.name).join(', ')
  let topicList = props.postData.topics.map((topic:any)=>topic.name).join(', ');
  const postPath = { 
    pathname:`/posts/${props.postData.id}&${props.postData}`,
    params:{
      name: props.postData.name,
      commentCount: props.postData.comments_count
    }
  };
  return(
    <div className="post">
      <Link to={postPath} title={props.postData.name} >
      <h3>{props.postData.name} <span className="created">({props.postData.day})</span></h3>
      <h5>{props.postData.tagline}</h5>
      <img src={props.postData.thumbnail.image_url} alt={props.postData.name} />
      <span className="author"><strong>Author(s): </strong>{allAuthersList}</span>
      <p><strong>Topics: </strong>{topicList}</p>
      </Link>
      {
        props.likeThis ?
      <span className={`like-btn ${props.isLiked ? 'unlike': ''}`}  onClick={()=>props.likeThis && props.likeThis(props.postData,props.isLiked ? true : false)}>{props.isLiked ? 'liked': 'like'}</span>
      : null
      }
    </div>
  )
}