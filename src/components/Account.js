import React from 'react'
import TransactionContainer from '../containers/TransactionContainer'

const Account = (props) => {

    // console.log(props)

    // let account = props.accounts[props.match.params.id -1]
    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
// debugger;
    // console.log(account)

    return (
        <div>
            <h1>
                {account ? account.name : null} - Balance: {account ? account.balance : null} -
                Goal Amount: {account ? account.goal_amount : null} 
            </h1>
            <TransactionContainer account={account}/>
        </div>
       
    )

}

export default Account