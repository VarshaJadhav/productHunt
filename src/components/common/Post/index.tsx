import React, { useState } from 'react';

type postProps ={
  postData: any
  likeThis: Function
}
export const Post:React.FC<postProps> = (props)=>{
  let allAuthersList = props.postData.makers.map((author:any)=>author.name).join(', ')
  let topicList = props.postData.topics.map((topic:any)=>topic.name).join(', ')
  return(
    <div>
      <a href={props.postData.redirect_url} title={props.postData.name} >
      <h3>{props.postData.name}</h3>
      <h5>{props.postData.tagline}</h5>
      <img src={props.postData.thumbnail.image_url} alt={props.postData.name} />
      <span>Created at : {props.postData.day}</span>
      <span>Author(s): {allAuthersList}</span>
      <p>Topics: {topicList}</p>
      </a>
      <span onClick={()=>props.likeThis(props.postData)}>{props.postData.isLiked ? 'liked': 'like'}</span>
    </div>
  )
}