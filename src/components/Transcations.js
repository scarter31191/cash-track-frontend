import React from 'react';
import {connect} from 'react-redux';
import {deleteTransaction} from '../actions/deleteTransaction';

const Transactions = (props) => {

    console.log(props.transactions)

    const handleDelete = (transaction) => {
        // debugger;
        props.deleteTransaction(transaction.id, props.account.id)
    }

    return(
        <div>
            {props.transactions && props.transactions.map(transaction =>
                <li key={transaction.id}>
                    {transaction.amount} - {transaction.kind} - {transaction.description} <button onClick={() => handleDelete(transaction)}>Delete</button>
                </li>
            )}    
        </div>
    )

}

export default connect(null, {deleteTransaction})(Transactions);