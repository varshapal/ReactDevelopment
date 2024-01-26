import { useState, useRef } from "react";
import { useHistory} from 'react-router-dom';
import classes from "./Login.module.css";
import Store from "./Store";



const Login = () => {
    const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();


  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;


    if (isLogin) {
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs", {
        method: 'POST',
        body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
        }),
        headers: {
            'content-Type': 'application/json'
        }
      }).then((res) => {
        if(res.ok) {
            return res.json().then((data) => {
                history.push('/Store');
            })
        } else {
            return res.json().then((data) => {
                alert('authentication failed');
            })
        }
      })
    }
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInputRef}/>
        </div>
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
