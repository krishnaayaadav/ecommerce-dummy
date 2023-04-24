import ExpenseItems from './Components/ExpenseItems';
import './App.css'

function App() {
  return ( <div className='expenses'>
               <h2>User Expense List</h2>
              <ExpenseItems></ExpenseItems>
          </div>
     
  );
}

export default App;
