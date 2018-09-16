import React from 'react';
import './styles.css';
import SearchInput from './components/SearchInput';


export default ({
  placeholder
}) =>
  <div className="search-container">
    <SearchInput
      placeholder={placeholder}
    />
  
  </div>
