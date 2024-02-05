import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

import Cart from './Cart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.ui.showCart);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const clickHandler = () => {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
    

  );
};

export default CartButton;
