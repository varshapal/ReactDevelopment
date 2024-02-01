import { useEffect, useState } from "react";

const ExpenseForm = () => {
    const [formData, setFormData] = useState({
        expense: '',
        description: '',
        category: 'Food'
    });
    const [expenseList, setExpenseList] = useState([]);

    const inputChangeHandler = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const expenses = {
            expense: formData.expense,
            description: formData.description,
            category: formData.category
        }
        //setExpenseList([...expenseList, expenses]);

        const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json', {
            method: 'POST',
            body: JSON.stringify(expenses),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        //console.log(data);
        
        
    }

    const getExpenses = async () => {
        const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json');
        const data = await response.json();
        console.log("data",data);
        
        const loadedExpense = [];

        for( const key in data) {
            loadedExpense.push({
                id: key,
                expense: data[key].expense,
                description: data[key].description,
                category: data[key].category
            })
        }

        setExpenseList(loadedExpense);
    }

    useEffect(() => {
        getExpenses();
    }, [])

    const deteletExpense = async () => {
        try {
            const response = await fetch('https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json');
        const data = await response.json();
        //console.log(data);
        for(const key in data) {
            const deleteRequest = await fetch(`https://react-http-9242d-default-rtdb.firebaseio.com/expenses/${key}.json`, {
                method: 'DELETE',
            });
            if(!deleteRequest.ok) {
                throw new Error('Failed to delete expense');
                
            }
            
            console.log('Expenses Successfully deleted');
            return{message: 'successfully deleted'};
            
        }
        
        } catch(error) {
            console.log("error", error);
            
        }
        
    }

    return(
        <section>
            <form onSubmit={submitHandler}>
                <label>
                    Expense
                    <input type="number" name="expense" value={formData.name} onChange={inputChangeHandler}/>
                </label>
                <label>
                    Expense Description
                    <input type="text" name="description" value={formData.description} onChange={inputChangeHandler}/>
                </label>
                <label>
                    Category
                    <select name="category" value={formData.category} onChange={inputChangeHandler}>
                        <option value='Food'>Food</option>
                        <option value='Petrol'>Petrol</option>
                        <option value='salary'>Salary</option>
                    </select>
                </label>
                <button type="submit">Add Expense</button>
            </form>
            <p><strong>Expense List</strong>
                {expenseList.map((item) => <p>{item.expense}- {item.description}- {item.category} <button onClick={deteletExpense}>Delete</button> <button>Edit</button></p>)}
                
                
                </p>
        </section>
    )
};

export default ExpenseForm;