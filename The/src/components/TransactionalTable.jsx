import React from 'react';
import mockTransactions from './mockData';
import TotalProcessed from './TotalProcessed';
console.log(mockTransactions);


function TransactionalTable() {

    const transactions = mockTransactions;
    const totalProcessed = transactions.filter(tx => tx.status === 'completed').length;




  return (
    <div>
      <h2>Transactional Table</h2>
      <h3>Total Processed: <span className='bg-green'>{totalProcessed}</span> </h3>

    
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
          {mockTransactions.map((transaction, index) => (
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