import classes from "./Expense.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../store/expense-slice";
import { themeActions } from "../store/theme-slice";
import ExpenseList from "./ExpenseList";

const Expense = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense.expenses);
  const total = useSelector((state) => state.expense.total);
  const show = useSelector((state) => state.expense.showData);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "Food",
  });

  const inputChangeHandler = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const expenses = {
      expense: formData.expense,
      description: formData.description,
      category: formData.category,
    };

    const response = await fetch(
      "https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    setFormData({ expense: "", description: "", category: "Food" });

    //get Data

    const getRequest = await fetch(
      "https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json"
    );
    const getData = await getRequest.json();
    console.log(getData);

    dispatch(expenseActions.addExpense(expenses));
    dispatch(expenseActions.total(Number(formData.expense)));
    dispatch(expenseActions.showData());
  };

  const themeHandler = () => {
    dispatch(themeActions.toggleTheme());
  }


  //download CSV file
  const downloadHandler = () => {
    const csvData = convertToCSV(expense);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  const convertToCSV = (expense) => {
    console.log(expense);
    const headers = Object.keys(expense[0]).join(',');
    const rows = expense.map(obj => Object.values(obj).join(',')).join('\n');
    return `${headers}\n${rows}`;
  };
    
  

  return (
    <section className={classes.expense}>
      <div
        className={isDarkTheme ? classes["dark-theme"] : classes["light-theme"]}
      >
        <form onSubmit={submitHandler}>
          <label>
            Expense
            <input
              type="number"
              name="expense"
              value={formData.expense}
              onChange={inputChangeHandler}
            />
          </label>
          <label>
            Expense Description
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={inputChangeHandler}
            />
          </label>
          <label>
            Category
            <select
              name="category"
              value={formData.category}
              onChange={inputChangeHandler}
            >
              <option value="Food">Food</option>
              <option value="Petrol">Petrol</option>
              <option value="salary">Salary</option>
            </select>
          </label>
          <label>
            Total Expense: <span>{total}</span>
          </label>
          <button type="submit">Add Expense</button>
          {/* <button onClick={showHandler}>Show data</button> */}
          
        </form>
        {total > 10000 && <button onClick={themeHandler}>Premium</button>}
        <h3>Expense List</h3>
        {expense.map((item) => (
          <div><p><strong>Expense Item - Expense description - Expense</strong></p>
          <p key={item.id}>
            {item.expense} - {item.description} - {item.category}
            
          </p>
          </div>
        ))}

        {isDarkTheme && <button onClick={downloadHandler}>Download CSV file</button>}
        
      </div>
    </section>
  );
};

export default Expense;
