import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar'
import LandingPage from './Pages/Landing/Landing'
function App() {
  return (
    <Fragment>
      <Navbar />
      <LandingPage/>
    </Fragment>
  );
}

export default App;
