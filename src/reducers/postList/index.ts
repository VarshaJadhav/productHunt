import React from 'react';
import { POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAILURE, LIKE_POST, UNLIKE_POST } from '../../const';

interface postListReducerType {
  postList: Array<any>
  likedPosts: Array<any>
  likedPostIds: Array<Number>
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
  likedPostIds: [],
  isListLoaded: false,
  isFetchingPostRequest:false,
  selectedDate: '',
}

export default function postListReducer(state:postListReducerType=INITIAL_STATE,action:actionType){
  switch(action.type){
    case POST_LIST_REQUEST:
    return {
      ...state,
      isFetchingPostRequest: action.payload.isFetchingPostRequest,
      selectedDate: action.payload.day
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
      likedPosts: [...state.likedPosts,action.payload.likedPost],
      likedPostIds: [...state.likedPostIds,action.payload.likedPostId]
    }

    case UNLIKE_POST:
    return {
      ...state,
      likedPosts: state.likedPosts.filter(ele=>ele.id!==action.payload.unlikeId),
      likedPostIds: state.likedPostIds.filter(ele=>ele!==action.payload.unlikeId)
    }

    default:
    return state;
  }
}