import React, { useEffect, useState } from 'react';

const CustomerOrder = (props) => {
    const [enteredId, setEnteredId] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDish, setEnteredDish] = useState('');
    const [selectedTable, setSelectedTable] = useState('Table1');
    


    
    const idChangeHandler = (event) => {
        setEnteredId(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    }

    const dishChangeHandler = (event) => {
        setEnteredDish(event.target.value);
    }

    const tableSelectedHandler = (event) => {
        setSelectedTable(event.target.value);
    }
    
    const submitOrderHandler = (event) => {
        event.preventDefault();

        const orderData = {
            id: enteredId,
            price: enteredPrice,
            dish: enteredDish,
            table: selectedTable
        }
        //console.log(orderData);
        localStorage.setItem(orderData.id, JSON.stringify(orderData));
        

        props.onSaveOrderData(orderData);
    }

    return (
        <form onSubmit={submitOrderHandler}>
            <lable>Unique Order Id</lable>
            <input type="number" value={enteredId} onChange={idChangeHandler}/>
            <lable>Choose Price</lable>
            <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
            <lable>Choose Dish</lable>
            <input type="text" value={enteredDish} onChange={dishChangeHandler}/>
            <label>Choose a table</label>
            <select value={selectedTable} onChange={tableSelectedHandler}>
                <option value="Table1">Table1</option>
                <option value="Table2">Table2</option>
                <option value="Table3">Table3</option>
            </select>
            <button type='submit'>Add to bill</button>
        </form>
    )
};

export default CustomerOrder;