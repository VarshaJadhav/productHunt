import React from 'react';
import {Link} from 'react-router-dom';

import './style.css'

export const Header:React.FC = ()=>{
  return(
    <header className="clearfix">
      <h1>Producthunt</h1>
      <div className="navigation">
      <Link to='/' >Home</Link>
      <Link to='/liked' >Liked</Link>
      </div>
    </header>
  )
}