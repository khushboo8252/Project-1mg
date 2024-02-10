import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from '../Page/Home';
import LoginPage from '../Page/Login';
import MedicinePage from '../Page/Medicine';



const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/' element={<LoginPage/>}></Route>
          <Route path='/medicine' element={<MedicinePage/>}></Route>
       
        </Routes>
    </div>
  )
}

export default Routing;