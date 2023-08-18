import { NavLink } from 'react-router-dom';
import css from './Auth.module.css'
export const AuthNav = () => {
  return (
    <div className= {css.nav_block}>
      <NavLink className={css.nav_register} to="/register">
      Registration
      </NavLink>
      <NavLink className={css.nav_login} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
