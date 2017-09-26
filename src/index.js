import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import Layout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';


ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/PostList" component={PostList}/>
        <Route path="/CreatePost" component={CreatePost}/>
        <Route path="/ShowPost/:_id" component={ShowPost}/>
      </Switch>
      </Layout>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
