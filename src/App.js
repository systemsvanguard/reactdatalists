// src/App.js
import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import SiteFooter from './components/SiteFooter';
import SiteNavBar from './components/SiteNavBar';
import Home       from './pages/Home';
import ArrayList  from './pages/ArrayList';
import FileList   from './pages/FileList';
import APIList    from './pages/APIList';
import DataTable  from './pages/DataTable';
import Fruits     from './pages/Fruits';
import Fruit      from './pages/Fruit';
import Contact    from './pages/Contact';
import NotFound   from './pages/NotFound';

function App() {
  return (
    <div>
      <SiteNavBar />
      <Router>
        <Home       path="/" />
        <ArrayList  path="/arraylist" />
        <FileList   path="/filelist" />
        <APIList    path="/apilist" />
        <DataTable  path="/datatable" />
        <Fruits      path="fruits" />
        <Fruit       path="fruits/:fruitId" />
        <Contact    path="/contact" />
        <NotFound   default />
      </Router>
      <SiteFooter />
    </div>
  );
}

export default App;
