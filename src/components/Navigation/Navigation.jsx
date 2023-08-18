import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoggedIn } from 'redux/authorisation/AuthSelectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav 
    >
      <NavLink 
      className={css.nav_home}
       to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink 
        className={css.nav_contacts}
        to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
