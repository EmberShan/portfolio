import React, { useState, useEffect, useContext } from 'react'
import Loading from '../pages/Loading';
// for custom cursor 
import DotRing from '../components/CustomCursor/DotRing/DotRing'

import './App.scss';

import Page from '../pages/AllPages/Page.js';
import Project2 from '../Detail/project2';
import Impressionism from '../Detail/impressionism';
import MDP from '../Detail/mdp';
import Rutabagga from '../Detail/rutabagga';
import Project3 from '../Detail/project3';


import {
  HashRouter,
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";


function App(){
  const [isLoading, setIsLoading] = useState(false); 

  return (
    <div className="App">
      <DotRing/> 
      {isLoading ? (<Loading />) : 
      (
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
          <ScrollToTop>
          <Routes>
              <Route exact path="" element={<Page />} />
              <Route exact path="project2" element={<Project2 />} />
              <Route exact path="impressionism" element={<Impressionism />} />
              <Route exact path="mdp" element={<MDP />} />
              <Route exact path="rutabagga" element={<Rutabagga />} />
              <Route exact path="project3" element={<Project3 />} />
            </Routes>
          </ScrollToTop>
          
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
