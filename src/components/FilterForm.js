import React from 'react';

const FilterForm = ({ value = '', onChange }) => (
  <div>
    <label htmlFor="filter">
      Filter by Product Name:{' '}
      <input
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default FilterForm;
