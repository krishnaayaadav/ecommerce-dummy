import ExpenseItems from './Components/ExpenseItems';
import './App.css';



function App() {
  // let expenseDate = new Date(2020,7,5);
  // let expenseTitle = 'School Fee';
  // let expenseAmount = 300;
  let totalExpense = [

                      {
                        id:1,
                        title: "Car Services",
                        amount: 300,
                        date: new Date(2001, 11, 25)
                      },

                      {
                        id:2,
                        title: "Collage Fee",
                        amount: 1000,
                        date: new Date(2121, 11, 25)
                      },

                      {
                        id:3,
                        title: "Examination Fee",
                        amount: 100,
                        date: new Date(2012, 11, 25)
                      },

  ]
  return (<div className='expenses'>
              <h2>User Expense List</h2>
              <ExpenseItems allExpenses={totalExpense}>  </ExpenseItems>
              <ExpenseItems allExpenses={totalExpense}>  </ExpenseItems>

              <ExpenseItems allExpenses={totalExpense}>  </ExpenseItems>

              
          </div>
  );
}

export default App;


// props are use to pass

// Normal Approach to passed data in
/* <ExpenseItems 
                  date={expenseDate}
                  title={expenseTitle}
                  amount={expenseAmount}>
              </ExpenseItems>
              
              */