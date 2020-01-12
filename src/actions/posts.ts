import React from 'react';
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAILURE,
  LIKE_POST
} from '../const';

export const postListRequest = ()=>{
  return {
    type: POST_LIST_REQUEST,
    payload: {
      isFetchingPostRequest: true
    }
  }
}

export const likePost = (data:any)=>{
  return {
    type: LIKE_POST,
    payload: {
      likedPost: data
    }
  }
}

export const postListSuccess = (data:any)=>{
  return {
    type: POST_LIST_SUCCESS,
    payload: {
      isFetchingPostRequest: false,
      postList: data.data.posts
    }
  }
}

export const postListFailure = (data:any)=>{
  return {
    type: POST_LIST_FAILURE,
    payload: {
      isFetchingPostRequest: false,
      errorText: data.data
    }
  }
}