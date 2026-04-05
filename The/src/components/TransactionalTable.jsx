import React from 'react';
import mockTransactions from './mockData';

console.log(mockTransactions);


function TransactionalTable() {
  return (
    <div>
      <h2>Transactional Table</h2>
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
    </div>
  );
}

export default TransactionalTable;