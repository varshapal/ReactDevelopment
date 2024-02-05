import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  const addProductHandler = () => {
    dispatch(cartActions.addProductToCart({
      id: id,
      price: price,
      title: title
    }));
  }

  const removeProductHandler = () => {
    dispatch(cartActions.removeProductFromCart(id));
  }
  

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProductHandler}>-</button>
          <button onClick={addProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
