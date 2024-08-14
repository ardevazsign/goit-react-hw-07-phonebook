import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

// import { useDispatch, useSelector } from 'react-redux';
// import { selectFilter } from '../../redux/contacts/contactsSelector';
// import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = ({ filter, setFilter }) => {
  // const dispatch = useDispatch();
  // const filter = useSelector(selectFilter);
  //  contacts search
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <p className={css.findName}>Find Contacts by Name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
