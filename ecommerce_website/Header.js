import { Fragment, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

const Header = (props) => {
    const [showCart, setShowCart] = useState(false);

    const openCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    return(
        <Fragment>
            <Navbar bg="dark" expand="sm" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React Bootstarp</Navbar.Brand>
                    <Nav className="justify-content-center" >
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to="/contact_us">ContactUs</NavLink>
                        <NavLink to='/store'>Store</NavLink>
                        
                    </Nav>
                    <Button variant="outline-primary" onClick={openCartHandler}>Cart<span><sup>0</sup></span></Button>
                    {showCart && (<Cart data={props.data} onClose={hideCartHandler}/>)}
                </Container>
            </Navbar>
        </Fragment>
    )
};
export default Header;