import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Users from "./HomeWprk1/componennts/Users";
import Posts from "./HomeWprk1/componennts/Posts";
import Comments from "./HomeWprk1/componennts/Comments";

function App() {

  return (

  <div >
    <Users/>
    <Posts/>
    <Comments/>
  </div>
  )
}

export default App;
