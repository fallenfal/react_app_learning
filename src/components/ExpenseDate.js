

function ExpenseDate(props){

    const month = props.expenses.date.toLocaleString('us-US', {month: 'long'});
    const day = props.expenses.date.toLocaleString('us-US', {day: '2-digit'})
    const year = props.expenses.date.getFullYear()


    return (
        <div className='date'><strong>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </strong></div>
    )



}

export default ExpenseDate
