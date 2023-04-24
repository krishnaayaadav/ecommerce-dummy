
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';


function ExpenseItems(props){
      // let {month,year,date} = {props.}
      const expenses = props.allExpenses;

      for(let i=0; i<expenses.length; i++){
            const expense = expenses[i];
            let {id,title, amount, date} = expense;
         return(<div className="expense-items">
            <div className='expense-description'>
                  <h2> {title} </h2>
                  <ExpenseDate date={date} />
                  <p>Amount: $: {amount} </p>
            </div>
         </div>)
      }
      
}

export default ExpenseItems