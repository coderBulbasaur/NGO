import React from 'react'
import Home from './component1/Home';
import Login from './component1/Login';
import Join from './component1/Join';
import Volunteer from './component1/Volunteer';
import Ngo from './component1/Ngo';
import Dashboard from './component1/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Join/>}/>
          <Route exact path="/volunteer" element={<Volunteer/>}/>
          <Route exact path="/ngo" element={<Ngo/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </Router>
    </>
  )
}

export default App
