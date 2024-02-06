import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from '../Page/Home';
import LoginPage from '../Page/Login';
import Signup from '../Page/Signup';


const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/' element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing;