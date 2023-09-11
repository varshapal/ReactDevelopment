import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) =>  {
    
    //const month = props.date.toLocalString('en-US', { month: 'long' });
    // const day = props.date.toLocalString('en-US', { day: 'long2-digit' });
    // const year = props.date.getFullYear();
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
        
        <Card>{props.data.map(expense => 
            <Card className="expense-item">
        
                {/* <div>
                    <div>{expense.date.toLocaleString('en-US', {month: 'long'})}</div>
                    <div>{expense.date.getFullYear()}</div>
                    <div>{expense.date.getDay()}</div>
                </div> */}
                <ExpenseDate date={expense.date}></ExpenseDate>
                <div className="expense-item__description">
                    {/* <h2>{expense.title}</h2>
                    <h2>{expense.location}</h2>
                    <div className="expense-item__price">${expense.amount}</div> */}
                    <ExpenseDetails amount={expense.amount} location={expense.location} title={expense.title}></ExpenseDetails>
            </div>
            
            </Card>
        )}
        
        </Card>
        
    )

}
export default ExpenseItem;