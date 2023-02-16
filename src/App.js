import React, { useState } from 'react'
import Navbar from './movieapi/navbar/Navbar'
import Home from './movieapi/pages.jsx/Home'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Popularpage from './movieapi/pages.jsx/Popularpage';
import Topratedpage from './movieapi/pages.jsx/Topratedpage';
import Loginpage from './movieapi/LoginPage/Loginpage'
import DataProvider from './movieapi/context/DataProvider';
import 'bootstrap/dist/css/bootstrap.min.css';


const PrivateRoute = ({ isAuth }) => {
  return isAuth ?
    <>
      <Navbar />
      <Outlet />
    </> :
    < Navigate replace to="/login" />
}


const App = () => {
  const [isAuth, isUserAuth] = useState(true)


  return (
    <>
      {/* <Navbar /> */}
      <DataProvider>
        <div className="container-fluid">
          <Routes>

            <Route path="/login" element={<Loginpage isUserAuth={isUserAuth} />} />

            <Route path='/' element={<PrivateRoute isAuth={isAuth} />} >
              <Route path="/" element={<Home />} />
            </Route>

            <Route path='/popularpage' element={<PrivateRoute isAuth={isAuth} />} >
              <Route path="/popularpage" element={<Popularpage />} />
            </Route>

            <Route path='/topratedpage' element={<PrivateRoute isAuth={isAuth} />} >
              <Route path="/topratedpage" element={<Topratedpage />} />
            </Route>
          </Routes>
        </div>
      </DataProvider>
    </>
  )
}

export default App

