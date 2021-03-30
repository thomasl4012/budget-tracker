import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import Total from "./components/Total";
import Expense from "./components/Expense";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <h1 className="mt-3">Budget planner</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <Budget />
            </div>
            <div className="col-sm">
              <Remaining />
            </div>
            <div className="col-sm">
              <Total />
            </div>
          </div>
        </div>
        <h3 className="mt-3"> Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <Expense />{" "}
          </div>
        </div>
        <h3 className="mt-3"> Add expense</h3>
        <div className=" mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
