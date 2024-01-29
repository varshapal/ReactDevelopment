import { useRef, useState } from "react";
import classes from "./Signup.module.css";

const Signup = () => {

    const emailInputRef = useRef('');
    const passwordInputRef = useRef('');
    const confirmPasswordInputRef = useRef('');

    const [isLogin, setIsLogin] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current.value;

        if(enteredPassword !== enteredConfirmPassword) {
            alert('Password not match');
            return;
        }

        if(isLogin) {
            //....
        } else {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs', 
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
                    //return res.json();
                } else {
                    return res.json().then((data) => {
                        console.log(data);
                    
                    })
                }
             })
        }
    }

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <h2>SignUp</h2>
        <div className={classes.control}>
          <input type="email" placeholder="email"  required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <input type="password" placeholder="password" required ref={passwordInputRef}/>
        </div>
        <div className={classes.control}>
          <input type="password" placeholder="confirm password" required ref={confirmPasswordInputRef}/>
        </div>
        <div className={classes.actions}>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
