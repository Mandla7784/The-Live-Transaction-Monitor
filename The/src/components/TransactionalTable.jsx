import React from 'react';
import mockTransactions from './mockData';
import TotalProcessed from './TotalProcessed';
import { useEffect , useState } from 'react';

const api_URL_endpoint  = 'https://jsonplaceholder.typicode.com/posts';
console.log(mockTransactions);


function TransactionalTable() {
  const [transactions, setTransactions] = useState([]);
  const totalProcessed = transactions.filter(tx => tx.status === 'completed').length;
  const [errorMessage , setErrorMessage] = useState('');


  // Use Effect function called when the component mounts to fetch data from the API and transform it into the desired format for transactions
useEffect(()=> {

  async function  fetchData() {
    const response = await fetch(api_URL_endpoint);


    if(response.status == 200) {
          const data = await response.json();
          const transformed = data.splice(0,10).map(item => ({
          date: new Date(),
          otherParty: item.title.slice(0,20),
          amount: Math.floor(Math.random() * 1000),
          status: ['pending', 'completed', 'failed'][Math.floor(Math.random() * 3)]
    }));
    
    setTransactions(transformed);
    }else{
      setErrorMessage(`Failed to fetch transactions. Connection Lost.${response.status}`);
       
      return;
    }

  }
  fetchData();
} , [])



  return (
    <div>
      <h2>Transactional Table</h2>
      <h3 className='text-success'>Total Processed: <span className='text-success'>{totalProcessed}</span> </h3>
      {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}

    
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Other Party</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* I will Render transaction rows here */}
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date.toLocaleDateString()}</td>
              <td>{transaction.otherParty}</td>
              <td>{transaction.amount}</td>
              <td>
                <span className={`badge text-${transaction.status === 'pending' ? 'warning' : transaction.status === 'completed' ? 'success' : 'danger'}`}>
                  {transaction.status}
                </span>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <TotalProcessed transactions={transactions} />
        </div>
      </div>
    </div>



    </div>
  );
}

export default TransactionalTable;