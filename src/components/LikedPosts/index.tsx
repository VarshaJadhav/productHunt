import React, {Component } from 'react';

interface LikedPostListProps {

}

interface LikedPostListState {
  
}

export default class LikedPostList extends Component<LikedPostListProps,LikedPostListState> {
  constructor(props:LikedPostListProps){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        This is Listing Page.
      </React.Fragment>
    )
  }
}