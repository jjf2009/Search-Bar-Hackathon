import React from 'react';
import './App.css'; // Keep this if you have custom CSS
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="my-4 text-center ">Fast Finder Search Bar</h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;