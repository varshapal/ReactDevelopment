import { useEffect, useState, useCallback } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "Food",
  });
  const [expenseList, setExpenseList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState(null);

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

    if (editMode) {
      updateHandler(id, formData);
    } else {
      postData(formData);
    }

    setFormData(expenses);
  };

  //Post data on database

  const postData = async (formData) => {
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
    console.log(data);
  };

  //update data on database

  const updateHandler = async (id, formData) => {
    const editRequest = await fetch(
      `https://react-http-9242d-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert("expense update successfully");
  };

  // Get data from database

  const getExpenses = useCallback( async () => {
    try{
        const response = await fetch(
            "https://react-http-9242d-default-rtdb.firebaseio.com/expenses.json"
          );
          const data = await response.json();
          console.log("data", data);
      
          const loadedExpense = [];
      
          for (const key in data) {
            loadedExpense.push({
              id: key,
              expense: data[key].expense,
              description: data[key].description,
              category: data[key].category,
            });
          }
      
          setExpenseList(loadedExpense);
    } catch(error) {
        console.log(error);
    }
    
  }, []);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  //delete data from database

  const deteletExpense = async (id) => {
    try {
      const deleteRequest = await fetch(
        `https://react-http-9242d-default-rtdb.firebaseio.com/expenses/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!deleteRequest.ok) {
        throw new Error("Failed to delete expense");
      }
      console.log("Expenses Successfully deleted");
      return { message: "successfully deleted" };
    } catch (error) {
      console.log("error", error);
    }
  };

  // Edit Data

  const editHandler = useCallback(async (id) => {
    try {
      const response = await fetch(
        `https://react-http-9242d-default-rtdb.firebaseio.com/expenses/${id}.json`
      );
      const data = await response.json();
      console.log("edit", data);
      setFormData(data);
      setEditMode(true);
      setId(id);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        <button type="submit">
          {editMode ? "Update Expense" : "Add Expense"}
        </button>
      </form>
      <p>
        <strong>Expense List</strong>
        {expenseList.map((item) => (
          <p key={item.id}>
            {item.expense}- {item.description}- {item.category}{" "}
            <button onClick={() => deteletExpense(item.id)}>Delete</button>{" "}
            <button onClick={() => editHandler(item.id)}>Edit</button>
          </p>
        ))}
      </p>
    </section>
  );
};

export default ExpenseForm;
