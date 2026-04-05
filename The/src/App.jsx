
import './App.css';
import Navbar from './components/Navbar';
import TransactionalTable from './components/TransactionalTable';
import { ThemeProvider } from './components/ThemeContext';
import { SearchProvider } from './components/SearchProvider';
function App() {


  return (
    <ThemeProvider>
    <SearchProvider>

        <div className="container mt-5">
            <Navbar />
            <TransactionalTable />
        
            <button className="btn btn-primary">Add New Transaction </button>
          </div>
      </SearchProvider>
    </ThemeProvider>

  );

}

export default App;

