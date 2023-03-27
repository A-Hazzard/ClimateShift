import Home from './Components/Home/Home'
import StoryBoard from './Components/StoryBoard/StoryBoard'
import Community from './Components/Dashboard/Community'
import Test from './Components/Dashboard/Test'
import Canva from './Components/StoryBoard/Canva'
import Login from './Components/Members/Login';
import Signup from './Components/Members/Signup';

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//This is where everything will be rendered mainly
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/storyboard" element={<StoryBoard/>} />
            <Route path="/storyboard/canva" element={<Canva/>} />
            <Route path="/test" element={<Test/>} />
            <Route path="/community" element={<Community/>} />
            <Route path="/members/signup" element={<Signup/>} />
            <Route path="/members/login" element={<Login/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
