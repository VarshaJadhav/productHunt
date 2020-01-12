import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Post } from '../common/Post';

import './style.css';

interface LikedPostListProps {
  likedPosts: Array<any>
}

interface LikedPostListState {
  
}
 class LikedPostList extends Component<LikedPostListProps,LikedPostListState> {
  constructor(props:LikedPostListProps){
    super(props);
  }

  renderLikedPost(){
    return this.props.likedPosts.map(post=>{
      return <Post postData={post} key={post.id} />
    })
  }
  render(){
    return(
      <div className="container liked-page">
      <h2>Liked posts: </h2>
        <div className="post-container">
        {
          this.props.likedPosts.length ?
          this.renderLikedPost()
          : <div>You don't have any liked post.</div>
        }
        </div>
      </div>
    )
  }
}


const mapStateToProps =(state:any)=>{
  const {
    postListReducer: {
      likedPosts
    }
  } =state;
  return {
    likedPosts
  }
}
export default connect(mapStateToProps,{})(LikedPostList)