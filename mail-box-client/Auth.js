import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import classes from './Auth.module.css';
import { useRef, useState } from "react";

const Auth = () => {
    const [isSignupScreen, setIsSignupScreen] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const toggleScreenHandler = () => {
        setIsSignupScreen((isSignupScreen) => !isSignupScreen);
    }


    const submitHandler = async(e) => {
        e.preventDefault();

        const eneteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enetredCnfPassword = confirmPasswordInputRef.current.value;

        if(enteredPassword !== enetredCnfPassword) {
            alert('Password not match');
        }
        
        let url ;
        if(!isSignupScreen) {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBL0Dxkr3qq-HpRREjZfDFI5--szzAAycs';
        }
        fetch(url, {
            method: 'Post',
            body: JSON.stringify({
                email: eneteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = 'Authentication Failed';

                    throw new Error(errorMessage);
                }) 
            }
        }).then((data) => {
            console.log(data);
            console.log('Successfully Register');
        }).catch((error) => {
            alert(error.message);
        })
    }
    return(
        <section className={classes.auth}>
        <Container className="justify-content-center align-items-center text-center">
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Header>
                            <h3>{isSignupScreen ? 'SignUp' : 'Login'}</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={submitHandler}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="email" required ref={emailInputRef}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control  type="password" placeholder="password" required ref={passwordInputRef}/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="confirm password" required ref={confirmPasswordInputRef}/>
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Button variant="info" type="submit">{isSignupScreen ? 'Sign up' : 'Login'}</Button>
                                </Form.Group>
                            </Form>
                            <Button variant="secondary" onClick={toggleScreenHandler}>{isSignupScreen ? 'Have an account? Login' : 'Do Not have an account? signup'}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </section>
    )
};

export default Auth;