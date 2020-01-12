import React from 'react';
import { httpClientProps } from '../../helpers/httpClient'
import { connect} from 'react-redux';
import { Post } from '../common/Post';
import {postListRequest, likePost } from '../../actions/posts';
import { Reducer } from 'redux';

interface HomeProps {
  postList: Array<any>
  isFetchingPostRequest: Boolean
  postListRequest: Function
  likePost: Function
}

interface HomeState {
  postList: Array<any>
  isFetchingPostRequest: Boolean,
}


class Home extends React.Component <HomeProps,HomeState>{

  constructor(props:HomeProps){
    super(props);
    this.state ={
      postList: this.props.postList,
      isFetchingPostRequest: this.props.isFetchingPostRequest
    }
  }

  componentDidMount(){
    this.props.postListRequest()
  }



  likeThis = (data:any) => {
    this.props.likePost(data);
  }

  private createPostList(){
    return this.state.postList.map((postData)=>{
      return(
        <Post postData={postData} key={postData.id} likeThis={this.likeThis}/>
      )

    })
  }

  static getDerivedStateFromProps(props:HomeProps,state:HomeState){

    if(props.postList.length > state.postList.length) {
      return {postList : props.postList,isFetchingPostRequest: props.isFetchingPostRequest}
    }
    return {isFetchingPostRequest: props.isFetchingPostRequest}
  }

  render(){
    return(
      <React.Fragment>
        <h1>This is list page.</h1>
        {
          this.state.isFetchingPostRequest ?
          <div>loading...</div>
          : this.createPostList()
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state:any):any =>{
  const  {
    postListReducer: {
      postList,
      isFetchingPostRequest
    }
  } = state;
  return {
    postList,
    isFetchingPostRequest
  }
}

export default connect(mapStateToProps,{
  postListRequest,
  likePost
})(Home);