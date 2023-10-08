import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import TweetBox from './TweetBox';
import React,{useState} from 'react';
import Feed from './feed';
function App() {

  

  return (
    <div className="app">

      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;