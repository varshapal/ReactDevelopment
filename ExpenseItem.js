import './ExpenseItem.css';

function ExpenseItem(props) {
    
    // var expenseItems = props.data.map(expense => 
    // <li key={expense.id}>
    // title={expense.title}
    // amount={expense.amount}
    // date={expense.date}
    // location={expense.location}
    // </li>
    // );
    
    //console.log(props.data);
    return (
        // <div>{props.data.map(expense => 
        //     <li>{expense.title} {expense.amount} {expense.location} {expense.date.toISOString()}</li>
            

        //     )}</div>
        
        <div>{props.data.map(expense => 
            <div className="expense-item">
        
            <div>{expense.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expense.title}</h2>
                <h2>{expense.location}</h2>
                <div className="expense-item__price">${expense.amount}</div>
            </div>
            
        </div>
        )}
        
        </div>
        
    )

}
export default ExpenseItem;