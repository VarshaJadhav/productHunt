import React, {Component } from 'react';
import { connect } from 'react-redux';

interface LikedPostListProps {
  likedPosts: Array<any>
}

interface LikedPostListState {
  
}
 class LikedPostList extends Component<LikedPostListProps,LikedPostListState> {
  constructor(props:LikedPostListProps){
    super(props);
  }

  componentDidMount(){
    console.log(this.props.likedPosts)
  }
  render(){
    return(
      <React.Fragment>
        This is Listing Page.
      </React.Fragment>
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