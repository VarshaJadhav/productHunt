import React from 'react';
import { POST_LIST_REQUEST, BASE_URL, COMMENT_LIST_REQUEST } from '../const';
import { Action } from 'redux';
import { HttpClient } from '../helpers/httpClient';
import { postListSuccess } from '../actions/posts';
import { commentListSuccess } from '../actions/comments'
const client = new HttpClient(BASE_URL);

export default function httpMiddleware({dispatch}:any){
    return(next:Function)=>{
      return(action:any)=>{
        next(action);
        if(action.type === POST_LIST_REQUEST){
          client.fetchPosts(action.payload.day).then((data:any)=>{
             dispatch(postListSuccess(data));
          });   
        }
        if(action.type == COMMENT_LIST_REQUEST){
          client.fetchComments(action.payload).then((data:any)=>{
            dispatch(commentListSuccess(data));
         });
        }
      }
    }
}

