import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorisation/AuthOperations';
import css from './Login.module.css'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.login_container} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.input_}>
        <label>
          <p className={css.login_label}>Email</p>
          <input 
           type="email" 
           name="email" />
        </label>
      </div>
      <div className={css.input_}>
        <label>
        <p className={css.login_label}>Password</p>
          <input  
          type="password" 
          name="password" />
        </label>
      </div>
      <button className={css.login_button} type="submit">Log In</button>
    </form>
  );
};
