import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/SliceFilters';
import css from './Filter.module.css'
export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <div>
      <p className={css.contacts_input_title} ><b>Find contact by name</b></p>
      <input
        type="text"
        onChange={onFilterChange}
        placeholder="Search by name"
      />
    </div>
  );
};
