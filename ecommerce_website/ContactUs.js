import React, { useRef } from 'react';
import classes from './ContactUs.module.css';

const ContactUs = (props) => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        //add validation

        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }

        props.onAddUser(user);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div className={classes.control}>
                <label htmlFor="phone_number">Phone Number</label>
                <input type="number" id="phone_number" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

export default ContactUs;