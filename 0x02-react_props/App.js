import React, { Fragment } from 'react';
import './App.css';
import Notifications from './Notifications';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          <Login />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
