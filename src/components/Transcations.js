import React from 'react';

const Transactions = (props) => {

    console.log(props.transactions)

    const handleDelete = () => {
        
    }

    return(
        <div>
            {props.transactions && props.transactions.map(transaction =>
                <li key={transaction.id}>
                    {transaction.amount} - {transaction.kind} - {transaction.description} <button onClick={handleDelete}>Delete</button>
                </li>
            )}    
        </div>
    )

}

export default Transactions;