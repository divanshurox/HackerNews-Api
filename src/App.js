import React, {Component} from 'react';
import './App.css';
import {Route,Switch, Router} from 'react-router-dom';
import Navbar from './components/NavBar';
import LatestPost from './components/LatestPost';
import Comments from './components/Comments';
import TopPost from './components/TopPost';
import About from './components/About';

class App extends Component{
  render(){
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LatestPost} />
          <Route path="/top" component={TopPost} />
          <Route path="/comments/:title/:id" component={Comments} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}
export default App;
