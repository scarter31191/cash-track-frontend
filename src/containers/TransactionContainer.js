import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transcations'

class TransactionContainer extends React.Component {

    render() {
        return (
            <div>
                <TransactionInput />
                <Transactions Transactions={this.props.acount && this.props.account.transactions}/>
            </div>
        )
    }


}

export default TransactionContainer;