
import './App.css';
import Navbar from './components/Navbar';
import TransactionalTable from './components/TransactionalTable';
import { ThemeProvider } from './components/ThemeContext';

function App() {


  return (
    <ThemeProvider>
      <div className="container mt-5">
        <Navbar />
        <TransactionalTable />
     
        <button className="btn btn-primary">Add New Transaction </button>
      </div>
    </ThemeProvider>

  );

}

export default App;

