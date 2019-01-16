import React from "react";

const FilterForm = ({ filter, onChange }) => (
  <div>
    <label htmlFor="filter">Filter by Product Name: </label>
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={onChange}
      autoFocus
    />
  </div>
);

export default FilterForm;
