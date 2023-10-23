
import CustomerOrder from "./CustomerOrder";
const NewOrder = (props) => {
    const saveOrderDataHandler = (enteredOrderData) => {
        const customerOrderData = {
            ...enteredOrderData,
            id: Math.random().toString()
        }
        props.onAddOrder(customerOrderData);
    }
    return (
        <div>
            <CustomerOrder onSaveOrderData={saveOrderDataHandler}/>
        </div>
    )
};

export default NewOrder;