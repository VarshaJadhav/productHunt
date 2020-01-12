import React from 'react';
import { httpClientProps } from '../../helpers/httpClient'
import { connect} from 'react-redux';
import { Post } from '../common/Post';
import {postListRequest, likePost, unLikePost } from '../../actions/posts';

import './style.css';

interface HomeProps {
  postList: Array<any>
  likedPostIds: Array<Number>
  isFetchingPostRequest: Boolean
  postListRequest: Function
  likePost: Function
  unLikePost: Function
  selectedDate: string
}

interface HomeState {
  postList: Array<any>
  isFetchingPostRequest: Boolean
  selectedDate: string
  defaultDate: string
}


class Home extends React.Component <HomeProps,HomeState>{

  constructor(props:HomeProps){
    super(props);
    this.state ={
      postList: this.props.postList,
      isFetchingPostRequest: this.props.isFetchingPostRequest,
      defaultDate :  this.props.selectedDate ? this.props.selectedDate  : this.convertDate(new Date()),
      selectedDate: this.convertDate(new Date())
    }
  }

  componentDidMount(){
    !this.state.postList.length && this.props.postListRequest(this.state.defaultDate)
  }

  convertDate(dateObj:Date){
    let date = ("0" + (dateObj.getDate())).slice(-2)
    let month = ("0" + (dateObj.getMonth() + 1)).slice(-2)
    let year =dateObj.getFullYear();
    return `${year}-${month}-${date}`
  }

  likeThis = (data:any,isLiked:Boolean) => {
    if(isLiked){
      this.props.unLikePost(data.id)
    } else {
      this.props.likePost(data);
    }
  }

  private createPostList(){
    return this.state.postList.map((postData)=>{
      let isLiked = this.props.likedPostIds.includes(postData.id);
      return(
        <Post postData={postData} key={postData.id} likeThis={this.likeThis} isLiked={isLiked} />
      )

    })
  }

  static getDerivedStateFromProps(props:HomeProps,state:HomeState){
      return {postList : props.postList,isFetchingPostRequest: props.isFetchingPostRequest}
  }

  updateDate(val:any){
    this.setState({
      selectedDate:val
    },()=>{
      this.props.postListRequest(this.state.selectedDate)
    })
  }

  render(){
    return(
      <div className="container">
      <div className="date-search">Find post by date: <input type='date' defaultValue={this.state.defaultDate} onChange={e=>this.updateDate(e.target.value)} max={this.convertDate(new Date())}/></div>
        <div className="post-container">
        {
          this.state.isFetchingPostRequest ?
          <div className="loader"></div>
          : this.createPostList()
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state:any):any =>{
  const  {
    postListReducer: {
      postList,
      isFetchingPostRequest,
      likedPostIds,
      selectedDate
    }
  } = state;
  return {
    postList,
    isFetchingPostRequest,
    likedPostIds,
    selectedDate
  }
}

export default connect(mapStateToProps,{
  postListRequest,
  likePost,
  unLikePost
})(Home);