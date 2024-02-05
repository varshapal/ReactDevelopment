import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/index';
import Cart from './Cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.showCart);

  const clickHandler = () => {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
    

  );
};

export default CartButton;
