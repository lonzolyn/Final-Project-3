import React, {useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';

const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('')
  let [data, setData] = useState([])
  //API KEY//

useEffect(() => {
      if(search) {
        const API_URL = 'https://developer.nps.gov/api/v1/parks?parkCode='+ search +'&api_key=YKBdqXoSZWQ6mPm8F6O5RQOEOAPb9sOWeEJb73f6'
          const fetchData = async () => {
              document.title = `${search} parks`
              const response = await fetch(API_URL)
              const resData = await response.json()
              //if (resData.results.length > 0) {
                console.log(resData.data);
                  return setData(resData.data)
              /*} else {
                  return setMessage('Not Found.')
              }*/
          }
          fetchData()
      }
  }, [search])

  const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
  }


  return (
      <div>
        <h1>Your Adventure Begins Here...</h1>
          <SearchBar handleSearch={handleSearch} />
          {message}
          <Gallery data={data} />
          <NavbarComp></NavbarComp>
      </div>
      
  )
}

export default App
