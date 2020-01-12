import React, { useState } from 'react';
import './App.css';
import {SiteRouter} from '../src/components/routes';
import { HttpClient,httpClientProps } from './helpers/httpClient';
import { BASE_URL } from './const';
let isLoadedOnces = false;
let client:httpClientProps;
const App: React.FC = (props:any) => {
  const [isPageLoaded,togglePageLoad] = useState(false);
  client = new HttpClient(BASE_URL);
  if(!isLoadedOnces) {
    localStorage.clear();
    isLoadedOnces = true;
    client.init()
    .then((data:any)=>{
      localStorage.setItem('bearerToken',data);
      togglePageLoad(true)     
    })
  }
  return (
    <div className="App">
    {
      isPageLoaded ?
    <SiteRouter/>
    : <React.Fragment>Loading....</React.Fragment>
    }
    </div>
  );
}

export default App;
