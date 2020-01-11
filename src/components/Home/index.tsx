import React from 'react';
import {httpClientProps} from '../../helpers/httpClient'
interface HomeProps {
  httpClient: httpClientProps
}

interface HomeState {
  postList: Array<any>
}

export default class Home extends React.Component <HomeProps,HomeState>{

  constructor(props:HomeProps){
    super(props);
    this.state ={
      postList: []
    }
  }

  componentDidMount(){
    this.props.httpClient.fetchPosts().then((data:any)=>{
      this.setState({
        postList: data.data
      })
    })
  }
  render(){
    return(
      <React.Fragment>
        <h1>This is list page.</h1>
      </React.Fragment>
    )
  }
}