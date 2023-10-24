import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';

/* Pages */
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Home from './components/pages/Home';

/* Context */
import { UserProvider } from './context/UserContext';

class App extends Component {
  render() {
    return (
      <Router>
        <UserProvider>
          <Navbar />
          <Message />
            <Container>
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </Container>
          <Footer />
        </UserProvider>
      </Router>
    );
  }
}

export default App;
