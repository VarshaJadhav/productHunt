import React from 'react';
import { POST_LIST_REQUEST, BASE_URL } from '../const';
import { Action } from 'redux';
import { HttpClient } from '../helpers/httpClient';
import { postListSuccess } from '../actions/posts';

const client = new HttpClient(BASE_URL);

export default function httpMiddleware({dispatch}:any){
    return(next:Function)=>{
      return(action:Action)=>{
        next(action);
        if(action.type === POST_LIST_REQUEST){
          client.fetchPosts().then((data:any)=>{
             dispatch(postListSuccess(data));
          });

        }
      }
    }
}

