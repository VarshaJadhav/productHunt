import React from 'react';

import './style.css'
export const Comment = (props:any)=>{
  let createdDate = `${new Date(props.commentData.created_at).toLocaleDateString()} ${new Date(props.commentData.created_at).toLocaleTimeString()}` ;
  return(
    <div className="comment">
      <p><strong>{props.commentData.user_id}:</strong>{props.commentData.body}</p>
      <span className="date">posted at: {createdDate}</span>
    </div>
  )
}