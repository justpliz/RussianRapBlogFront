import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router';
import HomeView from './view/HomeView';

function App() {
  return (
    <div>
      <Route exact path='/'  component={HomeView}/>
      <Redirect to='/'/>
    </div>
  );
}

export default App;
