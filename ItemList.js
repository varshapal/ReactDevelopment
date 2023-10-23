
const ItemList = (props) => {
    
    return (
        <div>
            {props.items.map((order) => <li key={order.id}>{order.price} {order.table} {order.dish}<button>Delete</button></li>)}
            
        </div>
    )
};

export default ItemList;