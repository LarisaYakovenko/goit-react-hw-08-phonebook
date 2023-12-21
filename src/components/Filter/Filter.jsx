import { useSelector, useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const getFilter = state => state.filter.filter;
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    const { value } = e.currentTarget;
    dispatch(changeFilter(value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </label>
  );
};
