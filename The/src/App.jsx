
import './App.css'






const mockTransactions = [
  {
    date: new Date("2022-01-01"),
    otherParty: "John Doe",
    amount: 100,
    status: "pending"
  },
  {
    date: new Date("2022-02-01"),
    otherParty: "Jane Doe",
    amount: 200,
    status: "completed"
  },
  {
    date: new Date("2022-03-01"),
    otherParty: "John Smith",
    amount: 300,
    status: "failed"
  },
];



function App() {






  return (
    <div className="container mt-5">
   
      <button className="btn btn-primary">Add Transaction </button>
    </div>
  );
}

export default App;

