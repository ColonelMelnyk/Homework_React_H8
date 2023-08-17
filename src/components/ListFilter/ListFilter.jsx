import { useDispatch } from 'react-redux';
import { updatedFilter } from 'redux/SliceFilters';
import css from './Form.module.css'
export const ListFilter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => {
    dispatch(updatedFilter(event.target.value));
  };
  return (
    <label className= {css.filter_block}> Find contacts by name
    <input 
     onChange={onFilterChange}
      type="text"/>
  </label>
  );
};