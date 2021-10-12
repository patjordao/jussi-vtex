import React from 'react';

const SearchBox = (props) => {
  return (
    <div className='searchbox'>
      <input
        type='search'
        className='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
      <span></span>
    </div>
  );
};

export default SearchBox;
