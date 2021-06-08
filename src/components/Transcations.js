import React from 'react';

const Transactions = (props) => {

    console.log(props.transactions)

    return(
        <div>
            {props.transactions && props.transactions.map(transaction =>
                <li key={transaction.id}>
                    {transaction.amount} - {transaction.kind} - {transaction.description}
                </li>
            )}    
        </div>
    )

}

export default Transactions;