<<<<<<< HEAD
import React,{useState} from 'react'
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = () => { 
        const[input,setInput] = useState("")
        //Getting the search bar to fetch from API//
        const fetchData = (value) => {
            
            let url="https://developer.nps.gov/api/v1/parks?parkCode="+value+"&api_key=YKBdqXoSZWQ6mPm8F6O5RQOEOAPb9sOWeEJb73f6"
            console.log("url "+ url)
            fetch(url, {
                method: "GET",
            })
            .then((response) => response.json () )
            .then(json => {
            console.log(json);
            
            });
             
        };

        
        const handleChange = (value) => {
            setInput(value)
            console.log(value.length)
            if(value.length>3){
                fetchData(value)
            }
        }
    return(
        <div className= "input-wrapper">
        <FaSearch id= "search-icon" />
        <input placeholder= "Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
        </div>
    )
}
=======
import React,{useState} from 'react';
import '/Users/khadijamumford/Final-Project-3/frontend/src/components/SearchBar.css';

function SeachBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <input type="text" placeholder="Enter a search term here" onChange={
                (e) => setSearchTerm(e.target.value)
            }/>

            <button>
            <input type="submit" />
            </button>
        </form>
    )
}

export default SeachBar
    
>>>>>>> main
