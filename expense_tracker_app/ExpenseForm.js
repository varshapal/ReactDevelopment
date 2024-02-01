import { useState } from "react";

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

    const submitHandler = (e) => {
        e.preventDefault();
        const expenses = {
            expense: formData.expense,
            description: formData.description,
            category: formData.category
        }
        setExpenseList([...expenseList, expenses]);
        
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
            <p><h4>Expense List</h4>
                {expenseList.map((item) => <p>{item.expense}- {item.description}- {item.category}</p>)}</p>
        </section>
    )
};

export default ExpenseForm;