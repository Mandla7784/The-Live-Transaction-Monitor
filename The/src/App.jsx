
import './App.css';
import Navbar from './components/Navbar';
import TransactionalTable from './components/TransactionalTable';

function App() {


  return (
    <div>
      <Navbar />
    <div className="container mt-5">
      <TransactionalTable />
   
      <button className="btn btn-primary">Add Transaction </button>
    </div>
    </div>

  );

}

export default App;

