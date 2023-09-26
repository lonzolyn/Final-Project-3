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
    