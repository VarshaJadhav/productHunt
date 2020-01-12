import { COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../const";


export const commentListRequest =(data:any) =>{
  return {
    type: COMMENT_LIST_REQUEST,
    payload: {
      isFetchingCommentList: true,
      postId: data.postId,
      pageNo: data.pageNo
    }
  }
}

export const commentListSuccess =(data:any) =>{
  return {
    type: COMMENT_LIST_SUCCESS,
    payload: {
    commentList:  data.data.comments,
    isFetchingCommentList: false
    }
  }
}