import style from '../filter/style.module.css';
import { changeFilter } from '../../redux/slice';
import { useDispatch } from 'react-redux';

function Filter({ value }) {
  const dispatch = useDispatch();

  return (
    <div className={style.filter}>
      <label>Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
