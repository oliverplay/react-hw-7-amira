import React from 'react';
import style from '../filter/style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/slice';
import { getFilter } from '../../redux/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  function handleFilterChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div className={style.filter}>
      <label>Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

export default Filter;
