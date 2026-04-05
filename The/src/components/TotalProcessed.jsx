
import React from 'react';


function  TotalProcessed( {transactions}){


 const totalProcessed = transactions.filter(tx => tx.status === 'processed').length;
       console.log(totalProcessed); 

       return (
 <div className="card text-center p-3 mb-3">
      <h5>Total Processed</h5>
      <h2>{totalProcessed}</h2>
    </div>
        
       )
}

export default TotalProcessed;