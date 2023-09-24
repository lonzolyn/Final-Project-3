import React, {useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { SearchBar } from './components/SearchBar';

function App(){

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  },[])
  return (
    <div className="App">
      <div> 
        <NavbarComp />
      </div>
       <h1> Your Adventure Begins Here...</h1>
      <div className= "search-bar-container">
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}

export default App