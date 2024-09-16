import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Signup from './components/Account/Signup.js';
import Signin from './components/Account/Signin.js';
import Orders from './components/Order/Orders.js';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          <Route exact path="/signin" element={<Signin/>}></Route>
          <Route exact path='/orders' element={<Orders/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
