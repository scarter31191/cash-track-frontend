import React from 'react'
// import {Redirect} from 'react-router-dom'

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
                {/* {account ? null : <Redirect to='/accounts' />} */}
                {account ? account.name : null} - {account ? account.balance : null} -
                {account ? account.goal_amount : null}
            </h1>
            <TransactionContainer account={account}/>
        </div>
       
    )

}

export default Account