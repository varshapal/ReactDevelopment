import { useContext } from "react";
import { Fragment, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../store/CartContext";
import AuthContext from "../store/auth-context";

const Header = (props) => {
    const authCtx = useContext(AuthContext);
    const cartCtx = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    //const isLoggedIn = authCtx.isLoggedIn;
    const cartCount = cartCtx.cartCount;
    
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
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to="/contact_us">ContactUs</NavLink>
                        <NavLink to='/store'>Store</NavLink>
                        <NavLink to='/product'>Product</NavLink>
                        
                    </Nav>
                    <Button variant="outline-primary" onClick={openCartHandler}>Cart<span><sup>{cartCount}</sup></span></Button>
                    {showCart && (<Cart  cartItems={cartCtx.cartItems} onClose={hideCartHandler}/>)}
                    {console.log(cartCtx.cartItems)}
                </Container>
            </Navbar>
        </Fragment>
    )
};
export default Header;