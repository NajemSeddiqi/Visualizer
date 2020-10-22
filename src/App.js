import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" component={About} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
