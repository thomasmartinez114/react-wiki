import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";
// import React, { useState, useEffect } from "react";
// import Search from "./components/Search/Search"
// import Card from "./components/Card/Card"
// import Pagination from "./components/Pagination/Pagination"
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';
// import Navbar from "./components/Navbar/Navbar"
// let api = `https://rickandmortyapi.com/api/character/?page=1`;


function App() {
    return (
      <div className="App">
        <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">WiKi</span> </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
            <div className="col-8">
              <div className="row">
                <Cards />
              </div>
            </div>
          </div>
      </div>

      </div>
    );
  }

export default App;
