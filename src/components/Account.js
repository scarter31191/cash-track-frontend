import React from 'react'
// import {Redirect} from 'react-router-dom'

import TransactionContainer from '../containers/TransactionContainer'

const Account = (props) => {

    // console.log(props)

    // let account = props.accounts[props.match.params.id -1]
    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
// debugger;
    // console.log(account)
   const handleDelete = (account) => {
       debugger;
    }

    return (
        <div>
            <h1>
                {/* {account ? null : <Redirect to='/accounts' />} */}
                {account ? account.name : null} - Balance: {account ? account.balance : null} -
                Goal Amount: {account ? account.goal_amount : null} 
            </h1>
            <TransactionContainer account={account}/>
        
            <button onClick={() => handleDelete(account)}>Delete Account</button>
        </div>
       
    )

}

export default Account