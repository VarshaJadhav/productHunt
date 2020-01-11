import React from 'react';

interface HomeProps {

}

interface HomeState {

}

export default class Home extends React.Component <HomeProps,HomeState>{

  constructor(props:HomeProps){
    super(props);
  }
  render(){
    return(
      <React.Fragment>
        <h1>This is list page.</h1>
      </React.Fragment>
    )
  }
}