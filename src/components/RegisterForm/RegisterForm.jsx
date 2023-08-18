import { useDispatch } from 'react-redux';
import { register } from 'redux/authorisation/AuthOperations';

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
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label>
          Username
          <input type="text" name="name" />
        </label>
      </div>
      <div >
        <label>
          Email
          <input 
          type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password
          <input 
          type="password" name="password" />
        </label>
      </div>
      <button type="submit" >
        Register
      </button>
    </form>
  );
};
