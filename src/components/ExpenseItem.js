
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import './ExpenseItem.css'


function ExpenseItem(props){


    return (
        <Card className='expense-item'>
            <div>
                <h2>{props.title}</h2>
                <ExpenseDate expenses={props}></ExpenseDate>
                <div className='price'>{props.amount}£</div>
            </div>
        </Card>
    )
}


export default ExpenseItem












