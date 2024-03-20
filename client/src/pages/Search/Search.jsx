import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Location from '../../components/Location/Location';
import Card from '../../components/Card/Card';
import './Search.css'

function Search() {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState(''); // State to store the user's query

  // Function to handle input changes and update the query state
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAddressSubmit = (address) => {
    // Handle the address submission logic here
    console.log(`Submitted address: ${address}`);
  };

  useEffect(() => {
    // Construct the API URL with the query
    const apiUrl = `http://localhost:5000/result?query=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [query]); // Re-fetch data when the query changes // The empty dependency array [] means this effect runs once on component mount


    return (
      <>
        <Navbar />
        <Location onAddressSubmit={handleAddressSubmit}/>
        <form
          onChange={handleInputChange}
          value={query}>
            <input className='search' id="search" type="search" placeholder="Search..." autofocus required />
            <button className="btn-search" type="submit">Go</button>    
        </form>

        <div>
          <h1>Data from Backend via Search</h1>
          <>
            <div className="result">
              {records.map((list) => (
                <Card list={list}/>
              ))}
            </div>
          </>
        </div>
      </>
  );

}

export default Search;
