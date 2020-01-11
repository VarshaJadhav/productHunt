import  React,{Component} from 'react';
import {HttpClient,httpClientProps} from '../../helpers/httpClient'


type ProductHuntHOCStates ={
  httpClient: httpClientProps
  likedList: Array<any>
  loadPage: Boolean,
  islikedPostsIds: Array<Number>
}

export let isHeaderSetOnced = false;

export const ProductHuntHOC = (WrappedComponent:React.ComponentType<any>,data:any={}) =>{

  let myHttpClient:httpClientProps = new HttpClient('https://api.producthunt.com');
  return class extends Component<{},ProductHuntHOCStates> {
    constructor(props:any) {
      super(props);

      this.state = {
        httpClient : myHttpClient,
        likedList : [],
        loadPage: false,
        islikedPostsIds: []
      }
    }

    public updatedLikedPosts = (post:any)=> {
      this.setState({
        likedList : [...this.state.likedList,post],
        islikedPostsIds: [...this.state.islikedPostsIds,post.id]
      })
    }


    componentDidMount(){
      if(!isHeaderSetOnced) {
        this.state.httpClient.init().then(()=>{
          isHeaderSetOnced = true;
            this.setState({
            loadPage: true
            })
        })
      }
    }



    render(){
      return (
        <React.Fragment>
          {
            (this.state.loadPage || isHeaderSetOnced )&& <WrappedComponent httpClient={this.state.httpClient} likedList={!data.isHomePage && this.state.likedList} likedPostsIds={data.isHomePage && this.state.islikedPostsIds}/>
          }
        </React.Fragment>
      ) 
    }

  }
}