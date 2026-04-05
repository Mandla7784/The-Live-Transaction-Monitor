
import './App.css';
import Navbar from './components/Navbar';
import TransactionalTable from './components/TransactionalTable';

function App() {


  return (
 

    <div className="container mt-5">
      <Navbar />
      <TransactionalTable />
   
      <button className="btn btn-primary">Add New Transaction </button>
    </div>
  

  );

}

export default App;

