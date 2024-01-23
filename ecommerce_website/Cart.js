import classes from "./Cart.module.css";


const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  

  return (
    <>
      <div className={classes.cart}>
        <h6>ITEM PRICE QUANTITY</h6>
        {cartElements.map((item, index) => (
          <ul>
            <li>
              <img src={item.imageUrl} alt="flower" /> {item.title} $
              {item.price.toFixed(2)} {item.quantity}
            </li>
            <button>Remove</button>
          </ul>
          // <p>{item.title} - <img src={item.imageUrl}  alt='flower'/> - {item.price} - {item.quantity}</p>
        ))}
        <button onClick={props.onClose}>Close</button>
      </div>
      
    </>
  );
};

export default Cart;
