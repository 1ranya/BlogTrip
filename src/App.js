import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import BlogPage from './components/BlogPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddBlogForm from './components/AddBlogForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={BlogPage} />
          <Route path='/AddBlogForm' component={AddBlogForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
