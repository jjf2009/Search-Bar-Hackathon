// src/SearchBar.js
import React, { useState } from 'react';
import countries from './countries.json'; // Import the JSON data

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter countries based on the search term (by name or capital)
    const filteredCountries = countries.filter((user) =>
      user.country.toLowerCase().includes(value.toLowerCase()) ||
      user.capital.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredCountries);
  };

  return (
    <div className="container mt-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by country name or capital..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchTerm && (
        <div className="mt-2 bg-light border rounded">
          {results.length > 0 ? (
            <ul className="list-group">
              {results.map((user, index) => (
  <li key={index} className="list-group-item">
    {user.country} - {user.capital} -<img src={`https://flagcdn.com/16x12/${user.code}.png`}
alt={`${user.country} Flag`}/>
  </li>
))}
            </ul>
          ) : (
            <p className="text-center p-2">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
