import { useSelector, useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/index';

const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state=> state.auth.isAuthentcation);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
