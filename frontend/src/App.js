import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Pages */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
