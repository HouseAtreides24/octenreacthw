
import './App.css';

import UserDetails from "./HomeWork2/components/UserDetails/UserDetails";
import Users from './HomeWork2/components/Users/User'
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
