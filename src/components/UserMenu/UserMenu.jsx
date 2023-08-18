import { logOut } from 'redux/authorisation/AuthOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/authorisation/AuthSelectors';
import css from  './Menu.module.css'
const UserMenu = () => {
  const dispatch = useDispatch();
  const { email, name } = useSelector(selectUser);

  return (
    <div 
    className={css.user_info_block}
    >
      <div className={css.user_info_text}> 
        <p 
        className={css.user_info}
        >User: {name}</p>
        <p 
        className={css.user_info}
        > Mail: {email}</p>
      </div>
      <button
        type="button" href=""
        className={css.user_button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
