import { useDispatch } from 'react-redux';
import { register } from 'redux/authorisation/AuthOperations';
import css from './Register.module.css'
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.registration_container} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.input_}>
        <label>
        <p className={css.registration_label}>Username</p>
          <input type="text" name="name" />
        </label>
      </div>
      <div className={css.input_}>
        <label>
         <p className={css.registration_label}>Email</p>
          <input 
          type="email" name="email" />
        </label>
      </div>
      <div className={css.input_}>
        <label>
        <p className={css.registration_label}>Password</p>
          <input 
          type="password" name="password" />
        </label>
      </div >
      <button type="submit" className={css.register_button} >Registration</button>
    </form>
  );
};
