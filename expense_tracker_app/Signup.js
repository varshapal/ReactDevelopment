import { useRef, useState, useContext,  } from "react";
import { useHistory} from 'react-router-dom';
import classes from "./Signup.module.css";
import AuthContext from "../store/auth-context";

const Signup = () => {
  const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        if(!isLogin) {
          const enteredConfirmPassword = confirmPasswordInputRef.current.value;

        if(enteredPassword !== enteredConfirmPassword) {
            alert('Password not match');
            return;
        }
        }
        
        let url;
        if(isLogin) {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs';
        } else {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs';
        }
            fetch(url, 
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if(res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication Failed';
                        //alert(errorMessage);
                        throw new Error(errorMessage);
                    })
                }
             }).then((data) => {
              //console.log(data);
              authCtx.login(data.idToken);
              history.replace('/');
             }).catch((err) => {
                alert(err.message);
             })

             
        }
    
        const clickHandler = () => {
          history.push('/forgot_password');
      }

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <h2>{isLogin ? "Login" : "SignUp"}</h2>
        <div className={classes.control}>
          <input type="email" placeholder="email"  required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <input type="password" placeholder="password" required ref={passwordInputRef}/>
        </div>
        {!isLogin && <div className={classes.control}>
          <input type="password" placeholder="confirm password" required ref={confirmPasswordInputRef}/>
        </div>}
        <div className={classes.actions}>
        {isLogin && <button onClick={clickHandler}>forgot password</button>}
        </div>
        
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </div>
      </form>
      <button onClick={switchAuthModeHandler}>{isLogin ?  'Do not have an account? sign up': 'Have an account? Login'  }</button>
    </section>
  );
};

export default Signup;
