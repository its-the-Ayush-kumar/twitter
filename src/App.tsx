import React, { ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import { routeManifest } from './routeManifest';

function App(): ReactElement {
  return (
    <Router>
      <Suspense fallback="">
        <Routes>
          <Route path={ routeManifest.homeRoute.path } element={<Home />}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
