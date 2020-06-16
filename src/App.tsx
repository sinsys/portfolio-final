// App container - App.tsx
// Core imports
import React from 'react';

// Component Imports
import Header from './components/scaffold/Header';
import Router from './routers/Router';

// File imports
import './App.scss';

function App() {
  return (
    <div id="page-wrapper">

      <Header id="header" />

      <Router />

    </div>
  );
}

export default App;
