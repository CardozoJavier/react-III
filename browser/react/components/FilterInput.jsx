import React from 'react';
const FilterInput = ({handleChange}) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input onChange={handleChange}
        className="form-control"
        placeholder="Enter artist name"   
      />
    </form>
  );
}
export default FilterInput;