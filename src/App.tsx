import React from 'react';
import './App.css';
import {SiteRouter} from '../src/components/routes';
import {HttpClient} from '../src/helpers/httpClient';
const App: React.FC = () => {
  let myHttpClient:Object = new HttpClient('https://api.producthunt.com/v2');
  return (
    <div className="App">
    <SiteRouter/>
    </div>
  );
}

export default App;
