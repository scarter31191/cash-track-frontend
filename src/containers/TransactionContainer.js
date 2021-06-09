import React from 'react'
import TransactionInput from '../components/TransactionInput'
import Transactions from '../components/Transcations'

class TransactionContainer extends React.Component {

    render() {
        return (
            <div>
                <TransactionInput account={this.props.account}/><br></br>
                <Transactions transactions={this.props.account.transactions} account={this.props.account}/>
            </div>
        )
    }


}

export default TransactionContainer;