import React from 'react';
import {Link} from 'react-router-dom';

export const Header:React.FC = ()=>{
  return(
    <React.Fragment>
      <Link to='/' >Home</Link>
      <Link to='/liked' >Liked</Link>
    </React.Fragment>
  )
}