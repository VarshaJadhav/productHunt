import React from 'react';
import { POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAILURE, LIKE_POST } from '../../const';

interface postListReducerType {
  postList: Array<any>
  likedPosts: Array<any>
  isListLoaded: Boolean
  isFetchingPostRequest: Boolean
}

interface actionType {
  type: string,
  payload: any
}

const INITIAL_STATE = {
  postList: [],
  likedPosts: [],
  isListLoaded: false,
  isFetchingPostRequest:false,
  errorText: ''
}

export default function postListReducer(state:postListReducerType=INITIAL_STATE,action:actionType){
  switch(action.type){
    case POST_LIST_REQUEST:
    return {
      ...state,
      isFetchingPostRequest: action.payload.isFetchingPostRequest
    }
    case POST_LIST_SUCCESS:
    return {
      ...state,
      isFetchingPostRequest: action.payload.isFetchingPostRequest,
      postList: action.payload.postList
    }
    case POST_LIST_FAILURE:
    return {
      ...state,
      isFetchingPostRequest: action.payload.isFetchingPostRequest,
      errorText: action.payload.errorText
    }

    case LIKE_POST:
    return {
      ...state,
      likedPosts: [...state.likedPosts,action.payload.likedPost]
    }

    default:
    return state;
  }
}