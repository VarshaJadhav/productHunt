import React from "react";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from "../Home";
import LikedPostList from "../LikedPosts";
import { Header } from '../common/Header';
/* Router for the App */
export const SiteRouter:React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/liked" component={LikedPostList} />
          </Switch>
      </div>
    </Router>
  );
}
