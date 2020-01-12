import React from 'react';
import {
  COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS
} from '../../const';

const INITIAL_STATE = {
  isFetchingCommentList: false,
  commentList:[],
  error:'',
  pageNo: ''
};


export default function commentListReducer(state=INITIAL_STATE,action:any){
  switch(action.type){
    case COMMENT_LIST_REQUEST:
    return {
      ...state,
      isFetchingCommentList: action.payload.isFetchingCommentList,
      pageNo: action.payload.pageNo
    }
    case COMMENT_LIST_SUCCESS:
    return {
      ...state,
      isFetchingCommentList: action.payload.isFetchingCommentList,
      commentList: action.payload.commentList
    }
    default:
    return state;
  }
}