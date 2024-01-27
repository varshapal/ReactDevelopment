import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../store/CartContext";
import Modal from "./Modal";
import { Button } from "react-bootstrap";

const Cart = ({ cartItems, onClose }) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);


  
//   const cartElements = [
//     {
//       title: "Colors",

//       price: 100,

//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//       quantity: 2,
//     },

//     {
//       title: "Black and white Colors",

//       price: 50,

//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//       quantity: 3,
//     },

//     {
//       title: "Yellow and Black Colors",

//       price: 70,

//       imageUrl:
//         "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//       quantity: 1,
//     },
//   ];

  

//   return (
//     <>
//       <div className={classes.cart}>
//         <h6>ITEM PRICE QUANTITY</h6>
//         {cartElements.map((item, index) => (
//           <ul>
//             <li>
//               <img src={item.imageUrl} alt="flower" /> {item.title} $
//               {item.price.toFixed(2)} {item.quantity}
//             </li>
//             <button>Remove</button>
//           </ul>
//           // <p>{item.title} - <img src={item.imageUrl}  alt='flower'/> - {item.price} - {item.quantity}</p>
//         ))}
//         <button onClick={props.onClose}>Close</button>
//       </div>
      
//     </>
//   );

return (
  
    // <div className="modal">
    //   <div className="modal-content">
    //     <button className="close" onClick={onClose}>
    //       &times;
    //     </button>
        
      
    //     <h2>Shopping Cart</h2>
    //     <h1>Hellllllllloooooooo</h1>
    //     <p>Items in cart: {cartCtx.cartCount}</p>
    //     <ul>
          
    //       {cartItems.map((item, index) => (
    //         <li key={index}>
    //           {console.log(item.title)}
    //           <strong>Title:</strong> {item.title},{" "}
    //           <strong>Price:</strong> {item.price},<strong>Quantity:</strong>{" "}
    //           {item.quantity}
    //           {/* <button onClick={() => quantityChangeHandler(item)}>+</button>
    //           <button onClick={() => removeItemFromCartHandler(item)}>-</button> */}
    //         </li>
    //       ))}
    //     </ul>
    //     {/* <p>Total Amount: ${TotalAmount.toFixed(2)}</p>
    //     {hasItems && <button>Order</button>} */}
    //   </div>
    // </div>
    <Modal>
    <section className={classes.cart}>
    <button className="close" onClick={onClose}>
          &times;
         </button>
      
      <h2>Shopping Cart</h2>
      <ul>
          <p><strong>Title - Price - Quantity</strong></p>
          {cartItems.map((item, index) => (
             <li key={index}>
              
               <img src={item.imageUrl}  alt='flower'/> {item.title} - ${item.price}
               
               <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
               <Button variant="danger">Remove</Button>
               {/* <button onClick={() => quantityChangeHandler(item)}>+</button>
               <button onClick={() => removeItemFromCartHandler(item)}>-</button> */}
             </li>
           ))}
         </ul>
    </section>
    </Modal>
    
);


};

export default Cart;
