import React,{Component} from 'react';
import { connect } from 'react-redux';
import { commentListRequest } from '../../actions/comments';
import { Comment } from '../common/comments';

import './style.css';

class PostDetails extends Component<any,any> {

  constructor(props:any){
    super(props);
    this.state ={
      commentCount: this.props.location.params ? this.props.location.params.commentCount : 0,
      heading: this.props.location.params ? this.props.location.params.name: 'It wont work on refresh',
      postId: this.props.match.params.id,
      commentList: [],
      pageNo:1,
      pageCount:1
    }
    this.renderNextPageComments = this.renderNextPageComments.bind(this);
  }
  componentDidMount(){
    if(!this.props.location.params){
      this.props.history.push('/')
    }
    this.setState({
      pageCount : Math.round(this.state.commentCount/5)+1
    })
    this.props.commentListRequest({postId: this.state.postId,pageNo:this.state.pageNo})
  }

  renderNextPageComments(pageno:Number){
    this.setState({
      pageNo: pageno
    })
    this.props.commentListRequest({postId: this.state.postId,pageNo:pageno})
  }

  renderComments(){
    return this.props.commentList.map((comment:any)=>{
      return(
        <Comment commentData={comment} key={comment.id}/>
      )
    })
  }

  renderPagination(){
    let list = [];
    let count = this.state.pageCount
    for(let i = 1; i < count; i++){
      list[i] = <li onClick={()=>this.renderNextPageComments(i)} key={i} className={this.state.pageNo == i? 'selected': ''}>{i}</li>
    }
    return list;
  }
  static getDerivedStateFromProps(props:any,state:any){
    return {commentList : props.commentList,isFetchingCommentList: props.isFetchingCommentList}
}

  render(){
    return(
      <div className="container">
        <h2>{this.state.heading}</h2>
        <span>Here is the list of comments:</span>
        {
          this.props.isFetchingCommentList ?
          <div className="loader"></div>
          : this.renderComments()
        }
        <ul className="pagination">
        {
          this.state.pageCount > 1 ?
          this.renderPagination()
          : null
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state:any):any => {
  const {
    commentListReducer : {
      commentList,
      isFetchingCommentList
    }
  } = state;
  return {
    commentList,
    isFetchingCommentList
  }
}


export default connect(
  mapStateToProps,{
  commentListRequest
  })(PostDetails) ;