import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../store/index";

const Expense = () => {
  const dispatch = useDispatch();
  const expense = useSelector((state) => state.expense.expenses);
  const total = useSelector((state) => state.expense.total);
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


    //get data

    const getRequest = await fetch(
      "https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json"
    );
    const getData = await getRequest.json();
    console.log(getData);
    const loadedExpense = [];

    // for (const key in getData) {
    //   loadedExpense.push({
    //     id: key,
    //     expense: getData[key].expense,
    //     description: getData[key].description,
    //     category: getData[key].category,
    //   });
      //console.log("data",loadedExpense);
      dispatch(expenseActions.addExpense(expenses));
      dispatch(expenseActions.total(Number(formData.expense)));
    }
  

  

  return (
    <section>
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
        {total > 10000 && <button>Premium</button>}
      </form>
      
      {/* <p>
        <strong>Expense List</strong>
        {expense.map((item) => (
          <p key={item.id}>
            {item.expense}- {item.description}- {item.category}{" "}
            <button onClick={() => deteletExpense(item.id)}>Delete</button>{" "}
            <button onClick={() => editHandler(item.id)}>Edit</button>
          </p>
        ))}
      </p> */}
    </section>
  );
};

export default Expense;
