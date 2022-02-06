import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Users from "./HomeWprk1/componennts/Users";
import Posts from "./HomeWprk1/componennts/Posts";
import Comments from "./HomeWprk1/componennts/Comments";
import UserDetails from "./HomeWork2/components/UserDetails/UserDetails";

import css from './App.module.css'

function App() {

  return (

  <div >
    {/*<Users/>*/}
    {/*<Posts/>*/}
    {/*<Comments/>*/}

    <div className={css.wrap}>
      <Users/>
      <UserDetails/>
    </div>

    <Posts/>

  </div>
  )
}

export default App;
